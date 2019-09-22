import React, {Component} from 'react';
import Router from './src/config/Router';
import firebase from 'firebase';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';

console.disableYellowBox = true;

class App extends Component {

  componentWillMount(){

  const config = {
    apiKey: "AIzaSyB7iCwg2UcTOMvvVTHVHuv4RKEBeSpty-4",
    authDomain: "phomo-e593f.firebaseapp.com",
    databaseURL: "https://phomo-e593f.firebaseio.com",
    projectId: "phomo-e593f",
    storageBucket: "phomo-e593f.appspot.com",
    messagingSenderId: "315834102418",
    appId: "1:315834102418:web:b32debad2885a59b312c4b"
  };
  firebase.initializeApp(config)
}

  render() {
    return <Router />
  }


}
 

export default App;
