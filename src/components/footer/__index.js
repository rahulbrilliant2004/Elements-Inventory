import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Badge, Footer, FooterTab, Text } from 'native-base';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import styles from "./footerComponentStyle";

export default class FooterClass extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchIcon: 0,
    }
  }

  render() {
    return (
      <Footer>
        <FooterTab style={styles.footerTabContainer}>
          <Button 
            vertical
            active={this.state.settingIcon === 1 ? true : false}
            onPress={() => this.setState({ 
              settingIcon: 1,
              contactIcon: 0,
              searchIcon: 0, 
              specialIcon: 0,
              aFrameIcon: 0,
            })}
          >
            <IconIon name="md-settings" />
            <Text style={styles.textColor}>Setting</Text>
          </Button>
          <Button 
            vertical
            active={this.state.contactIcon === 1 ? true : false}
            onPress={() => this.setState({ 
              settingIcon: 0,
              contactIcon: 1,
              searchIcon: 0, 
              specialIcon: 0,
              aFrameIcon: 0,
            })}
          >
            <Icon name="location-on"/>
            <Text style={styles.textColor}>Contact</Text>
          </Button>

          <Button 
            vertical
            active={this.state.searchIcon === 1 ? true : false}
            onPress={() => this.setState({ 
              settingIcon: 0,
              contactIcon: 0,
              searchIcon: 1, 
              specialIcon: 0,
              aFrameIcon: 0,
            })}
            >
            <IconFont name="search" />
            <Text style={styles.textColor}>Search</Text>
          </Button>

          <Button 
            vertical
            active={this.state.specialIcon === 1 ? true : false}
            onPress={() => this.setState({ 
              settingIcon: 0,
              contactIcon: 0,
              searchIcon: 0, 
              specialIcon: 1,
              aFrameIcon: 0,
            })}
          >
            <IconFont name="tag" />
            <Text style={styles.textColor}>Special</Text>
          </Button>
          
          <Button 
            badge 
            vertical
            active={this.state.aFrameIcon === 1 ? true : false}
            onPress={() => this.setState({ 
              settingIcon: 0,
              contactIcon: 0,
              searchIcon: 0, 
              specialIcon: 0,
              aFrameIcon: 1,
            })}
          >
            <Icon name="favorite" />
            <Badge style={styles.badgeTextStyle} ><Text>51</Text></Badge>
            <Text style={styles.textColor}>A-Frame</Text>
          </Button>

        </FooterTab>
      </Footer>
    );
  }
}