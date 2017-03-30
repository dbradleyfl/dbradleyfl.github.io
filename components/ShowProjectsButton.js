import React from 'react';
import {
  asset,
  Image,
  Text,
  View,
  VrButton,
} from 'react-vr';

import RiseHover from './RiseHover';

export default class ShowProjectsButton extends React.Component {
  render() {
    let {handleEnter, handleExit} = this.props;
    let showProjectsButtonStyles = {
      backgroundColor: "white",
      padding: 0.01
    };

    return <RiseHover handleEnter={handleEnter} handleExit={handleExit}>
      <VrButton style={showProjectsButtonStyles}>
        <Text style={{
          color: "black",
          fontSize: 0.15,
          paddingTop: 0.025,
          paddingBottom: 0.025,
          paddingLeft: 0.05,
          paddingRight: 0.05,
          textAlign:'center',
          textAlignVertical:'center',
        }}>
          Projects
        </Text>
      </VrButton>
    </RiseHover>
  }
}
