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
  Alert,
  Modal,
  TouchableHighlight,
  FlatList,
  TextInput,
  Dimensions,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { getPics } from '../ducks'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class Initial extends Component {

state = {listVisible: false, codeVisible: false, value: ""}

componentWillMount(){
  this.props.getPics();
}

  testAdd(){
    firebase.database().ref(`/users/`).update({
      firstName: "Steven"
    })
    Actions.Feed();
  }

  renderComponent(item){
      return(
        <View style={styles.itemStyle}> 
          <Text>{item}</Text>
        </View>
      )
  }

  _keyExtractor = (item, index) => index;
  
  renderList(){
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.listVisible}>
           <View style={styles.flatlistStyle}>
            <FlatList
            data={["Miami","Orlando"]}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={({item, index}) => (
                this.renderComponent(item, index)
            )}
            />
          </View>
          <View style = {{padding: 20}}>
          <Button
            title="Create New Feed"
            color="#c8f7c5"
            onPress={() =>{Actions.Feed();
              this.setState({listVisible: false})}}
            />
          </View>
          <View style = {{padding: 20}}>
          <Button
            title="Back"
            color="#d64541"
            onPress={() =>this.setState({listVisible: false})}
            />
          </View>
        </Modal>
      </View>
    );           
  }

  renderCode(){
    return (
      <View>
      <View style={{justifyContent: 'center'}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.codeVisible}>
           <View style={styles.flatlistStyle}>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({value: text})}
            value={this.state.value}
          />
          </View>
          <View style = {{padding: 20}}>
          <Button
            title="Back"
            color="#d64541"
            onPress={() =>this.setState({codeVisible: false})}
            />
          </View>
        </Modal>
      </View>
      </View>
    );           
  }

  render(){
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {this.renderList()}
      {this.renderCode()}
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Button
                title="Start Feed"
                color="#d64541"
                onPress={() =>this.setState({listVisible: true})}
                />
            </View>
            <View style={styles.sectionContainer}>
            <Button
                title="Join Feed"
                color="#d64541"
                onPress={() => this.setState({codeVisible: true})}
                />
            </View>
            <View style={styles.sectionContainer}>
            <Button
                title="Settings"
                color="#d64541"
                onPress={() => this.testAdd()}
                />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
}

const styles = StyleSheet.create({
  flatlistStyle: {
    flex: 1.5
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 70
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  itemStyle: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 3,
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

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
