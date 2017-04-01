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
import Card from './Card';

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
      <Animated.View style={{opacity: this.state.opacity, alignItems: "center", transform: [{translate: [-1.1, 1.7, -5]}]}}>
        <Card />

        <View style={{
            height: 3.2,
            transform: [{translate: [0, 0, .2]}],
            width: 2,
          }}>
          <Image source={asset('me.jpg')} style={{marginTop: .2, alignSelf: "center", width: 1.5, height: 1.5}}/>
          <Text style={nameStyle}>Devon Bradley</Text>
          <Text style={{...nameStyle, marginTop: -.05, fontSize: .15}}>Software Engineer</Text>
          <SocialMediaButtons handleEnter={this.handleEnter} handleExit={this.handleExit} setModal={this.props.setModal}/>
          <ShowProjectsButton handleEnter={this.handleEnter} handleExit={this.handleExit} handleClick={this.props.showProjectsToggle.bind(this)} showing={this.props.showProjects} />
        </View>
      </Animated.View>
    );
  }
};
