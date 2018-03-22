import React, { Component } from 'react';
import { Icon, Picker, Item as FormItem } from 'native-base';
import {
    Text,
    TextInput,
    Button,
    View,
    Alert,
    StyleSheet,
    Image,
    Share,
    AsyncStorage,
    BackHandler,
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import Footer from "../../components/footer/index";
import styles from './style';
import { connect } from 'react-redux';
import { settingIcon, contactIcon, searchIcon, specialIcon, aFrameIcon } from "../../actions/index";

import { StackNavigator } from 'react-navigation';
const Item = Picker.Item;

var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
class Settings extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon
            name='arrow-back'
            onPress={() => {
                const { params } = navigation.state;
                const footerSettingIcon = params ? params.footer : null;
                footerSettingIcon.settingIcon(0)
                navigation.goBack()
            }}
            style={{ color: '#fff', marginLeft: 10 }}
        />,
    });
    constructor(props) {
        super(props);
        this.state = {
            settingHistorySortBy: 'Scan Date / Time',
            settingVibrate: false,
            settingBeep: false,
            navigate: this.props.navigation,
            navigateParams: this.props.navigation.state.params,
            ElementInventoryloginDetailSettings: '0',
            ElementInventoryloginDetailNameSettings: '0',
            DefaultWarehouse: '',
            DefalutAvailability: '',
            SettingsDefaultWarehouseAsFun: '0',
            AvailableInventoryAs: '0',
            ViewInventoryAs: '0',
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('SettingsDefaultWarehouse').then((value) => {
            if (value == 'All') {
                this.setState({ SettingsDefaultWarehouseAsFun: 'All Location' })
            } else if (value == 'Fabstone Dallas') {
                this.setState({ SettingsDefaultWarehouseAsFun: 'FabStone (McKinney)' })
            } else {
                this.setState({ SettingsDefaultWarehouseAsFun: 'Elements (Dallas)' })
            }

        }).done();

        AsyncStorage.getItem('AvailableInventoryAsSetting').then((value) => {
            if (value == 'onHand') {
                this.setState({ AvailableInventoryAs: 'onHand' })
            } else {
                this.setState({ AvailableInventoryAs: 'Available' })
            }
        }).done();

        AsyncStorage.getItem('ViewInventoryAsSetting').then((value) => {
            if (value == 'photoView') {
                this.setState({ ViewInventoryAs: 'Photo View' })
            } else {
                this.setState({ ViewInventoryAs: 'List View' })
            }
        }).done();

        AsyncStorage.getItem("ElementInventorylogin").then((value) => {
            value !== null ?
                this.setState({ "ElementInventoryloginDetailSettings": value })
                : this.setState({ "ElementInventoryloginDetailSettings": '0' })

        }).done();
        AsyncStorage.getItem("ElementInventoryloginName").then((value) => {
            value !== null ?
                this.setState({ "ElementInventoryloginDetailNameSettings": value })
                : this.setState({ "ElementInventoryloginDetailNameSettings": '0' })

        }).done();
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

    _onDefaulsWarehousePress() {
        // alert('defalut warehouse')
        const { params } = this.props.navigation.state;
        const footerSettingIcon = params ? params.footer : null;
        this.props.navigation.goBack()
        this.state.navigate.navigate('SettingsDefaultWarehouse', { footer: footerSettingIcon })
    }
    _onDefaultAvailabilityPress() {
        const { params } = this.props.navigation.state;
        const footerSettingIcon = params ? params.footer : null;
        this.props.navigation.goBack()
        // alert('defalut Availability')
        this.state.navigate.navigate('SettingsDefaultAvailability', { footer: footerSettingIcon })
    }
    _onDefaultViewPress() {
        const { params } = this.props.navigation.state;
        const footerSettingIcon = params ? params.footer : null;
        this.props.navigation.goBack()
        this.state.navigate.navigate('SettingsDefaultView', { footer: footerSettingIcon })
    }
    userAccountInfo = () => {
        const { params } = this.props.navigation.state;
        const footerSettingIcon = params ? params.footer : null;
        this.props.navigation.goBack()
        this.state.navigate.navigate('UserAccountDetails', { userAccount: footerSettingIcon });
    }
    _onLoginPress = () => {
        const { params } = this.props.navigation.state;
        const footerSettingIcon = params ? params.footer : null;
        footerSettingIcon.settingIcon(0)
        this.props.navigation.goBack()
        this.state.navigate.navigate('LogIn')
    }


    _onTellFriend() {
        Share.share({
            title: 'Verona Marble - Slab Scan app',
            subject: 'Verona Marble - Slab Scan app',
            message: 'Hey,\n\nWe are a premier stone supplier that provides a unique collection of high-quality natural stones in a wide variety of standard and exotic finishes as well a large selection of designer tiles and modern kitchen and bath plumbing fixtures.\nFor More Info Visit at https://elements.design/'
        })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <SettingsList borderColor='#DCDCDC'>

                    {this.state.ElementInventoryloginDetailSettings !== '0' ?
                        (<SettingsList.Item
                            titleStyle={styles.titleStyle}
                            title='Account'
                            titleInfoStyle={styles.titleInfoStyle}
                            onPress={this.userAccountInfo} />)
                        :
                        (<SettingsList.Item
                            titleStyle={styles.titleStyle}
                            title='Login'
                            titleInfoStyle={styles.titleInfoStyle}
                            onPress={this._onLoginPress} />)
                    }

                    <SettingsList.Item
                        titleStyle={styles.titleStyle}
                        title='Default Warehouse'
                        titleInfo={this.state.SettingsDefaultWarehouseAsFun}
                        titleInfoStyle={styles.titleInfoStyle}
                        onPress={() => this._onDefaulsWarehousePress()} />

                    <SettingsList.Item
                        titleStyle={styles.titleStyle}
                        title='Default Availability'
                        titleInfo={this.state.AvailableInventoryAs}
                        titleInfoStyle={styles.titleInfoStyle}
                        onPress={() => this._onDefaultAvailabilityPress()} />

                    <SettingsList.Item
                        titleStyle={styles.titleStyle}
                        title='Default View'
                        titleInfo={this.state.ViewInventoryAs}
                        titleInfoStyle={styles.titleInfoStyle}
                        onPress={() => this._onDefaultViewPress()} />

                    <SettingsList.Item
                        titleStyle={styles.titleStyle}
                        title='Tell a Friend'
                        titleInfoStyle={styles.titleInfoStyle}
                        onPress={this._onTellFriend} />


                    <SettingsList.Header headerStyle={{ marginTop: 30 }} />

                    <SettingsList.Item
                        titleStyle={styles.titleStyle}
                        title='App Version'
                        titleInfo='1.0'
                        titleInfoStyle={styles.titleInfoStyle}
                        hasNavArrow={false} />
                </SettingsList>

                <View style={styles.footer}>
                    {/* <Footer navigate={this.state.navigateParams.navigate} activeScreen={'Settings'} /> */}
                    <Footer navigation={this.props.navigation} />
                </View>
            </View>
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
)(Settings)