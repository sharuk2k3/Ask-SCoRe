import React, {Component} from "react";
import "react-native-paper";
import OnboardingScreen from "./screens/OnboardingScreen/OnboardingScreen";
import StartScreen from "./screens/StartScreen/StartScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {AsyncStorage} from "react-native";
import {useEffect} from "react";
import config from "./config/config";
import RNBootSplash from "react-native-bootsplash";

const AppStack = createStackNavigator();

class App extends Component {
  state = {isFirstLaunch: null};

  componentDidMount() {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 2000);
    const {isFirstLaunch} = this.state;
    AsyncStorage.getItem(config.ALREADY_LAUNCHED).then(value => {
      if (value == null) {
        AsyncStorage.setItem(config.ALREADY_LAUNCHED, "true");
        this.setState({isFirstLaunch: true});
      } else {
        this.setState({isFirstLaunch: false});
      }
    });
  }

  render() {
    const {isFirstLaunch} = this.state;
    if (isFirstLaunch === null) {
      return null;
    } else if (isFirstLaunch === true) {
      return (
        <NavigationContainer>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
            <AppStack.Screen name="Start" component={StartScreen} />
          </AppStack.Navigator>
        </NavigationContainer>
      );
    } else {
      return <StartScreen />;
    }
  }
}
export default App;
