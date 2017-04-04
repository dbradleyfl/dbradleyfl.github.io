import React from 'react';
import ReactDOM from 'react-dom';
import {
  asset,
  Animated,
  Easing,
  Image,
  Text,
  View,
  VrButton,
} from 'react-vr';

import Project from './Project';


export default class Projects extends React.Component {
  constructor (props) {
    super();
  }

  render() {
    let projectTitleStyle = {
      textAlign: "center",
      margin: .2,
      marginBottom: .1,
      fontSize: 0.2,
      fontWeight: "bold",
    }

    let projectBodyStyle = {
      textAlign: "center",
      fontWeight: "bold",
      margin: .2,
      marginBottom: .1,
      fontSize: .125,
    }

    return (
      <View style={{position: "absolute", alignItems: "center", justifyContent: "center", transform: [{translate: [-1.1, 1.7, -5.5]}]}}>
        <Project posX={2.5} posZ={1.4} rotY={-35} >
          <Text style={projectTitleStyle}>Mixed Reality JS</Text>
          <Image style={{width: 1.5}} source={asset('mixed-reality-js.png')} />
          <Text style={projectBodyStyle}>Mixed Reality JS is an open source framework for building applications for the Hololens with Javascript. It is based on HoloJS. The source code is available on Github and the framework can be utilited via npm package, "npm install -g mrjs".</Text>
        </Project>
        <Project posX={-2.5} posZ={1.4} rotY={35} delayAnim={1000} >
          <Text style={projectTitleStyle}>Violation Radar</Text>
          <Image style={{width: 1.5}} source={asset('violationradar.png')} />
          <Text style={projectBodyStyle}>Violation Radar is a "Software as a Service" product that tracks government data sources for new building code complaints / violations. When a complaint / violation is detected, the building owner or the management is notified.</Text>
        </Project>
        <Project posX={4.2} posZ={3.6} rotY={-70} delayAnim={2000}>
          <Text style={projectTitleStyle}>Tiller Presentation</Text>
          <Image style={{width: 1.5}} source={asset('tillerpresentation.png')} />
          <Text style={projectBodyStyle}>Tiller Presentation is a virtual reality enabled presentation tool for designers of spaces. It allows a presenter to show a presentation of photosphere syncronized across devices and collaboratively take notes on the designs with other users.</Text>
        </Project>
        <Project posX={-4.2} posZ={3.6} rotY={70} delayAnim={3000}>
          <Text style={projectTitleStyle}>Haybale</Text>
          <Image style={{width: 1.5}} source={asset('haybale.png')} />
          <Text style={projectBodyStyle}>Haybale is an unofficial native application for watching Haystack.tv. It offers features that the web app is missing and manipulates the web application with syncronized state between the native and web applications.</Text>
        </Project>
      </View>
    );
  }
};
