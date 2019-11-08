import React, {Component} from "react";
import {Query, Mutation} from "react-apollo";
import {Button} from "helpers/reactstrap";
import gql from "graphql-tag.macro";
import ConfigureTask from "./ConfigureTask";
import ConfigureMacro from "./ConfigureMacro";
import "./style.scss";

export const TASK_DEFINITION_QUERY = gql`
  query TaskDefinitions($simulatorId: ID) {
    taskDefinitions(simulatorId: $simulatorId) {
      id
      class
      name
      active
      stations {
        name
      }
      valuesInput
      valuesValue
    }
  }
`;
class TasksCore extends Component {
  state = {
    selectedDefinition: "nothing",
    station: "nothing",
    requiredValues: {},
    macros: [],
    preMacros: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedDefinition !== this.state.selectedDefinition) {
      const {taskDefinitions} = this.props;
      const {selectedDefinition} = this.state;
      const definition = taskDefinitions.find(t => t.id === selectedDefinition);
      if (definition.stations.length === 1) {
        this.setState({station: definition.stations[0].name});
      }
    }
  }
  render() {
    const {taskDefinitions, taskTemplates, simulator, cancel} = this.props;
    const {
      selectedDefinition,
      requiredValues,
      station,
      macros,
      preMacros,
      configureMacroId,
      client,
    } = this.state;
    const definitionGroups = taskDefinitions
      .concat()
      .sort((a, b) => {
        if (a.class > b.class) return 1;
        if (a.class < b.class) return -1;
        return 0;
      })
      .reduce((prev, n) => {
        prev[n.class] = prev[n.class] ? prev[n.class].concat(n) : [n];
        return prev;
      }, {});
    const definition = taskDefinitions.find(t => t.id === selectedDefinition);
    const configureMacro = macros.find(c => c.id === configureMacroId);
    const configurePreMacro = preMacros.find(c => c.id === configureMacroId);
    return (
      <div
        className="core-tasks"
        style={{display: "flex", flexDirection: "column", height: "100%"}}
      >
        {configureMacro || configurePreMacro ? (
          <ConfigureMacro
            cancel={() => this.setState({configureMacroId: null})}
            macro={configureMacro || configurePreMacro}
            update={action =>
              this.setState(state =>
                configureMacro
                  ? {
                      macros: state.macros.map(m =>
                        m.id === configureMacroId ? {...m, ...action} : m,
                      ),
                    }
                  : {
                      preMacros: state.preMacros.map(m =>
                        m.id === configureMacroId ? {...m, ...action} : m,
                      ),
                    },
              )
            }
            client={client}
          />
        ) : (
          <ConfigureTask
            definitionGroups={definitionGroups}
            selectedDefinition={selectedDefinition}
            taskTemplates={taskTemplates}
            definition={definition}
            station={station}
            requiredValues={requiredValues}
            simulator={simulator}
            macros={macros}
            preMacros={preMacros}
            updateSelectedDefinition={d =>
              this.setState({selectedDefinition: d})
            }
            updateRequiredValues={val => this.setState({requiredValues: val})}
            updateStation={stat => this.setState({station: stat})}
            updateMacros={mac => this.setState({macros: mac})}
            updatePreMacros={mac => this.setState({preMacros: mac})}
            configureMacro={id => this.setState({configureMacroId: id})}
          />
        )}
        <div style={{display: "flex"}}>
          <Button size="sm" color="danger" onClick={cancel} style={{flex: 1}}>
            Cancel
          </Button>
          <Mutation
            mutation={gql`
              mutation AddTask($taskInput: TaskInput!) {
                addTask(taskInput: $taskInput)
              }
            `}
            variables={{
              taskInput: {
                simulatorId: simulator.id,
                definition: definition && definition.id,
                values: {
                  ...(definition ? definition.valuesValue : {}),
                  ...requiredValues,
                },
                station,
                macros: macros.map(({id, ...m}) => m),
                preMacros: preMacros.map(({id, ...m}) => m),
              },
            }}
          >
            {action => (
              <Button
                size="sm"
                color="success"
                onClick={() => {
                  action();
                  cancel();
                }}
                style={{flex: 1}}
                disabled={!definition}
              >
                Create Task
              </Button>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}

const TaskCreator = props => (
  <Query
    query={TASK_DEFINITION_QUERY}
    variables={{simulatorId: props.simulator.id}}
  >
    {({loading, data, subscribeToMore}) => {
      if (loading || !data) return null;
      const {taskDefinitions} = data;
      return <TasksCore {...props} taskDefinitions={taskDefinitions} />;
    }}
  </Query>
);
export default TaskCreator;
