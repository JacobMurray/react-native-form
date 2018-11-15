import React, { Component } from "react";
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  AsyncStorage 
} from "react-native";

import { createStackNavigator } from "react-navigation";

export default class Map extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "gold",
      elevation: null
    },
    headerLeft: null
  };

  logOutUser = () => {
    AsyncStorage.removeItem("mainUser")
    this.props.navigation.navigate("Home") 
  }


  render() {
    return (
    <View style={{ backgroundColor: "#16a085" }}>
      <Text>MAP GOES ERE'</Text>
      <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={this.logOutUser}
            title="Sign up"
          >
            LogOut
          </Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
});

AppRegistry.registerComponent("Map", () => Map);