import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Footer from "./src/components/footer/index";
import AFrame from './src/screens/aFrame/index';
import CollectionProducts from './src/screens/collectionProducts/index';
import ContactUs from './src/screens/contactUs/index';
import EnlargeImage from './src/screens/enlargeImage/index';
import HomeScreen from './src/screens/home/index';
import LogIn from './src/screens/logIn/index';
import RefinedSearch from './src/screens/refinedSearch/index';
import RefinedSearchResult from './src/screens/refinedSearchResult/index';
import SearchSimple from './src/screens/search/index';
import Settings from './src/screens/settings/index';
import SingleProductList from './src/screens/singleProductList/index';
import SingleProductSlider from './src/screens/singleProductSlider/index';
import SpecialInfo from './src/screens/special/index';
import SettingFeedbackSupport from './src/screens/feedback/index';
import WhatDoINeedToSignIn from './src/screens/needtosignin/index';
import RequestAccess from './src/screens/requestaccess/index';
import UserAccountDetails from './src/screens/userAccountDetails/index';
import SettingsDefaultAvailability from './src/screens/settingsDefalutAvailability/index';
import SettingsDefaultWarehouse from './src/screens/setingDefaultWareHouse/index';
import SettingsDefaultView from './src/screens/settingsDefaultView/index';



var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

var headerHeight = (window.width >= 375 ? 55 : 48 );

let navigationOptionsHeaderBlank = ({ navigation }) => {
  return {
      header : null,
    } 
}

let navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: '#323232',
      borderBottomColor: '#323232',
      borderBottomWidth: 0,
      paddingTop: 2,
      paddingBottom: 2,
      height: headerHeight,
      justifyContent: 'center',
      width: window.width,
    },
    headerTintColor: '#fff',
  }
}


let navigationOptionsHeaderBackNull = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: '#323232',
      borderBottomColor: '#323232',
      borderBottomWidth: 0,
      paddingTop: 2,
      paddingBottom: 2,
      height: headerHeight,
      justifyContent: 'center',
      width: window.width,
    },
    headerTintColor: '#fff',
    headerLeft: null
  }
}

export default class App extends React.Component {

  render() {
    return (
      <View style ={styles.container}>
        <SimpleApp />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({

  HomeScreen: { 
    screen : HomeScreen,
    navigationOptions: navigationOptionsHeaderBlank,
  },
  AFrame: { 
    screen : AFrame,
    navigationOptions: navigationOptions,
  },
  LogIn: { 
    screen : LogIn,
    navigationOptions: navigationOptions,
  },
  CollectionProducts: { 
    screen : CollectionProducts,
    navigationOptions: navigationOptions,
  },
  ContactUs: { 
    screen : ContactUs,
    navigationOptions: navigationOptions,
  },
  EnlargeImage: {
    screen: EnlargeImage,
    navigationOptions: navigationOptionsHeaderBlank,
  },
  SettingFeedbackSupport: {
    screen: SettingFeedbackSupport,
    navigationOptions: navigationOptions,
  },
  RefinedSearch: { 
    screen : RefinedSearch,
    navigationOptions: navigationOptions,
  },
  RefinedSearchResult:{
    screen : RefinedSearchResult,
    navigationOptions: navigationOptions,
  },
  RequestAccess:{
    screen : RequestAccess,
    navigationOptions: navigationOptions,
  },
  SearchSimple: { 
    screen : SearchSimple,
    navigationOptions: navigationOptions,
  },
  Settings: { 
    screen : Settings,
    navigationOptions: navigationOptions,
  },
  SingleProductList: { 
    screen : SingleProductList,
    navigationOptions: navigationOptions,
  },
  SingleProductSlider: { 
    screen : SingleProductSlider,
    navigationOptions: navigationOptions,
  },
  SpecialInfo: { 
    screen : SpecialInfo,
    navigationOptions: navigationOptions,
  },
  UserAccountDetails:{
    screen : UserAccountDetails,
    navigationOptions: navigationOptions,
  },
  WhatDoINeedToSignIn: {
    screen : WhatDoINeedToSignIn,
    navigationOptions: navigationOptions,
  },
  SettingsDefaultAvailability:{
    screen : SettingsDefaultAvailability,
    navigationOptions: navigationOptionsHeaderBackNull,
  },
  SettingsDefaultWarehouse:{
    screen : SettingsDefaultWarehouse,
    navigationOptions: navigationOptionsHeaderBackNull,
  },
  SettingsDefaultView:{
    screen : SettingsDefaultView,
    navigationOptions: navigationOptionsHeaderBackNull,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
