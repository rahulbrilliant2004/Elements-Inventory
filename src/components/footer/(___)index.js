import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button, Footer, FooterTab, Badge } from 'native-base';
import styles from "./footerComponentStyle";
import Home from "../../screens/home/index"
import LogIn from "../../screens/logIn/index"
import CollectionProducts from "../../screens/collectionProducts/index"


export default (FooterClass = TabNavigator(
  {
    CollectionProducts: { screen: CollectionProducts },
    LogIn: { screen: LogIn },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              onPress={() => props.navigation.navigate("LogIn")}
            >
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              onPress={() => props.navigation.navigate("CollectionProducts")}
            >
              <Text>Nine</Text>
            </Button>            
          </FooterTab>
        </Footer>
      );
    }
  }
));