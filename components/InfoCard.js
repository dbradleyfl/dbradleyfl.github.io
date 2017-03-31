import React from 'react';
import {
  asset,
  Animated,
  Image,
  Text,
  View,
  VrButton,
} from 'react-vr';

import SocialMediaButtons from './SocialMediaButtons';
import ShowProjectsButton from './ShowProjectsButton';

export default class InfoCard extends React.Component {
  constructor (props) {
    super();
    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  componentDidMount () {
    Animated.timing(this.state.opacity,
    {
      duration: 800,
      toValue: 1,
      delay: 1000,
    }).start()
  }
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
      <Animated.View style={{opacity: this.state.opacity}}>
        <View style={{
            backgroundColor: "#2e2e2e",
            height: 2.8,
            opacity: 0.5,
            transform: [{translate: [-1, 1.7, -5]}],
            width: 2,
            position: "absolute"
          }} />

        <View style={{
            height: 3.2,
            padding: .1,
            transform: [{translate: [-1, 1.8, -4.9]}],
            width: 2,
            position: "absolute"
          }}>
          <Image source={asset('me.jpg')} style={{marginTop: .2, alignSelf: "center", width: 1.5, height: 1.5}}/>
          <Text style={nameStyle}>Devon Bradley</Text>
          <Text style={{...nameStyle, marginTop: -.05, fontSize: .15}}>Software Engineer</Text>
          <SocialMediaButtons handleEnter={this.handleEnter} handleExit={this.handleExit} setModal={this.props.setModal}/>
        </View>
      </Animated.View>
    );
  }
};
