import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class Project extends React.Component {
  constructor (props) {
    super();
    this.state = {
      opacity: new Animated.Value(0),
      x: new Animated.Value(0),
      z: new Animated.Value(0),
      rY: new Animated.Value(0),
    }
  }

  componentDidMount () {
    Animated.sequence([
      Animated.timing(this.state.opacity,
      {
        delay: this.props.delayAnim,
        duration: 800,
        toValue: 1,
      }),
      Animated.timing(this.state.x, { duration: 800, toValue: this.props.posX }),
      Animated.parallel([
        Animated.timing(this.state.z, { duration: 800, toValue: this.props.posZ }),
        Animated.timing(this.state.rY, { duration: 800, toValue: this.props.rotY }),
      ])
    ]).start();
  }

  render() {
    return (
      <Animated.View
        style={{ position: "absolute", opacity: this.state.opacity, width: 2, height: 3.3, backgroundColor: "rgba(46, 46, 46, 0.5)", alignItems: "center", transform: [{translateX: this.state.x }, {translateZ: this.state.z}, {rotateY: this.state.rY}]}}>
        {this.props.children}
      </Animated.View>
    );
  }
};
