import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class PortfolioVR extends React.Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render() {
    let {textColor} = this.state;
    return (
      <View pointerEvents="auto">
        <Pano source={asset('lake.jpg')} style={{transform: [{rotateY: 165}]}}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('PortfolioVR', () => PortfolioVR);
