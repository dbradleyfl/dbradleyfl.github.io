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

  componentDidMount () {
    console.log('mounted projects');
  }

  render() {
    return (
      <View style={{position: "absolute", alignItems: "center", transform: [{translate: [-1.1, 1.7, -5.5]}]}}>
        <Project>
          <Text>Blahhhh</Text>
        </Project>
      </View>
    );
  }
};
