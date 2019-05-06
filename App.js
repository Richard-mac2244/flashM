import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import Icon from 'react-native-ionicons';
import {createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';

import CustomIcon from './Icons/CustomIcon.js'
import FeedScreen from './Screens/FeedScreen';
import SettingScreen from './Screens/SettingScreen';
import FavoriteScreen from './Screens/FavoriteScreen';
import WelcomeScreen from './Authentication/WelcomeScreen';
import CreateAccountScreen from './Authentication/CreateAccountScreen';
import AccountDetailScreen from './Authentication/AccountDetailScreen';
import AuthLoadingScreen from './Authentication/AuthLoadingScreen';
import SignInScreen from './Authentication/SignInScreen';

const FeedAppStackNavigator = createStackNavigator({
  Feed: {
      screen: FeedScreen,
    },

})
const FavoriteAppStackNavigator = createStackNavigator({
  Favorite: {
    screen: FavoriteScreen,
  }
})

const SettingAppStackNavigator = createStackNavigator({
  Setting: {
      screen: SettingScreen,
    }
})


const AppTabNavigator = createBottomTabNavigator({
  Feed: FeedAppStackNavigator,
  Favorite: FavoriteAppStackNavigator,
  Setting: SettingAppStackNavigator,
},

{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if(routeName === 'Feed') {
          iconName ='ios-grid';
        }
        else if (routeName === 'Setting') {
          iconName = `ios-settings`;
        }

        else if (routeName === 'Favorite') {
          iconName = `ios-heart${focused ? '' : '-empty'}`;
        }
        return <IconComponent name={iconName} size={24} color={tintColor} focused={focused}/>;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'lightsalmon',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width:5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  });

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  CreateAccount: CreateAccountScreen,
  CreateAccountDetails: AccountDetailScreen,
})

const WelcomeAppNavigator = createSwitchNavigator(
  {
  AuthLoading: AuthLoadingScreen,
  App: AppTabNavigator,
  Auth: AuthStackNavigator,
  }
)

export default createAppContainer(WelcomeAppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
