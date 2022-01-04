import React from "react";
import {createAppContainer} from "react-navigation";
import {View} from "react-native";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import NotificationScreen from "../NotificationScreen/NotificationScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import ForumScreen from "../ForumScreen/ForumScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import QuestionScreen from "../QuestionScreen/QuestionScreen";
import AnswerScreen from "../AnswerScreen/AnswerScreen";
import ChatScreen from "../ChatScreen/ChatScreen";
import Addroom from "../Addroom/Addroom";
import Icon from "react-native-vector-icons/Ionicons";
import {COLOR_PRIMARY} from "../../config/styles";
import {createStackNavigator} from "react-navigation-stack";

const navOptionHandler = navigation => ({
  headerShown: false,
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navOptionHandler,
  },
  Question: {
    screen: QuestionScreen,
    navigationOptions: navOptionHandler,
  },
  Answer: {
    screen: AnswerScreen,
    navigationOptions: navOptionHandler,
  },
});

const ChatStack = createStackNavigator({
  Forum: {
    screen: ForumScreen,
    navigationOptions: navOptionHandler,
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: navOptionHandler,
  },
  AddChat: {
    screen: Addroom,
    navigationOptions: navOptionHandler,
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={"ios-home"} />
          </View>
        ),
      }),
    },

    Forum: {
      screen: ChatStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={"chatbox"} />
          </View>
        ),
      }),
    },

    Notification: {
      screen: NotificationScreen,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={[{color: tintColor}]}
              size={25}
              name={"notifications"}
            />
          </View>
        ),
      }),
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={"ios-person"} />
          </View>
        ),
      }),
    },
  },

  {
    initialRouteName: "Home",
    activeColor: "#ffffff",
    inactiveColor: "#8cc971",
    barStyle: {backgroundColor: COLOR_PRIMARY},
  },
);

ChatStack.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Chat" || "Addroom") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible,
  };
};

export default createAppContainer(TabNavigator);
