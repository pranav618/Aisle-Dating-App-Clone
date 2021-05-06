import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import EnterPhoneNumberContainer from "./components/login/EnterPhoneNumber/EnterPhoneNumberContainer";
import React from "react";
import appRoutes from "./routing/appRoutes";
import VerifyOTPContainer from "./components/login/VerifyOtp/VerifyOTPContainer";
import { Dimensions } from "react-native";
import { styles } from "./commonStyles";
import R from "./res/R";
import Ionicon from "react-native-vector-icons/Ionicons";
import {
  MessagesScreen,
  ProfileScreen,
  HomeScreen,
  MatchesScreen,
} from "./components/home";

const windowWidth = Dimensions.get("window").width;

const LoginNavigator = createStackNavigator({
  EnterPhoneNumberContainer: {
    screen: EnterPhoneNumberContainer,
  },
  [appRoutes.preLogin.verifyOTP]: {
    screen: VerifyOTPContainer,
  },
});
const HomeScreenNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: HomeScreen,
      navigationOptions: {
        animationEnabled: true,
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Ionicon
              style={[styles.iconMenu, { color: iconFocused }]}
              name="home-sharp"
              size={20}
            />
          );
        },
      },
    },
    Notes: {
      screen: MessagesScreen,
      navigationOptions: {
        animationEnabled: true,
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Ionicon
              style={[styles.iconMenu, { color: iconFocused }]}
              name="chatbox-ellipses-sharp"
              size={20}
            />
          );
        },
      },
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {
        animationEnabled: true,
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Ionicon
              style={[styles.iconMenu, { color: iconFocused }]}
              name="chatbubbles-sharp"
              size={20}
            />
          );
        },
      },
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        animationEnabled: true,
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Ionicon
              style={[styles.iconMenu, { color: iconFocused }]}
              name="person-sharp"
              size={20}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#7444C0",
      inactiveTintColor: "#363636",
      labelStyle: {
        fontSize: 14,
        paddingTop: 8,
      },
      style: {
        backgroundColor: "#FFF",
        borderTopWidth: 0.5,
        paddingVertical: 15,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 0, width: 0 },
      },
    },
  }
);

const RootStack = createSwitchNavigator({
  LoginNavigator: {
    screen: LoginNavigator,
  },
  HomeScreenNavigator: {
    screen: HomeScreenNavigator,
  },
});

export default createAppContainer(RootStack);
