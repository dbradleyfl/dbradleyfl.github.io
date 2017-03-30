import React from 'react';
import {
  asset,
  Image,
  Text,
  View,
  VrButton,
} from 'react-vr';

import SocialMediaButtons from './SocialMediaButtons';
import ShowProjectsButton from './ShowProjectsButton';

export default class InfoCard extends React.Component {
  handleEnter () {
    this.setState({gazeEnabled: true});
  }

  handleExit () {
    this.setState({gazeEnabled: false});
  }
  render() {
    let nameStyle = {
      textAlign: "center",
      fontSize: .22,
      fontWeight: "bold",
      color: "white",
    };

    return (
      <View>
        <View style={{
            backgroundColor: "#2e2e2e",
            height: 3.2,
            opacity: 0.5,
            transform: [{translate: [-1, 1.7, -5]}],
            width: 2,
          }} />

        <View style={{
            height: 3.2,
            padding: .1,
            transform: [{translate: [-1, 5, -4.9]}],
            width: 2,
          }}>
          <Image source={asset('me.jpg')} style={{marginTop: .2, alignSelf: "center", width: 1.5, height: 1.5}}/>
          <Text style={nameStyle}>Devon Bradley</Text>
          <Text style={{...nameStyle, marginTop: -.05, fontSize: .15}}>Software Engineer</Text>
          <SocialMediaButtons handleEnter={this.handleEnter} handleExit={this.handleExit}/>
          <ShowProjectsButton handleEnter={this.handleEnter} handleExit={this.handleExit}/>
        </View>
      </View>
    );
  }
};
