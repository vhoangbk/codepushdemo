/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';
import codePush from "react-native-code-push";


class App extends Component{
  
  state={
    version: '',
    label: '',
    description: ''
  }

  componentWillUnmount(){
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  componentDidMount(){
    codePush.getUpdateMetadata().then((metadata) =>{
      this.setState({label: metadata.label, version: metadata.appVersion, description: metadata.description});
    });
}

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>HELLO</Text>
        <Text>{this.state.version}.{this.state.label}</Text>
        <Text>{this.state.description}</Text>
      </View>
    )
  }
};

export default codePush(App);
