import React, { Component } from 'react';
import { Image } from 'react-native';
import { Header, Item } from 'native-base';
import styles from "./bannerHeaderStyle";

export default class BannerHeader extends Component {

	render() {
		return (
			<Header style={styles.header} androidStatusBarColor="#323232" iosBarStyle={'light-content'}>
				<Item style={styles.imgItem} >
					<Image
						style={styles.imgStyle}
						source={require('../../assets/logo.png')}
						resizeMode="contain"
					/>
				</Item>
			</Header>
		);
	}
}