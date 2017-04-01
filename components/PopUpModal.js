import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  VrButton,
} from 'react-vr';


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
    window.location.assign("https://google.com");
  }

  render() {
    return (
      <Animated.View style={{
          backgroundColor: "#fff",
          height: "auto",
          opacity: 1,
          transform: [{translate: [-1, .6, -4]}],
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
      </Animated.View>
    );
  }
};
