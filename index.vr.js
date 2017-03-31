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
import PopUpModal from './components/PopUpModal';

export default class PortfolioVR extends React.Component {
  constructor () {
    super();
    this.state = {
      showPortfolioItems: false,
      modal: null
    }
  }

  setModal (data) {
    this.setState({modal: data});
  }

  render() {
    let {textColor} = this.state;
    return (
      <View>
        <Pano source={asset('lake.jpg')} style={{transform: [{rotateY: 165}]}}/>
        <InfoCard setModal={this.setModal.bind(this)} />
        { this.state.modal &&
          <PopUpModal modal={this.state.modal} setModal={this.setModal.bind(this)} style={{position: "absolute"}} />
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('PortfolioVR', () => PortfolioVR);
