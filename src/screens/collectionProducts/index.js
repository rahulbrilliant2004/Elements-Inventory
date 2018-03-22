import React, { Component } from 'react';
import { Image, Text, View, ActivityIndicator, AsyncStorage, Share, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Card, CardItem, H3, Icon, Container, Content, List, ListItem } from 'native-base';
import styles from "./collectionProductsStyle";
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";

const marble = require('../../assets/venetian.png')
const granite = require('../../assets/fantasy.png')
const quartzite = require('../../assets/venetian.png')
const onyx = require('../../assets/fantasy.png')
const other = require('../../assets/venetian.png')
const quartz = require('../../assets/fantasy.png')

const tempImg = 'http://elementsdesign.staging.wpengine.com/mobile-app/images/stone-placeholder.jpg'
String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class CollectionProducts extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: `${navigation.state.params.title}`,
	});

	constructor(props) {
		super(props);
		this.state = {
			navigate: this.props.navigation.navigate,
			categoryProductVar: [],
			isLoading: true,
			inventoryDataXYZ: [],
			demoAsync: [],
			ElementInventoryloginDetailCollectionProduct: '0',
			ElementInventoryloginDetailNameCollectionProduct: '0',
			AvailableInventoryAsSetting: null,
			SettingsDefaultWarehouseAsFun: null,
		}
	}

	componentDidMount() {
		var that = this
		const { params } = this.props.navigation.state;
		let categoryName = params ? params.title : null;
		let warehouse = params ? params.WarehouseSetting : 'All';
		let AvailabilitySettings = params ? params.AvailabilitySettings : 'Available';

		AsyncStorage.getItem('SettingsDefaultWarehouse').then(async (value) => {
			this.setState({ SettingsDefaultWarehouseAsFun: value })
		}).then(res => {

			AsyncStorage.getItem('AvailableInventoryAsSetting').then(async (value) => {
				this.setState({ AvailableInventoryAsSetting: value })
			}).then(res => {

				axios
					.get(`${URL.URL_CATEGORY}${categoryName}?Available=${this.state.AvailableInventoryAsSetting}&&Warehouse=${this.state.SettingsDefaultWarehouseAsFun}`)
					.then(function (response) {
						if (response.data != undefined) {
							that.setState({ isLoading: false, 'categoryProductVar': response.data });
						} else {
							that.setState({ isLoading: false })
						}
					})
					.catch(function (error) {
						console.log(error);
					})
			});
		})

		AsyncStorage.getItem("forAframeAsyncStorage").then((value) => {
			this.setState({ "demoAsync": value });
		}).done();

		AsyncStorage.getItem("ElementInventorylogin").then((value) => {
			value !== null ?
				this.setState({ "ElementInventoryloginDetailCollectionProduct": value })
				: this.setState({ "ElementInventoryloginDetailCollectionProduct": '0' })
		}).done();

		AsyncStorage.getItem("ViewInventoryAsSetting").then((value) => {
			this.setState({ "InventoryViewSetting": value })
		}).done();

	}

	singleProductScreen = (data) => {
		this.state.InventoryViewSetting == 'photoView' ?
			this.state.navigate("SingleProductSlider", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
			:
			this.state.navigate("SingleProductList", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
	}
	shareToSocialSites = (data) => {
		Share.share(
			{
				message: "Name:" + data.Product + "\n" + "Type:" + data.Category + "\n" + "Series:" + data.Group + "\n" + "Supplier:" + data.Supplier + "\n" + "Location:" + data.Location + "\n" + "Unit Cost:" + data['Unit Cost'] + "\n" + data.ImagePath,
				url: data.ImagePath
			}).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
	}

	addToAframe = (data) => {
		if ((this.state.demoAsync !== null) && (this.state.demoAsync !== '') && (JSON.parse(this.state.demoAsync).length > 0)) {
			let arrdemo = new Array()
			let convParse = JSON.parse(this.state.demoAsync)
			convParse.map((asyncData, i) => {
				if (asyncData.BarcodeID !== data.BarcodeID) {
					let pushdemo = arrdemo.push(asyncData)
				}
			})

			let convStr = data
			let pushdemo1 = arrdemo.push(data)

			AsyncStorage.setItem('forAframeAsyncStorage', JSON.stringify(arrdemo), () => {
				alert(data.Product + ' Added to A-Frame')
				this.setState({ demoAsync: JSON.stringify(arrdemo) });
			});

		} else {
			let arrdemo = new Array()
			let convStr = data
			let pushdemo1 = arrdemo.push(data)
			AsyncStorage.setItem('forAframeAsyncStorage', JSON.stringify(arrdemo), () => {
				alert(data.Product + ' Added to A-Frame')
				this.setState({ demoAsync: JSON.stringify(arrdemo) });
			});
		}
	}

	render() {

		const { state } = this.props.navigation;
		let CollId = state.params ? state.params.id : "<undefined>";
		let title = state.params ? state.params.title : "<undefined>";
		let monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];

		let date = new Date();
		let monthName = monthNames[date.getMonth()];
		let DateVar = date.getDate();
		let FullYearVar = date.getFullYear();
		let AmPmTime = formatAMPM(date);


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
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" color="#323232" />
				</View>
			);
		}

		return (
			<Container style={styles.container} >
				<Content>
					{this.state.categoryProductVar.length > 0 ?
						(
							<List
								dataArray={this.state.categoryProductVar}
								renderRow={(data) =>
									<ListItem style={styles.list}>
										<Grid>
											<TouchableOpacity onPress={() => this.singleProductScreen(data)} >
												<Row>
													<H3 style={styles.listProTitle}> {data.Product.capitalize()}</H3>
												</Row>
											</TouchableOpacity>
											<Row>
												<Col style={styles.listColGridImage}>
													{/* <TouchableOpacity  onPress={() => this.singleProductScreen(data) } > */}
													<Image
														style={styles.productsImageList}
														source={{ uri: data.ImagePath !== '' ? data.ImagePath : tempImg }}
														resizeMode="contain"
													/>
													{/* </TouchableOpacity> */}
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
														<Text numberOfLines={1} style={styles.listText}>NA</Text>
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
														<Text numberOfLines={1} style={styles.listText}>{this.state.ElementInventoryloginDetailCollectionProduct !== '0' ? data['Unit Cost'] : (data['Unit Cost'].replace('$', "")).replace(/[0-9]/g, "$")}</Text>
													</Row>
												</Col>
												<Col>
													<Row style={styles.productsIconListRow}>
														<Col style={styles.productsIconListCol} >
															<Button transparent block onPress={() => this.addToAframe(data)}>
																<Image
																	style={styles.productsIconList}
																	source={require('../../assets/a-icon-update.png')}
																	resizeMode="contain"
																/>
															</Button>
														</Col>
														<Col style={styles.productsIconListCol} >
															<Button transparent block onPress={() => this.singleProductScreen(data)} >
																<Image
																	style={styles.productsIconList}
																	source={require('../../assets/Clip-Group.png')}
																	resizeMode="contain"
																/>
															</Button>
														</Col>
														<Col style={styles.productsIconListCol} >
															<Button transparent block onPress={() => this.shareToSocialSites(data)}>
																<Image
																	style={styles.productsIconList}
																	source={require('../../assets/share.png')}
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
						) :
						(<View><Text style={{ fontSize: 20, padding: 20 }}>No Products Available for the category</Text></View>)
					}
				</Content>

				<Footer navigation={this.props.navigation} />
			</Container>
		);
	}

}