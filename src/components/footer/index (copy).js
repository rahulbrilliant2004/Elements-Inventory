import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button, Footer, FooterTab, Badge } from 'native-base';
import styles from "./footerComponentStyle";


export default class FooterClass extends Component {

  

  constructor(props){
    super(props);
    this.state = {
      settingIcon:  0,
      contactIcon:  0,
      searchIcon:   0, 
      specialIcon:  0,
      aFrameIcon:   0,
    }
  }

  setCurrentTab = (tabTitle) => {

    this.setState({ 
      settingIcon:  0,
      contactIcon:  0,
      searchIcon:   0, 
      specialIcon:  0,
      aFrameIcon:   0,
    })

    switch (tabTitle) {
      case 'settingIcon':
        this.setState({ settingIcon: 1 })
        break;
      case 'contactIcon':
        this.setState({ contactIcon: 1 })
        break;
      case 'searchIcon':
        this.setState({ searchIcon: 1 })
        break;
      case 'specialIcon':
        this.setState({ specialIcon: 1 })
        break;
      case 'aFrameIcon':
        this.setState({ aFrameIcon: 1 })
        break;
      default:
        this.setState({ searchIcon: 1 })
    }

    //tabTitle == "aFrameIcon" ? this.state.navigate('AFrame',{footer: "footer"}) : null;

  }

  onPress = (tab, index) => {
    props.navigation.navigate(tab.scene)
  }

  render() {
    // const { ...props } = this.props;
    const { navigation, routes } = this.props
    // const route = "CollectionProducts"

    const tabs = [{
         name: 'Home',
         icon: 'ios-home',
         scene: 'LogIn',
       }, {
         name: 'Maps',
         icon: 'ios-map',
         scene: 'LogIn',
       }];

    return (
      <Footer style={styles.footerContainer}>
        <FooterTab style={styles.footerTabContainer}>

        {tabs.map((tab, index) => (
                 <Button key={tab.name} transparent onPress={() =>  navigation.navigate("LogIn", {id: "123456"})}>
                   <Text>{tab.name}</Text>
                 </Button>
               ))}
        </FooterTab>
      </Footer>
    );
  }
}