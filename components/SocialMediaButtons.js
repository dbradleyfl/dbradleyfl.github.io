import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

import SocialMediaButton from "./SocialMediaButton";

export default class SocialMediaButtons extends React.Component {
  render() {
    let socialLogoStyle = {
      height: 0.4,
      width: 0.4,
    };

    return <View style={{flexDirection: "row", justifyContent: "space-between", margin: 0.05, marginTop: 0.1, marginBottom: 0.15}}>
      <SocialMediaButton name="github" socialLogoStyle={socialLogoStyle} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit} />
      <SocialMediaButton name="twitter" socialLogoStyle={socialLogoStyle} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit}/>
      <SocialMediaButton name="linkedin" socialLogoStyle={socialLogoStyle} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit}/>
    </View>
  }
}
