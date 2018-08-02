
import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';



const AppStackNavigator = createStackNavigator({
    Home:{screen:HomeScreen,
            navigationOptions:()=> ({title:'My Github'})}, 
    Profile:ProfileScreen
});

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}
