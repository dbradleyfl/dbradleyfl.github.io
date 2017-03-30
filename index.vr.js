import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Scene,
  Text,
  View,
} from 'react-vr';

import InfoCard from './components/InfoCard';

export default class PortfolioVR extends React.Component {
  constructor () {
    super();
    this.state = {
      openingLink: null,
      showPortfolioItems: false,
    }
  }

  render() {
    let {textColor} = this.state;
    return (
      <Scene>
        <Pano source={asset('lake.jpg')} style={{transform: [{rotateY: 165}]}}/>
        <InfoCard />
      </Scene>
    );
  }
};

AppRegistry.registerComponent('PortfolioVR', () => PortfolioVR);
