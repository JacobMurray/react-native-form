import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class Login extends Component {
    state = {

    }

    render() {
        return (
          <View style={styles.container}>
            <View behavior="padding" style={styles.container}>
              <View style={styles.logoContainer}>
                <Text style={styles.subtext}>Capture the Flag</Text>
              </View>
              <KeyboardAvoidingView style={styles.keyboard}>
                <View style={styles.window}>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
                <View style={styles.window}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="go"
                    secureTextEntry
                    ref={input => (this.passwordInput = input)}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                  />
                </View>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  //onPress={this.onLoginPress.bind(this)}
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate("Register")}
                title="Sign up"
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.buttonText}
                // onPress={() => this.props.navigation.navigate("ForgetPassword")}
                title="Forget Password"
              >
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#16a085"
    },
    logoContainer: {
      alignItems: "center",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      width: 200,
      height: 150
    },
    subtext: {
      color: "#ffffff",
      marginTop: 10,
      width: 260,
      textAlign: "center",
      opacity: 0.8,
      fontSize: 40
    },
    keyboard: {
      margin: 20,
      padding: 20,
      alignSelf: "stretch"
    },
    buttonContainer: {
      backgroundColor: "rgba(255,255,255,0.2)",
      paddingVertical: 15
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontWeight: "700"
    },
    button: {
      backgroundColor: "#27ae60",
      paddingVertical: 15
    },
    window: {
      marginBottom: 15
    }
  });


    AppRegistry.registerComponent("Login", () => Login);