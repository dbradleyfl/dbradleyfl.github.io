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
import Projects from './components/Projects';

export default class PortfolioVR extends React.Component {
  constructor () {
    super();
    this.state = {
      showPortfolioItems: false,
      modal: null,
      showProjects: false,
    }
  }

  setModal (data) {
    this.setState({modal: data});
  }

  showProjectsToggle () {
    this.setState({showProjects: !this.state.showProjects});
  }

  render() {
    let {textColor} = this.state;
    return (
      <View>
        <Pano source={asset('lake.jpg')} style={{transform: [{rotateY: 165}]}}/>

        <InfoCard
          setModal={this.setModal.bind(this)}
          showProjectsToggle={this.showProjectsToggle.bind(this)}
          showProjects={this.state.showProjects}/>

        { this.state.modal &&
          <PopUpModal modal={this.state.modal} setModal={this.setModal.bind(this)} style={{position: "absolute"}} />
        }

        {this.state.showProjects &&
          <Projects />
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('PortfolioVR', () => PortfolioVR);
