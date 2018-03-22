import React, { Component } from 'react';
import { Image, View  } from 'react-native';
import { Body, Button, Container, Content, Header, Icon, Input, Item, Left, Right, Segment, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./homeScreenStyle";


export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={styles.container} >        
        <Header style={styles.header} hasSegment >
        	<Item style={styles.imgItem} >
	        	<Image
					style={styles.imgStyle}
					source={require('../../assets/logo.png')}
					resizeMode="contain"
				/>
			</Item>
        </Header>
        <View searchBar style={styles.searchBarView} >
          <Item>
            <Input placeholder="Search by color name"/>
            <Icon name="ios-search" />
          </Item>
        </View>
      </Container>
    );
  }
}