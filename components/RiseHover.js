import React from 'react';
import {
  View,
} from 'react-vr';

export default class RiseHover extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      gazeEnabled: false
    }
  }
  render() {
    let viewStyle = this.state.gazeEnabled ? {transform: [{translate : [0, 0, 0.2]}]} : {transform: [{translate : [0, 0, 0]}]};

    return <View onEnter={this.props.handleEnter.bind(this)} onExit={this.props.handleExit.bind(this)}  style={viewStyle}>
      {this.props.children}
    </View>
  }
}
