import React, { Component } from 'react';
import { Image, Text, AsyncStorage , Linking} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button, Footer, FooterTab, Badge, Icon } from 'native-base';
import styles from "./footerComponentStyle";
import { connect } from 'react-redux';
import { settingIcon, contactIcon, searchIcon, specialIcon, aFrameIcon } from "../../actions/index";


class FooterClass extends Component {

	setCurrentTab = (tabTitle) => {

		this.setState({
			settingIcon: 0,
			contactIcon: 0,
			searchIcon: 0,
			specialIcon: 0,
			aFrameIcon: 0,
		})

		this.props.settingIcon(0)
		this.props.contactIcon(0)
		this.props.searchIcon(0)
		this.props.specialIcon(0)
		this.props.aFrameIcon(0)

		switch (tabTitle) {
			case 'settingIcon':
				this.setState({ settingIcon: 1 })
				this.props.settingIcon(1)
				this.props.navigation.goBack()
				this.state.navigate('Settings', { footer: this.props})
				break;
			case 'contactIcon':
				// this.setState({ contactIcon: 1 })
				// this.props.contactIcon(1)
				// this.props.navigation.goBack()
				// this.state.navigate('contactIcon', { footer: "footer" })
				Linking.openURL('https://elements.design/contact/') 
				// this.props.navigation.goBack()
				break;
			case 'searchIcon':
				this.setState({ searchIcon: 1 })
				this.props.navigation.goBack()
				this.state.navigate('RefinedSearch', { RefinedSearch:  this.props })
				this.props.searchIcon(1)
				break;
			case 'specialIcon':
				this.setState({ specialIcon: 1 })
				this.props.specialIcon(1)
				this.props.navigation.goBack()
				this.state.navigate('SpecialInfo', {footerSpecialInfo: this.props, warehouseSetting:this.state.SettingsDefaultWarehouseAsFun, AvailabilitySetting:this.state.AvailableInventoryAs })
				break;
			case 'aFrameIcon':
				this.setState({ aFrameIcon: 1 })
				this.props.aFrameIcon(1)
				this.props.navigation.goBack()
				this.state.navigate('AFrame', { footerAframe:this.props, loginInfo:this.state.ElementInventoryloginDetailAframe})
				break;
			default:
				this.setState({ searchIcon: 1 })
		}

		// tabTitle == "aFrameIcon" ? this.state.navigate('AFrame',{footer: "footer"}) : null;

	}
	componentDidMount() {

		AsyncStorage.getItem('SettingsDefaultWarehouse').then((value) => {
			if (value == 'locationAll') {
				this.setState({ SettingsDefaultWarehouseAsFun: 'All' })
			}
			else if (value == 'fabstoneMckinney') {
				this.setState({ SettingsDefaultWarehouseAsFun: 'Fabstone Dallas' })
			} else {
				this.setState({ SettingsDefaultWarehouseAsFun: 'Austin Stone Works' })
			}
		}).done();

		AsyncStorage.getItem('AvailableInventoryAsSetting').then((value) => {
			if (value == 'onHand') {
				this.setState({ AvailableInventoryAs: 'on-hand' })
			} else {
				this.setState({ AvailableInventoryAs: 'Available' })
			}
		}).done();

		AsyncStorage.getItem("myKey1").then((value) => {
			this.setState({ "inventoryDataXYZ": value });
			// console.log(value);
		}).done();

		AsyncStorage.getItem("forAframeAsyncStorage").then((value) => {
			value !== null ?
			this.setState({ "demoAsyncData": JSON.parse(value) })
			:
			this.setState({ "demoAsyncData": [] })
		}).done();

		AsyncStorage.getItem("ElementInventorylogin").then((value) => {
			// alert(value)
			value !== null ?
				this.setState({ ElementInventoryloginDetailAframe: value })
				: this.setState({ ElementInventoryloginDetailAframe: '0' })
		}).done();

		// AsyncStorage.getItem("ElementInventorylogin").then((value) => {
		// 	value !== null ?
		// 	this.setState({ "ElementInventoryloginDetailFooter": value })
		// 	:this.setState({ "ElementInventoryloginDetailFooter": '0' })
		// 	// console.log("Login " + value);
		// }).done();
		// AsyncStorage.getItem("ElementInventoryloginName").then((value) => {
		// 	value !== null ?
		// 	this.setState({ "ElementInventoryloginDetailNameFooter": value })
		// 	:this.setState({ "ElementInventoryloginDetailNameFooter": '0' })
		// 	// console.log("Logout " + value);
		// }).done();
	}
	constructor(props) {
		super(props);
		this.state = {
			settingIcon: 0,
			contactIcon: 0,
			searchIcon: 0,
			specialIcon: 0,
			aFrameIcon: 0,
			inventoryDataXYZ: [],
			navigate: this.props.navigation.navigate,
			demoAsyncData: [],
			ElementInventoryloginDetailFooter:'0',
			ElementInventoryloginDetailNameFooter:'0',
			SettingsDefaultWarehouseAsFun:null,
			AvailableInventoryAs:null,
			ElementInventoryloginDetailAframe:null,
		}
	}

	render() {
		// console.log( this.state.demoAsyncData)
		let Aframelength = (this.state.demoAsyncData).length >= 0 ? this.state.demoAsyncData.length : 0
		// let Aframelength = 0;
		const { settingIcon, contactIcon, searchIcon, specialIcon, aFrameIcon } = this.props.footerTabChangee;
		// console.log('this.props.footerTabChangee'+JSON.stringify(this.props.footerTabChangee))

		return (
			<Footer style={styles.footerContainer}>
				<FooterTab style={styles.footerTabContainer}>

					{/* <Button
						onPress={HomeScreen === 0 ? () => this.setCurrentTab("HomeScreen") : null}
						vertical
					>
						{HomeScreen === 1 ?
							<Icon transparent name="home" style={{ fontSize: 45, color: "#fff", paddingTop:7, }} />
							:
							<Icon transparent name="home" style={{ fontSize: 45, color: "#858c93", paddingTop:7, }} />
						}
						{HomeScreen === 1 ?
							<Text style={styles.textIconColorWhite}>Home</Text>
							:
							<Text style={styles.textIconColor}>Home</Text>
						}
					</Button> */}

					<Button
						onPress={settingIcon === 0 ? () => this.setCurrentTab("settingIcon") : null}
						vertical
					>
						{settingIcon === 1 ? <Image
							source={require('../../assets/setting-icon-white.png')}
							style={styles.imgIconStyle}
							resizeMode="contain"
						/> : <Image
								source={require('../../assets/setting-icon.png')}
								style={styles.imgIconStyle}
								resizeMode="contain"
							/>}
						{settingIcon === 1 ?
							<Text style={styles.textIconColorWhite}>Settings</Text>
							:
							<Text style={styles.textIconColor}>Settings</Text>
						}
					</Button>

					<Button
            onPress={contactIcon === 0 ? () => this.setCurrentTab("contactIcon") : null}
            vertical
          >
            {contactIcon === 1 ? <Image
              source={require('../../assets/contact-icon-white.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            /> : <Image
                source={require('../../assets/contact-icon.png')}
                style={styles.imgIconStyle}
                resizeMode="contain"
              />}
            {contactIcon === 1 ?
              <Text style={styles.textIconColorWhite}>Contact</Text>
              :
              <Text style={styles.textIconColor}>Contact</Text>
            }
          </Button>

					<Button
						onPress={searchIcon === 0 ? () => this.setCurrentTab("searchIcon") : null}
						vertical
					>
						{searchIcon === 1 ? <Image
							source={require('../../assets/search-icon-white.png')}
							style={styles.imgIconStyle}
							resizeMode="contain"
						/> : <Image
								source={require('../../assets/search-icon.png')}
								style={styles.imgIconStyle}
								resizeMode="contain"
							/>}
						{searchIcon === 1 ?
							<Text style={styles.textIconColorWhite}>Search</Text>
							:
							<Text style={styles.textIconColor}>Search</Text>
						}
					</Button>

					<Button
						onPress={specialIcon === 0 ? () => this.setCurrentTab("specialIcon") : null}
						vertical
					>
						{specialIcon === 1 ? <Image
							source={require('../../assets/specials-white.png')}
							style={styles.imgIconStyle}
							resizeMode="contain"
						/> : <Image
								source={require('../../assets/specials.png')}
								style={styles.imgIconStyle}
								resizeMode="contain"
							/>}
						{specialIcon === 1 ?
							<Text style={styles.textIconColorWhite}>Specials</Text>
							:
							<Text style={styles.textIconColor}>Specials</Text>
						}
					</Button>

					<Button
						badge
						onPress={aFrameIcon === 0 ? () => this.setCurrentTab("aFrameIcon") : null}
						vertical
					>
						{aFrameIcon === 1 ? <Image
							source={require('../../assets/a-frame-icon-white-update.png')}
							style={styles.imgIconStyleAframe}
							resizeMode="contain"
						/> : <Image
								source={require('../../assets/a-frame-icon-update.png')}
								style={styles.imgIconStyleAframe}
								resizeMode="contain"
							/>}

						{aFrameIcon === 1 ?
							<Badge style={styles.badgeAframeStyleWhite} ><Text style={styles.textAframeStyle} >{Aframelength}</Text></Badge>
							:
							<Badge style={styles.badgeAframeStyle} ><Text style={styles.textAframeStyle} >{Aframelength}</Text></Badge>
						}
						{aFrameIcon === 1 ?
							<Text style={styles.textIconColorWhite}>A-Frame</Text>
							:
							<Text style={styles.textIconColor}>A-Frame</Text>
						}
					</Button>

				</FooterTab>
			</Footer>
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
)(FooterClass)