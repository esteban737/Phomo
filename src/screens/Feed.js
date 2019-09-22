import React, {Component} from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 import { getPics } from '../ducks'

class Feed extends Component{

  componentWillMount(){
    this.props.getPics();
  }

render() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <TouchableOpacity style = {{alignSelf: 'center'}}
              onPress={() => Actions.Camera()}>
                <Ionicons name="md-camera" size={40} color='red'/>
              </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = ({ user }) => {
  const { pics } = user;
  return { pics };
};

const mapDispatchToProps = {
  getPics
 };

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
