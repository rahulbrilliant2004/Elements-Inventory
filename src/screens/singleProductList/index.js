import React, { Component } from 'react';
import { Image, Text, View, Share, AsyncStorage , ActivityIndicator} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Card, CardItem, H3, Icon, Container, Content, List, ListItem } from 'native-base';
import styles from "./singleProductListStyle";
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";
const tempImg = 'http://elementsdesign.staging.wpengine.com/mobile-app/images/stone-placeholder.jpg'
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
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x72'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x68'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x64'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x58'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x54'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x50'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x56'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x52'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
		{
			avgSize: "114'x48'",
			onHand: "6",
			available: "3",
			location: "Warehouse",
			view: require('../../assets/venetian.png'),
		},
	]
}

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

	optionsWithSlider = () => {
		this.setState({ sliderViewOptions: true, })
	}
	showSliderView = () => {
		// const { params } = this.props.navigation.state;
		const { state } = this.props.navigation;
		let ProData = state.params.ProData ? JSON.parse(state.params.ProData) : "<undefined>";
		let proBarcode = state.params.ProDataBarcode ? state.params.ProDataBarcode : "<undefined>";
		let proSKU = state.params.ProDataSKU ? state.params.ProDataSKU : "<undefined>";

		this.state.InventoryViewSetting == 'photoView' ?
		this.props.navigation.goBack()
		:
		this.props.navigation.goBack()
		this.props.navigation.navigate('SingleProductSlider',{ ProData: JSON.stringify(ProData), ProDataBarcode: proBarcode, ProDataSKU: proSKU })
	}

	enlargeImage = (img) => {
		this.state.navigate('EnlargeImage', { img: img })
	}
	shareProductSlide = (data) => {
		Share.share(
			{
				message: "Name:" + data.Product + "\n" + "Type:" + data.Category + "\n" + "Series:" + data.Group + "\n" + "Supplier:" + data.Supplier + "\n" + "Location:" + data.Location + "\n" + "Unit Cost:" + data['Unit Cost'] +"\n"+data.ImagePath
			}).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
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
			navigate: this.props.navigation.navigate,
			sliderViewOptions: false,
			singleProductDataList: [],
			demoAsync: [],
			ElementInventoryloginDetailProductList:'0',
			ElementInventoryloginDetailNameProductList:'0',
			isLoading:true,
			InventoryViewSetting:'0',
			singleProMainImage:null,
		}
	}

	componentDidMount() {
		AsyncStorage.getItem("ViewInventoryAsSetting").then((value) => {
			this.setState({ "InventoryViewSetting": value })
		}).done();

		AsyncStorage.getItem("ElementInventorylogin").then((value) => {
			// console.log("Slider Product Page " + value);
			value !== null ?
				this.setState({ "ElementInventoryloginDetailProductList": value })
				: this.setState({ "ElementInventoryloginDetailProductList": '0' })
		}).done();
		AsyncStorage.getItem("ElementInventoryloginName").then((value) => {
			// console.log("Slider Product Page 22 " + value);
			value !== null ?
				this.setState({ "ElementInventoryloginDetailNameProductList": value })
				: this.setState({ "ElementInventoryloginDetailNameProductList": '0' })
		}).done();



		AsyncStorage.getItem("forAframeAsyncStorage").then((value) => {
			this.setState({ "demoAsync": value });
		}).done();

		var that = this
		const { params } = this.props.navigation.state;
		let proBarcode = params.ProDataBarcode ? params.ProDataBarcode : "<undefined>";
		let proSKU = params.ProDataSKU ? params.ProDataSKU : "<undefined>";
		// alert(proBarcode)
		axios
			.get(`${URL.URL_PRODUCT_SINGLE}${proBarcode}/${proSKU}`)
			.then(function (response) {
				// console.log(response.data.main)
				// console.log("Image List Page - "+response.data.main[0].ImagePath)				
				if (response.data.slabs != undefined) {
					that.setState({ singleProductDataList: response.data.slabs , isLoading:false});
				}else {
					that.setState({ isLoading: false });
				}
				that.setState({ singleProMainImage: response.data.main[0].ImagePath});
				// console.log(JSON.stringify(response.data.slabs));
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		
		const adjustsFontSizeToFit = (window.width >= 375 ? false : true );
		const { state } = this.props.navigation;

		let ProData = state.params.ProData ? JSON.parse(state.params.ProData) : "<undefined>";
		let proBarcode = state.params.ProDataBarcode ? state.params.ProDataBarcode : "<undefined>";
		let proSKU = state.params.ProDataSKU ? state.params.ProDataSKU : "<undefined>";
		// alert(proBarcode +" "+proSKU)
		return (
			<Container style={styles.container} >
				<Grid style={styles.content} >
				{this.state.isLoading ? null :
					<Row style={styles.Row1}><H3 style={styles.singleProTitle} numberOfLines={1} > {ProData.Product.toProperCase()} </H3></Row>
				}
				{this.state.isLoading ? null :
					<Row style={styles.Row2}>
						<Col style={styles.minDetailsProImageCol} size={45}>
							<Row>
								<Image
									style={styles.minDetailsProImage}
									source={{uri: this.state.singleProMainImage !== null ? this.state.singleProMainImage : tempImg}}
									resizeMode="contain"
								/>
							</Row>
						</Col>
						<Col style={styles.colDetail} size={55}>
							<Row>
								<Col size={30}>
									<Text style={styles.detailTitles}  adjustsFontSizeToFit={adjustsFontSizeToFit}>Series </Text>
								</Col>
								<Col size={70}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} adjustsFontSizeToFit={adjustsFontSizeToFit}> : {ProData.Group}</Text>
								</Col>
							</Row>
							<Row>
								<Col size={30}>
									<Text style={styles.detailTitles} adjustsFontSizeToFit={adjustsFontSizeToFit} >Color </Text>
								</Col>
								<Col size={70}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} adjustsFontSizeToFit={adjustsFontSizeToFit}> : NA</Text>
								</Col>
							</Row>
							<Row>
								<Col size={30}>
									<Text style={styles.detailTitles} adjustsFontSizeToFit={adjustsFontSizeToFit} >Type </Text>
								</Col>
								<Col size={70}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} adjustsFontSizeToFit={adjustsFontSizeToFit}> : {ProData.Category}</Text>
								</Col>
							</Row>
							<Row>
								<Col size={30}>
									<Text style={styles.detailTitles} adjustsFontSizeToFit={adjustsFontSizeToFit} >SKU </Text>
								</Col>
								<Col size={70}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} adjustsFontSizeToFit={adjustsFontSizeToFit}> : {ProData.SKU}</Text>
								</Col>
							</Row>
						</Col>
					</Row>
				}
				{this.state.isLoading ? null :
					<Row style={styles.priceRow}>
						<Text style={styles.priceText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Price per SqFt: {this.state.ElementInventoryloginDetailProductList !== '0' ? ProData['Unit Cost'] : (ProData['Unit Cost'].replace('$', "")).replace(/[0-9]/g, "$") }</Text>
					</Row>
				}
					{this.state.singleProductDataList.length > 0 ?
					(<Row style={styles.Row3}>
						<Col style={styles.colHeader} size={20}>
							<Text style={styles.colHeaderText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Avg. Size</Text>
						</Col>
						<Col style={styles.colHeader} size={20}>
							<Text style={styles.colHeaderText} adjustsFontSizeToFit={adjustsFontSizeToFit}>On Hand</Text>
						</Col>
						<Col style={styles.colHeader} size={20}>
							<Text style={styles.colHeaderText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Available</Text>
						</Col>
						<Col style={styles.colHeader} size={25}>
							<Text style={styles.colHeaderText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Location</Text>
						</Col>
						<Col style={styles.colHeader} size={15}>
							<Text style={styles.colHeaderText} adjustsFontSizeToFit={adjustsFontSizeToFit}>View</Text>
						</Col>
					</Row>):null
					}
					<Content>
                    {this.state.isLoading ?
                        (<View style={{ flex: 1, justifyContent: 'center' }}>
                            <ActivityIndicator size="large" color="#323232" />
                        </View>) : (

							this.state.singleProductDataList.length > 0 ? (
								this.state.singleProductDataList.map((data, i) => {

									// dataSingle.variations.map((data, i) => {   
									return (<Row key={i}>
										<Col style={styles.colHeader} size={20}>
											<Text style={styles.colHeaderTextData} adjustsFontSizeToFit={adjustsFontSizeToFit}>{data.Width}" x {data.Length}"</Text>
										</Col>
										<Col style={styles.colHeader} size={20}>
											<Text style={styles.colHeaderTextData} adjustsFontSizeToFit={adjustsFontSizeToFit}>{data.PcOnHand}</Text>
										</Col>
										<Col style={styles.colHeader} size={20}>
											<Text style={styles.colHeaderTextData} adjustsFontSizeToFit={adjustsFontSizeToFit} >{ProData.Quantity}</Text>
										</Col>
										<Col style={styles.colHeader} size={25}>
											<Text style={styles.colHeaderTextData} adjustsFontSizeToFit={adjustsFontSizeToFit}>{ProData.Location}</Text>
										</Col>
										<Col style={styles.colHeader} size={15}>
											<Button block transparent onPress={() => this.enlargeImage(this.state.singleProMainImage !== null ? this.state.singleProMainImage : tempImg)}>
												<Image
													style={styles.listImgIcon}
													source={require('../../assets/view-photos.png')}
													resizeMode="contain"
												/>
											</Button>
										</Col>
									</Row>

									)
								})
							) : null
						)
						}
					</Content>
				</Grid>

				{this.state.sliderViewOptions ? <View style={styles.zViewPopUpMain}>
					<View style={styles.zSubViewPopUp} >
						<Button
							block transparent
							style={styles.zSubViewPopUpButton}
							onPress={() => this.showSliderView()}
						>
							<Image
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/view-photos.png')}
							/>
							<Text style={styles.zSubViewPopUpText} adjustsFontSizeToFit={adjustsFontSizeToFit}>View as a Photos</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUp} >
						<Button block transparent style={styles.zSubViewPopUpButton} onPress={() => this.addToAframe(ProData)}>
							<Image
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/a-icon.png')}
							/>
							<Text style={styles.zSubViewPopUpText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Add to A-Frame</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUp} >
						<Button block transparent style={styles.zSubViewPopUpButton} onPress={() => this.enlargeImage(ProData.ImagePath !== '' ? ProData.ImagePath : tempImg)}>
							<Image
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/viewLarger.png')}
							/>
							<Text style={styles.zSubViewPopUpText} adjustsFontSizeToFit={adjustsFontSizeToFit}>View Larger Photo</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUp} >
						<Button block transparent style={styles.zSubViewPopUpButton} onPress={() => this.shareProductSlide(ProData)}>
							<Image
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/share-bundle.png')}
							/>
							<Text style={styles.zSubViewPopUpText} adjustsFontSizeToFit={adjustsFontSizeToFit}>Share Bundle</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUpCancle} >
						<Button block transparent
							style={styles.zSubViewPopUpButton_1}
							onPress={() => this.setState({ sliderViewOptions: false, })}
						>
							<Text style={styles.zSubViewPopUpTextCancle} adjustsFontSizeToFit={adjustsFontSizeToFit}>Cancle</Text>
						</Button>
					</View>
				</View> : <View style={styles.viewHeight}>
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
										onPress={() => this.optionsWithSlider()}
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
					</View>}



				<Footer navigation={this.props.navigation} />
			</Container>

		);
	}
}	