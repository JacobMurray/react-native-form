import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./components/Login";
import Map from "./components/Map";
// import ForgetPassword from "./app/components/ForgetPassword";
import Register from "./components/Register";

import { createStackNavigator } from "react-navigation";

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "gold",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  // ForgetPassword: {
  //   screen: ForgetPassword,
  //   navigationOptions: {
  //     title: "ForgetPassword"
  //   }
  // },
  Map: {
    screen: Map,
    navigationOptions: {
      title: "Map"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});