import React, { Component } from 'react';
import { Image, Text, View, AsyncStorage, Share, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Body, Card, CardItem, DeckSwiper, H3, Icon, Container, Content, List, ListItem, Left, Right, Thumbnail } from 'native-base';
import styles from "./singleProductSliderStyle";
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";

const imgDemo = 'http://elementsdesign.staging.wpengine.com/mobile-app/images/stone-placeholder.jpg';

var dataSingle = {
	name: "marble0 marble0",
	series: "Basic",
	color: "Gold",
	type: "Granite",
	sku: "123456789",
	pricePerSqFt: "455",
	image: require('../../assets/venetian.png'),
	variations: [
		{
			avgSize: "114'x76'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x72'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x68'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x64'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x60'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x56'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x52'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x48'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x44'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x40'",
			block: "145967",
			bundle: "5",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
	]
}
const deviceWidth = Dimensions.get("window").width;
const B = (props) => <Text style={{ fontWeight: '600' }}>{props.children}</Text>
const adjustsFontSizeToFit = (window.width >= 375 ? false : true);

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toProperCase = function () {
	return this.toLowerCase().replace(/^(.)|\s(.)/g,
		function ($1) { return $1.toUpperCase(); });
}

export default class CollectionProducts extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: "Material Details",
	});

	enlargeImage = (img) => {
		this.state.navigate('EnlargeImage', { img: img })
	}
	shareProductSlide = (data) => {
		Share.share(
			{
				message: "Name:" + data.Product + "\n" + "Type:" + data.Category + "\n" + "Series:" + data.Group + "\n" + "Supplier:" + data.Supplier + "\n" + "Location:" + data.Location + "\n" + "Unit Cost:" + data['Unit Cost'] + "\n" + data.ImagePath
			}).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
	}

	optionsWithList = () => {
		this.setState({ listViewOptions: true, })
	}

	showListView = () => {
		let { state } = this.props.navigation;
		let ProDataList = state.params ? JSON.parse(state.params.ProData) : "<undefined>";
		let ProDatabarcode = state.params ? state.params.ProDataBarcode : "<undefined>";
		let ProDataSKU = state.params ? state.params.ProDataSKU : "<undefined>";

		this.setState({ listViewOptions: false, })
		this.props.navigation.goBack()
		this.state.navigate("SingleProductList", { ProData: JSON.stringify(ProDataList), ProDataBarcode: ProDatabarcode, ProDataSKU: ProDataSKU })
		// console.log(ProDataList);
	}
	componentDidMount() {

		AsyncStorage.getItem("ElementInventorylogin").then((value) => {
			// console.log("Slider Product Page " + value);
			value !== null ?
				this.setState({ "ElementInventoryloginDetailProductSlider": value })
				: this.setState({ "ElementInventoryloginDetailProductSlider": '0' })
		}).done();
		AsyncStorage.getItem("ElementInventoryloginName").then((value) => {
			// console.log("Slider Product Page 22 " + value);
			value !== null ?
				this.setState({ "ElementInventoryloginDetailNameProductSlider": value })
				: this.setState({ "ElementInventoryloginDetailNameProductSlider": '0' })
		}).done();



		AsyncStorage.getItem("forAframeAsyncStorage").then((value) => {
			this.setState({ "demoAsync": value });
		}).done();

		var that = this
		const { params } = this.props.navigation.state;
		let categoryBarcode = params ? params.ProDataBarcode : null;
		let categorySKU = params ? params.ProDataSKU : null;
		axios
			.get(`${URL.URL_PRODUCT_SINGLE}${categoryBarcode}/${categorySKU}`)
			.then(function (response) {
				// console.log(response.data.main)
				// console.log("Image Slide Page - "+response.data.main[0].ImagePath)
				// that.setState({singleProMainData: response.data.main[0].ImagePath });
				if (response.data.slabs != undefined) {
					that.setState({ singleProductData: response.data.slabs, isLoading: false });
					// alert("hi")
				} else {
					that.setState({ isLoading: false });
				}
				// alert(response.data)
				that.setState({ singleProMainImage: response.data.main[0].ImagePath});
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	addToAframe = (data) => {
		if ((this.state.demoAsync !== null) && (this.state.demoAsync !== '') && (JSON.parse(this.state.demoAsync).length > 0)) {
			let arrdemo = new Array()
			let convParse = JSON.parse(this.state.demoAsync)
			convParse.map((asyncData, i) => {
				let pushdemo = arrdemo.push(asyncData)
			})
			let convStr = data
			let pushdemo1 = arrdemo.push(data)
			AsyncStorage.setItem('forAframeAsyncStorage', JSON.stringify(arrdemo));
		} else {
			let arrdemo = new Array()
			let convStr = data
			let pushdemo1 = arrdemo.push(data)
			AsyncStorage.setItem('forAframeAsyncStorage', JSON.stringify(arrdemo));
		}
		alert(data.Product + ' Added to A-Frame')
	}

	constructor(props) {
		super(props);
		this.state = {
			listViewOptions: false,
			navigate: this.props.navigation.navigate,
			demoAsync: [],
			singleProductData: [],
			isLoading: true,
			ElementInventoryloginDetailProductSlider: '0',
			ElementInventoryloginDetailNameProductSlider: '0',
			singleProMainData: [],
			singleProMainImage: null,
		}
	}

	render() {
		// this.state.singleProMainData.length > 0 ? console.log(this.state.singleProMainData[0].Product) : null
		// alert(this.state.singleProMainData)
		const { state } = this.props.navigation;
		let ProData = state.params ? JSON.parse(state.params.ProData) : "<undefined>";
		let dataVariable = this.state.singleProductData;
		return (
			<Container style={styles.container} >
				<View style={{ flex: 1 }}>
					<ScrollView>
						<Grid style={styles.contentGrid} >
							{this.state.isLoading ? null :
								<Row style={styles.Row1}><H3 style={styles.singleProTitle} numberOfLines={1}> {ProData.Product} </H3></Row>
								 }
							{this.state.isLoading ? null :

								<Row style={styles.Row2}>
									<Col style={styles.minDetailsProImageCol} size={45}>
										<Row>
											<Image
												style={styles.minDetailsProImage}
												source={{ uri: this.state.singleProMainImage !== null ? this.state.singleProMainImage : imgDemo }}
												resizeMode="contain"
											/>
										</Row>
									</Col>
									<Col style={styles.colDetail} size={55}>
										<Row>
											<Col size={30}>
												<Text style={styles.detailTitles} adjustsFontSizeToFit={adjustsFontSizeToFit}>Series </Text>
											</Col>
											<Col size={70}>
												<Text numberOfLines={1} style={styles.minDetailsProTextRow} adjustsFontSizeToFit={adjustsFontSizeToFit} > : {ProData.Group}</Text>
											</Col>
										</Row>
										<Row>
											<Col size={30}>
												<Text style={styles.detailTitles}  >Color </Text>
											</Col>
											<Col size={70}>
												<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : Black</Text>
											</Col>
										</Row>
										<Row>
											<Col size={30}>
												<Text style={styles.detailTitles}  >Type </Text>
											</Col>
											<Col size={70}>
												<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {ProData.Category}</Text>
											</Col>
										</Row>
										<Row>
											<Col size={30}>
												<Text style={styles.detailTitles}  >SKU </Text>
											</Col>
											<Col size={70}>
												<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {ProData.SKU}</Text>
											</Col>
										</Row>
									</Col>
								</Row>
								}
							{this.state.isLoading ? null :

								<Row style={styles.priceRow}>
									<Text style={styles.priceText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Price per SqFt: {this.state.ElementInventoryloginDetailProductSlider !== '0' ? ProData['Unit Cost'] : (ProData['Unit Cost'].replace('$', "")).replace(/[0-9]/g, "$")}</Text>
								</Row>
								}
							<Row >
								<View style={styles.view1} >
									{/* <View style={styles.view2}> */}
									{this.state.isLoading ?
										(<View style={{ flex: 1, justifyContent: 'center' }}>
											<ActivityIndicator size="large" color="#323232" />
										</View>) : (

											<ScrollView horizontal={true} >
												<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40 }}>
													{this.state.singleProductData.length > 0 ? (
														this.state.singleProductData.map((data, i) => {
															let imglenght = data.ImagePath.length > 0 ? data.ImagePath : imgDemo;
															return (
																<View key={i} style={{ width: deviceWidth - 10, margin: 4 }}>

																	{/* <Card style={styles.cardDeckSwiper}>
																	<CardItem cardBody>
																		<Image
																			style={styles.cardImage}
																			source={{ uri: imglenght }}
																		/>
																	</CardItem>
																	<CardItem style={styles.cardItemDetails}>
																		<Left style={styles.cardItemDetailsLeft}>
																			<Text numberOfLines={1} style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Block:</B> {ProData.Block}</Text>
																			<Text numberOfLines={1} style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Bundle:</B> {data.Bundle}</Text>
																			<Text numberOfLines={1} style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Location:</B> {ProData.Location}</Text>
																		</Left>
																		<Right style={styles.cardItemDetailsRight}>
																			<Text numberOfLines={1} style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>On-Hand:</B> NA</Text>
																			<Text numberOfLines={1} style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Available:</B> {ProData.Quantity}</Text>
																			<Text numberOfLines={1} style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Avg. Size:</B> {data.Length}"x{data.Width}"</Text>
																		</Right>
																	</CardItem>
																</Card> */}
																	<View style={{ height: '70%', width: deviceWidth - 10 }}>
																		<Image
																			style={styles.cardImage}
																			source={{ uri: imglenght }}
																		/>
																	</View>

																	<View style={{ flexDirection: 'row', height: '30%', width: deviceWidth - 30, paddingLeft: 15, paddingRight: 15, flexWrap: 'wrap' }}>
																		<View style={{ flexDirection: 'column', width: '60%' }}>
																			<Text style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Block:</B> {ProData.Block}</Text>
																			<Text style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Bundle:</B> {data.Bundle}</Text>
																			<Text style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Location:</B> {ProData.Location}</Text>
																		</View>
																		<View style={{ flexDirection: 'column', width: '40%' }}>
																			<Text style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>On-Hand:</B> NA</Text>
																			<Text style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Available:</B> {ProData.Quantity}</Text>
																			<Text style={styles.cardItemDetailsText} adjustsFontSizeToFit={adjustsFontSizeToFit}> <B>Avg. Size:</B> {data.Length}"x{data.Width}"</Text>
																		</View>
																	</View>

																</View>
															)
														})
													) : null
													}
												</View>
											</ScrollView>
										)}

								</View>
								{/* </View> */}
							</Row>
						</Grid>
					</ScrollView>
					<View style={styles.viewHeight}>
						<View style={styles.view3}>
							<View style={styles.view3Inner1}>
								<Button transparent
									onPress={() => this.props.navigation.goBack()}
								>
									<Image
										style={styles.view3InnerImage}
										source={require('../../assets/backArrow.png')}
										resizeMode="contain"
									/>
								</Button>
							</View>
							<View style={styles.view3Inner2}>
								<View>
									<Button transparent
										onPress={() => this.optionsWithList()}
									>
										<Image
											style={styles.view3InnerImage}
											source={require('../../assets/dots.png')}
											resizeMode="contain"
										/>
									</Button>
								</View>
							</View>
						</View>
					</View>

					{this.state.listViewOptions ? <View style={styles.zListViewOptions}>
						<View style={styles.zListViewOptions_1}>
							<Button transparent
								block
								style={styles.zListViewOptions_1_Button}
								onPress={() => this.showListView()}
							>
								<Image
									style={styles.zListViewOptions_1_ImagIcon}
									resizeMode="contain"
									source={require('../../assets/List.png')}
								/>
								<Text style={styles.zListViewOptions_1_Text} adjustsFontSizeToFit={adjustsFontSizeToFit}>View as a List</Text>
							</Button>
						</View>
						<View style={styles.zListViewOptions_1} >
							<Button block style={styles.zListViewOptions_1_Button} transparent onPress={() => this.addToAframe(ProData)}>
								<Image
									style={styles.zListViewOptions_1_ImagIcon}
									resizeMode="contain"
									source={require('../../assets/a-icon.png')}
								/>
								<Text style={styles.zListViewOptions_1_Text} adjustsFontSizeToFit={adjustsFontSizeToFit}>Add to A-Frame</Text>
							</Button>
						</View>

						<View style={styles.zListViewOptions_1} >
							<Button block style={styles.zListViewOptions_1_Button} transparent onPress={() => this.enlargeImage(this.state.singleProMainImage !== null ? this.state.singleProMainImage : tempImg)}>
								<Image
									style={styles.zListViewOptions_1_ImagIcon}
									resizeMode="contain"
									source={require('../../assets/viewLarger.png')}
								/>
								<Text style={styles.zListViewOptions_1_Text} adjustsFontSizeToFit={adjustsFontSizeToFit}>View Larger Photo</Text>
							</Button>
						</View>
						<View style={styles.zListViewOptions_1} >
							<Button block style={styles.zListViewOptions_1_Button} transparent onPress={() => this.shareProductSlide(ProData)}>
								<Image
									style={styles.zListViewOptions_1_ImagIcon}
									resizeMode="contain"
									source={require('../../assets/share-bundle.png')}
								/>
								<Text style={styles.zListViewOptions_1_Text} adjustsFontSizeToFit={adjustsFontSizeToFit}>Share Bundle</Text>
							</Button>
						</View>
						<View style={styles.zListViewOptions_1_cancle} >
							<Button block transparent
								style={styles.zListViewOptions_1_Button_1}
								onPress={() => this.setState({ listViewOptions: false, })}
							>
								<Text style={styles.zListViewOptions_1_Text_1} adjustsFontSizeToFit={adjustsFontSizeToFit}>Cancle</Text>
							</Button>
						</View>
					</View> : null}
				</View>
				<Footer navigation={this.props.navigation} />

			</Container>
		);
	}
}	