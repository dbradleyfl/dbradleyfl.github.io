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

      <SocialMediaButton name="github" title="Github" body="My handle is @dbradleyfl. The Github site doesn't yet support WebVR, but I can try to send you there anyway. Some VR browsers might have problems following this link. Click Go to try and navigate there anyway." linkAddress="https://github.com/dbradleyfl" socialLogoStyle={socialLogoStyle} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit} setModal={this.props.setModal} />

      <SocialMediaButton name="twitter" title="Twitter" body="My handle is @devonsbradley. The Twitter site doesn't yet support WebVR, but I can try to send you there anyway. Some VR browsers might have problems following this link. Click Go to try and navigate there anyway." linkAddress="https://www.twitter.com/devonsbradley" socialLogoStyle={socialLogoStyle} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit} setModal={this.props.setModal}/>

      <SocialMediaButton name="linkedin" title="Linkedin" body="My handle is @devonsbradley. The Linkedin site doesn't yet support WebVR, but I can try to send you there anyway. Some VR browsers might have problems following this link. Click Go to try and navigate there anyway." linkAddress="https://linkedin.com/in/devonsbradley" socialLogoStyle={socialLogoStyle} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit} setModal={this.props.setModal}/>

    </View>
  }
}
