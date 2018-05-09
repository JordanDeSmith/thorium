import React, { Component } from "react";
import SideNav from "./FlightDirector/sideNav";
import { Route } from "react-router-dom";
import TacticalMapCore from "../components/views/TacticalMap";
import DebugList from "./DebugList";
import {
  FlightConfig,
  SetConfig,
  MissionConfig,
  SimulatorConfig,
  AssetConfig,
  Welcome,
  SoftwarePanels,
  SurveyForms,
  Keyboards,
  ClientsLobby
} from "./FlightDirector";
import MissionPicker from "./missionPicker";
import SimulatorPicker from "./simulatorPicker";
import "./config.css";

class Config extends Component {
  state = { training: false };
  trainingProps = () => {
    return {
      training: this.state.training,
      stopTraining: () => this.setState({ training: false })
    };
  };
  render() {
    const { history } = this.props;
    return (
      <div className="config-container">
        <SideNav startTraining={() => this.setState({ training: true })} />
        <div>
          <Route
            path="/"
            exact
            render={props => <Welcome {...props} {...this.trainingProps()} />}
          />
          <Route
            path="/config/flight"
            exact
            render={props => (
              <FlightConfig
                {...props}
                {...this.trainingProps()}
                history={history}
              />
            )}
          />
          <Route
            path="/config/flight/:flightId"
            exact
            render={props => (
              <ClientsLobby
                {...props}
                history={history}
                {...this.trainingProps()}
              />
            )}
          />
          <Route path="/config/assets" component={AssetConfig} />
          <Route path="/config/mission" exact component={MissionPicker} />
          <Route path="/config/simulator" exact component={SimulatorPicker} />
          <Route path="/config/mission/:missionId" component={MissionConfig} />
          <Route
            path="/config/simulator/:simulatorId"
            component={SimulatorConfig}
          />
          <Route
            path="/config/tacticals"
            render={props => {
              return (
                <div style={{ height: "100%" }}>
                  <TacticalMapCore dedicated={true} {...props} />
                </div>
              );
            }}
          />
          <Route path="/config/sets" component={SetConfig} />
          <Route
            path="/config/panels"
            render={props => <SoftwarePanels {...props} history={history} />}
          />
          <Route
            path="/config/survey"
            render={props => <SurveyForms {...props} history={history} />}
          />
          <Route
            path="/config/keyboard"
            render={props => <Keyboards {...props} history={history} />}
          />
          <Route path="/config/debug" component={DebugList} />
        </div>
      </div>
    );
  }
}

export default Config;
