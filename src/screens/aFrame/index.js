import React, { Component } from 'react';
import { Image, Text, View, AsyncStorage, BackHandler } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { Button, Card, CardItem, H3, Icon, Container, Content, List, ListItem } from 'native-base';
import styles from "./aFrameStyle";
import Footer from "../../components/footer/index";
import { connect } from 'react-redux';
import { settingIcon, contactIcon, searchIcon, specialIcon, aFrameIcon } from "../../actions/index";
// import LoginPage from "../login/index";


const marble = require('../../assets/venetian.png')
const granite = require('../../assets/fantasy.png')
const quartzite = require('../../assets/venetian.png')
const onyx = require('../../assets/fantasy.png')
const other = require('../../assets/venetian.png')
const quartz = require('../../assets/fantasy.png')

var data = [
	{
		name: "marble0",
		image: marble,
	},
	{
		name: "granite0",
		image: granite,
	},
	{
		name: "quartzite0",
		image: quartzite,
	},
	{
		name: "onyx0",
		image: onyx,
	},
	{
		name: "other0",
		image: other,
	},
	{
		name: "quartz0",
		image: quartz,
	},
	{
		name: "marble1",
		image: marble,
	},
	{
		name: "granite1",
		image: granite,
	},
	{
		name: "quartzite1",
		image: quartzite,
	},
	{
		name: "onyx1",
		image: onyx,
	},
	{
		name: "other1",
		image: other,
	},
	{
		name: "quartz1",
		image: quartz,
	},
	{
		name: "marble2",
		image: marble,
	},
	{
		name: "granite2",
		image: granite,
	},
	{
		name: "quartzite2",
		image: quartzite,
	},
	{
		name: "onyx2",
		image: onyx,
	},
	{
		name: "other2",
		image: other,
	},
	{
		name: "quartz2",
		image: quartz,
	},
	{
		name: "marble3",
		image: marble,
	},
	{
		name: "granite3",
		image: granite,
	},
	{
		name: "quartzite3",
		image: quartzite,
	},
	{
		name: "onyx3",
		image: onyx,
	},
	{
		name: "other3",
		image: other,
	},
	{
		name: "quartz3",
		image: quartz,
	}
];
const imgDemo = 'http://elementsdesign.staging.wpengine.com/mobile-app/images/stone-placeholder.jpg';
String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

class CollectionProducts extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: "A-Frame",
		headerLeft: <Icon
			name='arrow-back'
			onPress={() => {
				const { params } = navigation.state;
				const footerAframeA = params ? params.footerAframe : null;
				footerAframeA.aFrameIcon(0)
				navigation.goBack()
			}}
			style={{ color: '#fff', marginLeft: 10 }}
		/>
	});

	singleProductScreen = (data) => {
		// this.state.navigate("SingleProductSlider", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
		this.state.InventoryViewSetting == 'photoView' ?
			this.state.navigate("SingleProductSlider", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
			:
			this.state.navigate("SingleProductList", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
		// console.log(data);
	}
	deleteDataFromAframe = (data, rowId) => {
		/*
		var that = this
		alert('delete'+data)
		let array = this.state.demoAsyncData
		// console.log(array)
		let i = array.indexOf(data);
		// console.log("Size"+i);
		if (i !== -1) {
			array.splice(i, 1);
			// alert(JSON.stringify(array))
			AsyncStorage.setItem('forAframeAsyncStorage', JSON.stringify(array));
			that.setState({ demoAsyncData: array})
			// alert(array)
			
		}
		*/
		var that = this
		let array = this.state.demoAsyncData;
		array.splice(rowId, 1);
		const { params } = this.props.navigation.state;
		const footerAframeA = params ? params.footerAframe : null;
		AsyncStorage.setItem('forAframeAsyncStorage', JSON.stringify(array), () => {
			this.props.navigation.navigate('AFrame', { footerAframe: footerAframeA })
			that.setState({ demoAsyncData: array })
		});

		// this.setState({ 'DeleteButtonRefresh': '1' });
	}

	dataSyncAframe = () => {
		alert('SYNC')
		this.setState({ 'DeleteButtonRefresh': '1' });
	}

	constructor(props) {
		super(props);
		this.state = {
			navigate: this.props.navigation.navigate,
			inventoryDataXYZ: [],
			demoAsyncData: [],
			DeleteButtonRefresh: '',
			ElementInventoryloginDetailAframe: null,
			ElementInventoryloginDetailNameAframe: null,
			InventoryViewSetting: '0',
		}
	}
	componentWillMount() { BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick); }
	componentWillUnmount() { BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick); }

	handleBackButtonClick = () => {
		this.props.settingIcon(0)
		this.props.contactIcon(0)
		this.props.searchIcon(0)
		this.props.specialIcon(0)
		this.props.aFrameIcon(0)
	}

	componentDidMount() {
		AsyncStorage.getItem("ViewInventoryAsSetting").then((value) => {
			this.setState({ "InventoryViewSetting": value })
		}).done();

		AsyncStorage.getItem("myKey1").then((value) => {
			this.setState({ "inventoryDataXYZ": value });
			// console.log(value);
		}).done();

		AsyncStorage.getItem("forAframeAsyncStorage").then((value) => {
			// console.log('First Get @ 1 A-Frame : => '+value)
			value !== null ?
				this.setState({ "demoAsyncData": JSON.parse(value) })
				:
				this.setState({ "demoAsyncData": [] })
			// console.log('this.state.demoAsync @ 1 A-Frame : => '+JSON.stringify(this.state.demoAsyncData))
			// console.log('this.state.demoAsync.length > 0 A-Frame : => '+ this.state.demoAsyncData.length)
		}).done();

		AsyncStorage.getItem("ElementInventorylogin").then((value) => {
			// alert(value)
			value !== null ?
				this.setState({ ElementInventoryloginDetailAframe: value })
				: this.setState({ ElementInventoryloginDetailAframe: '0' })
		}).done();
	}

	render() {
		// alert(this.state.ElementInventoryloginDetailAframe);
		let monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];

		let date = new Date();
		let monthName = monthNames[date.getMonth()];
		let DateVar = date.getDate();
		let FullYearVar = date.getFullYear();
		let AmPmTime = formatAMPM(date);
		// let datavalue = JSON.parse(this.state.inventoryDataXYZ);

		function formatAMPM(date) {
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var ampm = hours >= 12 ? 'pm' : 'am';
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			minutes = minutes < 10 ? '0' + minutes : minutes;
			var strTime = hours + ':' + minutes + ' ' + ampm;
			return strTime;
		} 
		const { state } = this.props.navigation;
		let loginInfo = state.params ? state.params.loginInfo : "<undefined>";
		// alert(loginInfo)
		// const {state} = this.props.navigation;
		// let AframeValue  = state.params ? state.params.datavalue  : "<undefined>";
		// let newJsonParseValue = JSON.parse(AframeValue);
		// // alert(newJsonParseValue)
		// let arr = new Array()
		// let pusharrr = arr.push(newJsonParseValue)
		// console.log(arr)

		var that = this
		return (

			<Container style={styles.container} >
				<Content>
					<List
						dataArray={this.state.demoAsyncData}
						renderRow={(data, secId, rowId) =>
							<ListItem style={styles.list}>
								<Grid>
									<Row>
										<H3 style={styles.listProTitle}>{data.Product}</H3>
									</Row>
									<Row>
										<Col style={styles.listColGridImage}>
											<Image
												style={styles.productsImageList}
												source={{ uri: data.ImagePath !== '' ? data.ImagePath : imgDemo }}
												resizeMode="contain"
											/>
										</Col>
										<Col style={styles.listColGridText}>
											<Row>
												<Text style={styles.highlightedText}>Location: </Text>
												<Text numberOfLines={1} style={styles.listText}>{data.Location}</Text>
											</Row>
											<Row>
												<Text style={styles.highlightedText}>Block: </Text>
												<Text numberOfLines={1} style={styles.listText}>{data.Block}</Text>
											</Row>
											<Row>
												<Text style={styles.highlightedText}>Bundle: </Text>
												<Text numberOfLines={1} style={styles.listText}>{data.Bundle}</Text>
											</Row>
											<Row>
												<Text style={styles.highlightedText}>On-Hand: </Text>
												<Text numberOfLines={1} style={styles.listText}>6</Text>
											</Row>
											<Row>
												<Text style={styles.highlightedText}>Available: </Text>
												<Text numberOfLines={1} style={styles.listText}>{data.Quantity}</Text>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col>
										</Col>
										<Col>
											<Row><Text style={styles.DateTimeText}>As of {monthName} {DateVar},{FullYearVar} at {AmPmTime}</Text></Row>
										</Col>
									</Row>
									<Row>
										<Col>
											<Row>
												<Text style={styles.highlightedText}>Avg. Size	: </Text>
												<Text numberOfLines={1} style={styles.listText}>{data.Dimensions}</Text>
											</Row>
											<Row>
												<Text style={styles.highlightedText}>Price: </Text>
												<Text numberOfLines={1} style={styles.listText}>
													{loginInfo !== '0' ? data['Unit Cost'] : (data['Unit Cost'].replace('$', "")).replace(/[0-9]/g, "$")}
												</Text>
											</Row>
										</Col>
										<Col>
											<Row style={styles.productsIconListRow}>
												<Col>
													<Button transparent block onPress={() => this.dataSyncAframe()}>
														<Image
															style={styles.productsIconList}
															source={require('../../assets/reload-icon.png')}
															resizeMode="contain"
														/>
													</Button>
												</Col>
												<Col>
													<Button transparent block onPress={() => this.singleProductScreen(data)}>
														<Image
															style={styles.productsIconList}
															source={require('../../assets/Clip-Group.png')}
															resizeMode="contain"
														/>
													</Button>
												</Col>
												<Col>
													<Button transparent block onPress={() => this.deleteDataFromAframe(data, rowId)}>
														<Image
															style={styles.productsIconList}
															source={require('../../assets/delete.png')}
															resizeMode="contain"
														/>
													</Button>
												</Col>
											</Row>
										</Col>
									</Row>
								</Grid>
							</ListItem>}
					>
					</List>
				</Content>

				<Footer navigation={this.props.navigation} />
			</Container>
		);
	}

}
function mapStateToProps(state) {
	return {
		footerTabChangee: state.footerTabChange
	}
}
function mapDispatchToProps(dispatch) {
	return {
		settingIcon: (text) => dispatch(settingIcon(text)),
		contactIcon: (text) => dispatch(contactIcon(text)),
		searchIcon: (text) => dispatch(searchIcon(text)),
		specialIcon: (text) => dispatch(specialIcon(text)),
		aFrameIcon: (text) => dispatch(aFrameIcon(text)),
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CollectionProducts)