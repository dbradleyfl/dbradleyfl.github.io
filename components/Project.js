import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  VrButton,
} from 'react-vr';

import Card from './Card';

export default class Project extends React.Component {
  constructor (props) {
    super();
    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  componentDidMount () {
    Animated.sequence([
      Animated.timing(this.state.opacity,
      {
        duration: 800,
        toValue: 1,
      }),
    ]).start()
  }

  render() {
    return (
      <Animated.View
        style={{opacity: this.state.opacity}}>
        <Card />
        {this.props.children}
      </Animated.View>
    );
  }
};
