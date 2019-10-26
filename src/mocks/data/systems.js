export default {
  shortRangeComm: [
    {
      id: "1be6ccd4-51d2-4318-8ffb-344814094af1",
      simulatorId: "a334d67e-f832-48be-a10b-3727c02ff07e",
      name: "Short Range Communications",
      arrows: [
        {
          id: "32765eb3-b9a5-41c5-80c6-ccbb18d9e0e7",
          signal: "0a014e45-1fa4-4fc6-aa40-1c7155fed7c2",
          frequency: 0.62,
          connected: false,
          muted: false,
        },
        {
          id: "0e085979-d2d6-418f-a0ac-e619e9a94cb0",
          signal: "51c1a326-b81d-4817-8bd6-4019ae3a4e11",
          frequency: 0.24,
          connected: false,
          muted: false,
        },
      ],
      signals: [
        {
          id: "8b887969-b9d2-451f-bdf2-af1f89d9345c",
          name: "Romulan",
          image: "/Comm Images/Romulan.png",
          color: "#00ff00",
          range: {
            lower: 0.85,
            upper: 1,
          },
        },
        {
          id: "94c425e6-c570-4cc4-ae7d-9ab03060525e",
          name: "Cardassian",
          image: "/Comm Images/Cardassian.png",
          color: "#ffaa00",
          range: {
            lower: 0.75,
            upper: 0.85,
          },
        },
        {
          id: "0a014e45-1fa4-4fc6-aa40-1c7155fed7c2",
          name: "General Use",
          image: "/Comm Images/General Use.png",
          color: "#ffffff",
          range: {
            lower: 0.58,
            upper: 0.75,
          },
        },
        {
          id: "c4a1a1bf-503b-41b0-bc92-f90100e1b094",
          name: "Starfleet",
          image: "/Comm Images/Starfleet.png",
          color: "#0088ff",
          range: {
            lower: 0.4,
            upper: 0.58,
          },
        },
        {
          id: "387fbaa7-ee7b-4b08-bfd5-67ae0cc4b480",
          name: "Klingon",
          image: "/Comm Images/Klingon.png",
          color: "#ff0000",
          range: {
            lower: 0.3,
            upper: 0.4,
          },
        },
        {
          id: "51c1a326-b81d-4817-8bd6-4019ae3a4e11",
          name: "Orion",
          image: "/Comm Images/Orion.png",
          color: "#888888",
          range: {
            lower: 0.22,
            upper: 0.3,
          },
        },
        {
          id: "dc578187-418b-4846-95cd-741b5d8bce1b",
          name: "Ferengi",
          image: "/Comm Images/Ferengi.png",
          color: "#ffff00",
          range: {
            lower: 0,
            upper: 0.22,
          },
        },
      ],
      state: "hailing",
      frequency: 0.7014247690621576,
      amplitude: 0.5,
      power: {
        power: 3,
        powerLevels: [3],
      },
      damage: {
        damaged: false,
        report: null,
      },
    },
  ],
  internalComm: [
    {
      id: "78d7bd75-e7af-41e7-adfc-0c0c29012bb0",
      name: "Internal Communications",
      state: "idle",
      outgoing: null,
      incoming: null,
      damage: {
        damaged: false,
        report: null,
      },
      power: {
        power: 0,
        powerLevels: [],
      },
    },
  ],
  longRangeCommunications: [
    {
      id: "11f2e785-a1b6-45cc-8d8d-a0090fdc4ab9",
      simulatorId: "a334d67e-f832-48be-a10b-3727c02ff07e",
      name: "Long Range Communications",
      satellites: 3,
      presetMessages: [
        {
          label: "Yo",
          value:
            "To: Voyager\nFrom: Starbase 74\n\nWhat is your status, Voyager? We haven't heard from you in a while.\n\nStarbase 74 out.",
        },
      ],
      messages: [
        {
          id: "f809bdac-a1fa-4203-98e0-ac7aaad6a7a7",
          a: 10,
          f: 10,
          ra: 20,
          rf: 50,
          sender: "Me",
          message: "\nHello there, someone!\n\nMe out",
          decodedMessage: "",
          encrypted: false,
          sent: true,
          timestamp:
            "Mon Oct 21 2019 21:18:27 GMT-0600 (Mountain Daylight Time)",
          datestamp: "4551.2",
          deleted: false,
          approved: false,
          crew: true,
        },
      ],
      interception: true,
      difficulty: 30000,
      locked: false,
      decoded: false,
      damage: {
        damaged: false,
        report: null,
      },
      power: {
        power: 2,
        powerLevels: [2],
      },
    },
  ],
  probes: [
    {
      id: "8813dbdc-ddb6-44a4-869c-6fd265035e0b",
      simulatorId: "baea999a-5aca-441c-b244-5eb37bd18a6a",
      type: "Probes",
      torpedo: false,
      types: [
        {
          id: "class-i",
          name: "Class I Probe",
          size: 4,
          count: 30,
          description:
            "The smallest probe; can only hold 4 units of equipment. Use for probe networks and general purposes.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
            },
          ],
        },
        {
          id: "class-ii",
          name: "Class II Probe",
          size: 10,
          count: 30,
          description:
            "This medium-sized probe can hold 10 units of equipment. Use for probe networks and general purposes.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
            },
          ],
        },
        {
          id: "class-iii",
          name: "Class III Probe",
          size: 16,
          count: 30,
          description:
            "This is the largest standard probe. It can hold up to 16 units of equipment. Use for probe networks and general purposes.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
            },
          ],
        },
        {
          id: "defense",
          name: "Defensive Probe",
          size: 20,
          count: 20,
          description:
            "This weapon-like probe has access to additional equipment. You can use it to defend your ship. It holds 20 units of equipment.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
            },
            {
              id: "self-destruct-kit",
              name: "Self-Destruct Kit",
              size: 1,
              count: 17,
              description:
                "A Self-Destruct Kit allows the probe to receive a self-destruct signal from the station.",
            },
            {
              id: "warp-nacelle",
              name: "Warp Nacelle",
              size: 1,
              count: 20,
              description:
                "A Warp Nacelle (warp core included) allows the probe to travel at warp speed.",
            },
            {
              id: "targeting-sensors",
              name: "Targeting Sensors",
              size: 2,
              count: 21,
              description:
                "Targeting sensors extends the targeting range of the probe.",
            },
            {
              id: "proximity-destruct",
              name: "Proximity Destruct",
              size: 2,
              count: 20,
              description:
                "A Proximity Self-Destruct detector tells the probe to blow-up when an enemy is near.",
            },
            {
              id: "titanium-armor-alloy",
              name: "Titanium Armor Alloy",
              size: 2,
              count: 15,
              description:
                "Titanium Armor Alloy increases the probe's defenses.",
            },
            {
              id: "stealth-field",
              name: "Stealth Field",
              size: 3,
              count: 7,
              description:
                "A stealth field masks the probe making it harder to detect.",
            },
            {
              id: "phaser-head",
              name: "Phaser Head",
              size: 3,
              count: 27,
              description:
                "A Phaser Head allows the probe to fire one phaser shot at an enemy ship.",
            },
          ],
        },
        {
          id: "science",
          name: "Science Probe",
          size: 12,
          count: 20,
          description:
            "This probe can use special emitters and detectors for specific scientific experiments. It holds 12 units of equipment.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
            },
            {
              id: "tachyon-emitter",
              name: "Tachyon Emitter",
              size: 3,
              count: 8,
              description:
                "A Tachyon Emitter allows the probe to interact with tachyon particles.",
            },
            {
              id: "resonance-emitter",
              name: "Resonance Emitter",
              size: 3,
              count: 8,
              description:
                "A Resonance Emitter allows the probe to interact with resonating particles.",
            },
            {
              id: "lithium-emitter",
              name: "Lithium Emitter",
              size: 3,
              count: 10,
              description:
                "A Lithium Emitter allows the probe to interact with lithium particles.",
            },
            {
              id: "carbon-emitter",
              name: "Carbon Emitter",
              size: 3,
              count: 8,
              description:
                "A Carbon Emitter allows the probe to interact with carbon particles.",
            },
            {
              id: "radiation-emitter",
              name: "Radiation Emitter",
              size: 3,
              count: 8,
              description:
                "A Radiation Emitter allows the probe to interact with radioactive particles.",
            },
            {
              id: "oxygen-emitter",
              name: "Oxygen Emitter",
              size: 3,
              count: 8,
              description:
                "An Oxygen Emitter allows the probe to interact with oxygen particles.",
            },
            {
              id: "hydrogen-emitter",
              name: "Hydrogen Emitter",
              size: 3,
              count: 8,
              description:
                "A Hydrogen Emitter allows the probe to interact with hydrogen particles.",
            },
            {
              id: "helium-emitter",
              name: "Helium Emitter",
              size: 3,
              count: 8,
              description:
                "A Helium Emitter allows the probe to interact with helium particles.",
            },
            {
              id: "graviton-emitter",
              name: "Graviton Emitter",
              size: 3,
              count: 8,
              description:
                "A Graviton Emitter allows the probe to interact with graviton particles.",
            },
            {
              id: "magnetic-emitter",
              name: "Magnetic Emitter",
              size: 3,
              count: 8,
              description:
                "A Magnetic Emitter allows the probe to interact with magnetic particles.",
            },
          ],
        },
      ],
      probes: [],
      name: "Probe Launcher",
      power: {
        power: 0,
        powerLevels: [],
      },
      damage: {
        damaged: false,
        report: null,
      },
      scienceTypes: [
        {
          id: "resonance-burst",
          name: "Resonance",
          type: "burst",
          description:
            "Stimulate anti-matter explosions. Discharges unwanted and dangerous particles from the deflector dish. Disrupts certain anomalies of an energetic nature. Nullifies the effects of plasma storms.",
          equipment: [
            "resonance-emitter",
            "extra-fuel-cell",
            "extra-fuel-cell",
            "radio-transceiver",
          ],
        },
        {
          id: "resonance-detector",
          name: "Resonance",
          type: "detector",
          description:
            "Detects vibrations and curves in space/time. Can be used to detect spatial anomalies' location and size.",
          equipment: [
            "resonance-emitter",
            "sensor-array",
            "extra-fuel-cell",
            "communications-signal-booster",
          ],
        },
        {
          id: "tachyon-burst",
          name: "Tachyon",
          type: "burst",
          description:
            "Used to neutralize certain phased matter. Can disrupt phaser fire and stealth systems.",
          equipment: [
            "tachyon-emitter",
            "radio-transceiver",
            "chemical-analysis-package",
          ],
        },
        {
          id: "tachyon-detector",
          name: "Tachyon",
          type: "detector",
          description:
            "Can locate certain star emissions, as well as cloaked ships.",
          equipment: [
            "tachyon-emitter",
            "sensor-array",
            "communications-signal-booster",
          ],
        },
        {
          id: "graviton-detector",
          name: "Graviton",
          type: "detector",
          description:
            "Detects ship movements, warp trails, impulse trails, and thruster movement.",
          equipment: [
            "graviton-emitter",
            "sensor-array",
            "subspace-encounter-package",
            "radio-transceiver",
          ],
        },
        {
          id: "graviton-burst",
          name: "Graviton",
          type: "burst",
          description:
            "Disrupts space/time anomalies. Seals ruptures. Dissipates subspace fields. Can disrupt certain shield systems.",
          equipment: [
            "graviton-emitter",
            "ecm-package",
            "extra-fuel-cell",
            "communications-signal-booster",
          ],
        },
        {
          id: "lithium-detector",
          name: "Lithium",
          type: "detector",
          description:
            "Locates lithium based life forms, lithium based space anomalies, and lithium based matter. Known as a common way to locate dilithium crystals and other such energy sources.",
          equipment: [
            "lithium-emitter",
            "extra-fuel-cell",
            "extra-fuel-cell",
            "radio-transceiver",
          ],
        },
        {
          id: "lithium-burst",
          name: "Lithium",
          type: "burst",
          description:
            "Masks trace amounts of lithium. Kills space-borne microorganisms.",
          equipment: [
            "lithium-emitter",
            "sensor-array",
            "sample-retrieval-package",
            "chemical-analysis-package",
          ],
        },
        {
          id: "magnetic-detector",
          name: "Magnetic",
          type: "detector",
          description:
            "Detects magnetic fields emanating from stars, planets, nebulae, and starships.",
          equipment: [
            "magnetic-emitter",
            "sensor-array",
            "metaphasic-shield-generator",
            "radio-transceiver",
          ],
        },
        {
          id: "magnetic-burst",
          name: "Magnetic",
          type: "burst",
          description:
            "Masks transporters signals. Can disrupt anti-matter, destabilize warp fields, and stop matter in a state of flux.",
          equipment: [
            "magnetic-emitter",
            "ecm-package",
            "extra-fuel-cell",
            "communications-signal-booster",
          ],
        },
        {
          id: "helium-burst",
          name: "Helium",
          type: "burst",
          description:
            "Masks trace amounts of helium. Used to help in terraforming operations. \n --NOT ADVISED TO BE USED NEAR NEBULAE AND OTHER SOURCES OF RADIATION--",
          equipment: [
            "helium-emitter",
            "ecm-package",
            "radio-transceiver",
            "extra-fuel-cell",
          ],
        },
        {
          id: "helium-detector",
          name: "Helium",
          type: "detector",
          description:
            "Locates helium based life forms, helium based space anomalies, and helium based matter.",
          equipment: [
            "helium-emitter",
            "sensor-array",
            "chemical-analysis-package",
            "communications-signal-booster",
          ],
        },
        {
          id: "hydrogen-burst",
          name: "Hydrogen",
          type: "burst",
          description:
            "Masks trace amounts of hydrogen. Can be used to stimulate fusion reactions and stall the collapse of red dwarf stars.",
          equipment: ["hydrogen-emitter", "extra-fuel-cell", "extra-fuel-cell"],
        },
        {
          id: "hydrogen-detector",
          name: "Hydrogen",
          type: "detector",
          description:
            "Locates hydrogen based life forms, hydrogen based space anomalies, and hydrogen based matter. Detects the current life cycle and age of a star.",
          equipment: [
            "hydrogen-emitter",
            "sensor-array",
            "sample-retrieval-package",
            "extra-fuel-cell",
          ],
        },
        {
          id: "oxygen-burst",
          name: "Oxygen",
          type: "burst",
          description:
            "Masks trace amounts of oxygen. Can also stimulate exothermic reactions.\n--WARNING: FLAMMABLE SUBSTANCE--",
          equipment: [
            "oxygen-emitter",
            "communications-signal-booster",
            "extra-fuel-cell",
            "extra-fuel-cell",
          ],
        },
        {
          id: "oxygen-detector",
          name: "Oxygen",
          type: "detector",
          description:
            "Locates oxygen based life forms, oxygen based space anomalies, and oxygen based matter.",
          equipment: [
            "oxygen-emitter",
            "sample-retrieval-package",
            "chemical-analysis-package",
            "extra-fuel-cell",
          ],
        },
        {
          id: "carbon-burst",
          name: "Carbon",
          type: "burst",
          description:
            "Masks trace amounts of carbon. Also known to regenerate planetary ozone layers. Helps to dissipate the fallout of matter/antimatter reactions.",
          equipment: [
            "carbon-emitter",
            "extra-fuel-cell",
            "extra-fuel-cell",
            "extra-fuel-cell",
          ],
        },
        {
          id: "carbon-detector",
          name: "Carbon",
          type: "detector",
          description:
            "Locates carbon based life forms, carbon based space anomalies, and carbon based matter.",
          equipment: [
            "carbon-emitter",
            "sensor-array",
            "sample-retrieval-package",
          ],
        },
        {
          id: "radiation-burst",
          name: "Radiation",
          type: "burst",
          description:
            "Masks general radiation. Locates unique radiation signatures, either artificial or naturally occurring.",
          equipment: [
            "radiation-emitter",
            "metaphasic-shield-generator",
            "extra-fuel-cell",
          ],
        },
        {
          id: "radiation-detector",
          name: "Radiation",
          type: "detector",
          description:
            "Detects the type and intensity of radiation in the surrounding area. Useful for setting shield frequencies.",
          equipment: [
            "radiation-emitter",
            "metaphasic-shield-generator",
            "sensor-array",
          ],
        },
      ],
    },
  ],
};
