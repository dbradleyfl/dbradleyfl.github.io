import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  VrButton,
} from 'react-vr';
import { Linking } from 'react-native';

import RiseHover from './RiseHover';

export default class PopUpModal extends React.Component {
  constructor (props) {
    super();
    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  componentDidMount () {
    Animated.timing(
      this.state.opacity
    ,{
        duration: 800,
        toValue: 1,
    }).start();
  }

  resetModal () {
    this.props.setModal(null);
  }

  goToLink (address) {
    Linking.openURL(this.props.modal.linkAddress).catch(()=>{
      this.props.setModal({
        title: "Failed to Open Link",
        body: "Sorry about that. I couldn't open that link for you. You are probably using a VR browser of some kind right now, and link traversal is currently an issue in WebVR."
      })
    });
    this.resetModal();
  }

  render() {
    return (
      <Animated.View style={{
          backgroundColor: "#fff",
          height: "auto",
          opacity: 1,
          transform: [{translate: [-1.1, .6, -4]}],
          width: 2,
          padding: 0.1,
          paddingTop: 0.05,
          paddingBottom: 0.15,
          position: "absolute",
          borderWidth: .02,
          borderColor: "black",
          opacity: this.state.opacity
        }}>
        <VrButton style={{alignSelf: "flex-end", height: 0.25, width: 0.25, alignItems: "center", justifyContent: "center"}} onClick={this.resetModal.bind(this)}>
          <Text style={{fontSize: 0.15, color: "black", padding: 0, margin: 0}}>X</Text>
        </VrButton>
        <Text style={{fontSize: 0.15, color: "black", textDecorationLine: "underline", textDecorationStyle: "solid", textDecorationColor: "black"}}>{this.props.modal.title}</Text>
        <Text style={{fontSize: 0.12, color: "black"}}>{this.props.modal.body}</Text>
        { this.props.modal.linkAddress &&
          <RiseHover>
            <VrButton style={{alignSelf: "center", backgroundColor: "black", marginTop: 0.1, height: 0.25, width: 0.5, alignItems: "center", transform: [{translateZ: .01}]}} onClick={this.goToLink.bind(this)}>
              <Text style={{fontSize: 0.15, color: "white", padding: 0, margin: 0}}>Go</Text>
            </VrButton>
          </RiseHover>
        }
      </Animated.View>
    );
  }
};
