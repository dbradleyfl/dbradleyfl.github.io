import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

import RiseHover from './RiseHover';

export default class SocialMediaButton extends React.Component {
  handleClick (title, body, linkAddress) {
      this.props.setModal({title, body, linkAddress});
  }

  render() {
    let buttonStyle = {
      ...this.props.socialLogoStyle
    };

    return <RiseHover handleEnter={this.props.handleEnter} handleExit={this.props.handleExit}>
      <VrButton style={buttonStyle} onClick={() => {this.handleClick(this.props.title, this.props.body, this.props.linkAddress)}}>
        <Image source={asset(this.props.name +'.png')} style={buttonStyle} />
      </VrButton>
    </RiseHover>
  }
}
