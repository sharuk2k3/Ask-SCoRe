import React, {Component} from "react";
import {View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import MediumActivity from "../MediumActivity/MediumActivity";
import GithubActivity from "../GithubActivity/GithubActivity";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

class NotificationScreen extends Component {
  state = {showingup: true};
  renderContent() {
    switch (this.state.showingup) {
      case true:
        return (
          <View style={{flex: 1}}>
            <GithubActivity />
          </View>
        );
      case false:
        return (
          <View>
            <MediumActivity />
          </View>
        );
      default:
        return <Text>Error</Text>;
    }
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.SafeAreaStyle} />
        <View style={styles.ViewStyle}>
          <View style={styles.WholeTabBar}>
            {this.state.showingup ? (
              <TouchableOpacity
                style={styles.SignupTabBar}
                onPress={() => {
                  this.setState({showingup: true});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle1}
                    size={26}
                    name={"logo-github"}
                  />
                  <Text style={styles.TextStyle}>Github</Text>
                </View>
                <View style={styles.DividerView} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.LoginTabBar}
                onPress={() => {
                  this.setState({showingup: true});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle}
                    size={26}
                    name={"logo-github"}
                  />
                  <Text style={styles.TextStyle}>Github</Text>
                </View>
                <View style={styles.DividerView1} />
              </TouchableOpacity>
            )}
            {this.state.showingup === false ? (
              <TouchableOpacity
                style={styles.SignupTabBar}
                onPress={() => {
                  this.setState({showingup: false});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle1}
                    size={26}
                    name={"newspaper-outline"}
                  />
                  <Text style={styles.TextStyle}>Medium</Text>
                </View>
                <View style={styles.DividerView} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.LoginTabBar}
                onPress={() => {
                  this.setState({showingup: false});
                }}>
                <View>
                  <Icon
                    style={styles.IconStyle}
                    size={26}
                    name={"newspaper-outline"}
                  />
                  <Text style={styles.TextStyle}>Medium</Text>
                </View>
                <View style={styles.DividerView1} />
              </TouchableOpacity>
            )}
          </View>
          <View style={{flex: 1}}>{this.renderContent()}</View>
        </View>
      </>
    );
  }
}

export default NotificationScreen;
