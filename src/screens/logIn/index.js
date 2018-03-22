import React, { Component } from 'react';
import { View, Text, AsyncStorage, Linking } from 'react-native';
import { Body, Button, Card, CheckBox, Container, Content, Form, Icon, Input, Item, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import styles from "./logInScreenStyle";
import BannerHeader from "../../components/bannerHeader/index";
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";

export default class LogIn extends Component {

	static navigationOptions = {
		title: "Sign In",
	};

	redirectToHome = () => {
		// this.setState({ error: 0, success: 0, })

		// this.state.email == "mayank.shinkhedkar@techinfini.com" ? this.state.password == "mayank" ? this.setState({ success: 1, }) : this.setState({ error: 1, }) : this.setState({ error: 1, })

		// this.state.success == 1 ? this.state.navigate('Home',{Home: "HomePage"}) : null
		var that = this
		axios
			.post(`${URL.URL_WP}login`, {
				email: this.state.email,
				password: this.state.password
			})
			.then(function (response) {
				console.log(response.data.user_data);
				response.data.error ? alert(response.data.error) :
					AsyncStorage.setItem('ElementInventorylogin', "" + response.data.user_data.user_email);
				AsyncStorage.setItem('ElementInventoryBusinessAddress', response.data.user_data.meta_data.business_address);
				AsyncStorage.setItem('ElementInventoryBusinessType', response.data.user_data.meta_data.business_type);
				AsyncStorage.setItem('ElementInventorycity', response.data.user_data.meta_data.city);
				AsyncStorage.setItem('ElementInventorycompany_name', response.data.user_data.meta_data.company_name);
				AsyncStorage.setItem('ElementInventorycompany_website', response.data.user_data.meta_data.company_website);
				AsyncStorage.setItem('ElementInventoryphone_number', response.data.user_data.meta_data.phone_number);
				AsyncStorage.setItem('ElementInventorystate_name', response.data.user_data.meta_data.state_name);
				that.setState({ success: 1, })
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	componentDidMount() {
		// AsyncStorage.getItem("ElementInventorylogin").then((value) => {
		// 	// this.setState({"ElementInventoryloginDetail": value});
		// 	console.log(value);
		// }).done();
		// AsyncStorage.getItem("ElementInventoryloginName").then((value) => {
		// 	// this.setState({"ElementInventoryloginDetailName": value});
		// 	console.log(value);
		// }).done();
	}

	constructor(props) {
		super(props);
		this.state = {
			email: null,
			error: 0,
			navigate: this.props.navigation.navigate,
			password: null,
			signInBox: 0,
			success: 0,
			ElementInventoryloginDetail: '0',
			ElementInventoryloginDetailName: '0',
		}
	}
	whatDoINeedToSignIn() {
		this.props.navigation.navigate('WhatDoINeedToSignIn');
	}
	forgotPassword() {
		Linking.openURL('https://elements.design/contact/')
	}
	RequestAccess() {
		this.props.navigation.navigate('RequestAccess');
	}
	needHelp() {
		Linking.openURL('https://elements.design/contact/')
	}

	render() {
		this.state.success == 1 ? (this.props.navigation.goBack(), this.state.navigate('HomeScreen', { Home: "HomeScreen" })) : null
		return (
			<Container style={styles.container} >

				<BannerHeader />
				<Content>
					<Form style={styles.formContainer}>
						<Item style={styles.formItem}>
							<Input
								placeholder="Email"
								onChangeText={(email) => { this.setState({ email }); }}
								value={this.state.email}
								style={styles.formInput}
							/>
							{this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
						</Item>
						<Item style={styles.formItem}>
							<Input
								placeholder="Password"
								onChangeText={(password) => { this.setState({ password }); }}
								value={this.state.password}
								style={styles.formInput}
							/>
							{this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
						</Item>

						<Button style={styles.formButtonSub} onPress={() => this.redirectToHome()}>
							<Text style={styles.formButtonSubText}>Sign In</Text>
						</Button>

						<ListItem style={styles.listItemCheckBox}>
							<CheckBox
								checked={this.state.signInBox === 1 ? true : false}
								color="#323232"
								onPress={() => this.state.signInBox === 0 ? this.setState({ signInBox: 1 }) : this.setState({ signInBox: 0 })}
							/>
							<Body>
								<Text style={styles.listItemCheckBoxText}>Keep me signed in</Text>
							</Body>
						</ListItem>

					</Form>
					<Grid>
						<Row size={20}>
							<Col>
								<Button block transparent onPress={() => this.RequestAccess()}>
									<Text style={styles.helpTextLeft}> Request Access </Text>
								</Button>
							</Col>
							<Col>
								<Button block transparent style={styles.helpButtonRight} onPress={() => this.needHelp()}>
									<Text style={styles.helpTextRight}> Need Help? </Text>
								</Button>
							</Col>
						</Row>
						<Row size={20} style={styles.helpRowCenter}>
							<Button block transparent onPress={() => this.whatDoINeedToSignIn()}>
								<Text style={styles.helpTextCenter}> Why do I need to sign in?</Text>
							</Button>
						</Row>
						<Row size={15} style={styles.helpRowCenterForgetPass}>
							<Button block transparent onPress={() => this.forgotPassword()}>
								<Text style={styles.helptextCenterForgetPass}> Forgot Password? </Text>
							</Button>
						</Row>
						{/* <Row size={35} style={styles.helpRowCenter}>
							<Button onPress={() => this.props.navigation.navigate('HomeScreen') } block transparent>
								<Icon transparent name="home" style={{fontSize: 40, color: "#323232"}}/>
							</Button>
						</Row> */}
					</Grid>
				</Content>

				<Footer navigation={this.props.navigation} />
			</Container>
		);
	}
}