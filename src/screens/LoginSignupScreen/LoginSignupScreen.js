import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import styles from "./styles";
import {LOGO} from "../../config/styles.js";

class LoginSignupScreen extends Component {
  state = {showingup: true};
  renderContent() {
    switch (this.state.showingup) {
      case true:
        return (
          <View style={{width: "76%"}}>
            <LoginForm />
          </View>
        );
      case false:
        return (
          <View style={{width: "76%"}}>
            <SignupForm />
          </View>
        );
      default:
        return <Text>Error</Text>;
    }
  }

  render() {
    return (
      <View style={styles.ViewStyle1}>
        <View style={styles.ViewStyle}>
          <View>
            <Image source={LOGO} style={styles.ImageView} />
          </View>
          <View style={styles.WholeTabBar}>
            {this.state.showingup ? (
              <TouchableOpacity
                style={styles.SignupTabBar}
                onPress={() => {
                  this.setState({showingup: true});
                }}>
                <View>
                  <Text style={styles.BarStyle}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.LoginTabBar}
                onPress={() => {
                  this.setState({showingup: true});
                }}>
                <View>
                  <Text style={styles.BarStyle1}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            )}

            {this.state.showingup === false ? (
              <TouchableOpacity
                style={styles.SignupTabBar}
                onPress={() => {
                  this.setState({showingup: false});
                }}>
                <View>
                  <Text style={styles.BarStyle}>SIGNUP</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.LoginTabBar}
                onPress={() => {
                  this.setState({showingup: false});
                }}>
                <View>
                  <Text style={styles.BarStyle1}>SIGNUP</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}
export default LoginSignupScreen;
