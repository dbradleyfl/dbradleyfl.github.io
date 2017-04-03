import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  VrButton,
} from 'react-vr';

import Project from './Project';


export default class Projects extends React.Component {
  constructor (props) {
    super();
  }

  render() {
    let projectTitleStyle = {
      margin: .2,
      fontSize: 0.2,
      fontWeight: "bold",
      transform: [
        {translate: [0, 0, .1]}
      ]
    }
    return (
      <View style={{position: "absolute", alignItems: "center", transform: [{translate: [-1.1, 1.7, -5.5]}]}}>
        <Project posX={2.5} posZ={1.4} rotY={-35} >
          <Text style={projectTitleStyle}>Mixed Reality JS</Text>
        </Project>
        <Project posX={-2.5} posZ={1.4} rotY={35} delayAnim={1000} >
          <Text style={projectTitleStyle}>Violation Radar</Text>
        </Project>
        <Project posX={4.2} posZ={3.6} rotY={-70} delayAnim={2000}>
          <Text style={projectTitleStyle}>Tiller Presentation</Text>
        </Project>
        <Project posX={-4.2} posZ={3.6} rotY={70} delayAnim={3000}>
          <Text style={projectTitleStyle}>Haybale</Text>
        </Project>
      </View>
    );
  }
};
