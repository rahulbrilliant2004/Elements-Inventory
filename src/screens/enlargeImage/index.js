import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button, Container, Header, Right } from 'native-base';
import styles from './enlargeImageStyle';

export default class EnlargeImage extends Component {
	
  cancleCross = () => {
    this.props.navigation.goBack()
  }

  render(){

		const {state} = this.props.navigation;

		let ProImg  = state.params ? state.params.img  : "<undefined>";
// alert(ProImg)
		return(
      <Container style={styles.container} >
        <Header style={styles.header}>
          <Right>
            <Button block transparent onPress={ () => this.cancleCross() }>
              <Image
                style={styles.imgCancleIconStyle}
                source={require('../../assets/cancle_cross.png')}
                resizeMode="contain"
              />
            </Button>
          </Right>
        </Header>
        <View style={styles.mainView}>
          <Image
            style={styles.imgProIconStyle}
            source={{uri:ProImg}}
            resizeMode="contain"
          />
        </View>
      </Container>
    );
	}
}