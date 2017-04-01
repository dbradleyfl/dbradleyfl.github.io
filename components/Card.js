import React from 'react';
import {View} from 'react-vr';

export default class Card extends React.Component {
  render() {
    return (
      <View style={{
          backgroundColor: "#2e2e2e",
          height: 3.4,
          opacity: 0.5,
          width: 2.2,
          position: "absolute",
          transform: [{translate: [-.1, .1, 0]}]
        }} />
    );
  }
};
