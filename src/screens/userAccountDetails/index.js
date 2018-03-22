import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput, AsyncStorage, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import styles from './style';
import Footer from "../../components/footer/index";

export default class UserAccountDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Account Details",
        headerLeft: <Icon
            name='arrow-back'
            onPress={() => {
                const { params } = navigation.state;
                const userAccountA = params ? params.userAccount : null;
                userAccountA.settingIcon(0)
                navigation.goBack()
            }}
            style={{ color: '#fff', marginLeft: 10 }}
        />,
    });

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation,
            ElementInventoryloginDetailUserAccount: null,
            ElementInventoryloginDetailStateName: null,
            ElementInventoryloginDetailphone_number: null,
            ElementInventoryloginDetailCompanyWebsite: null,
            ElementInventoryloginDetailCompanyName: null,
            ElementInventoryloginDetailcity: null,
            ElementInventoryloginDetailBusinessType: null,
            ElementInventoryloginDetailBusinessAddress: null,
        };
    }
    componentDidMount() {

        var that = this
        AsyncStorage.getItem("ElementInventorylogin").then((value) => {
            // console.log('idddd'+value)
            value !== null ?
            that.setState({ "ElementInventoryloginDetailUserAccount": value })
                : that.setState({ "ElementInventoryloginDetailUserAccount": null })

        }).done();
        AsyncStorage.getItem("ElementInventoryBusinessAddress").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailBusinessAddress": value })
                : that.setState({ "ElementInventoryloginDetailBusinessAddress": null })

        }).done();
        AsyncStorage.getItem("ElementInventoryBusinessType").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailBusinessType": value })
                : that.setState({ "ElementInventoryloginDetailBusinessType": null })

        }).done();

        AsyncStorage.getItem("ElementInventorycity").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailcity": value })
                : that.setState({ "ElementInventoryloginDetailcity":null })

        }).done();


        AsyncStorage.getItem("ElementInventorycompany_name").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailCompanyName": value })
                : that.setState({ "ElementInventoryloginDetailCompanyName": null })

        }).done();

        AsyncStorage.getItem("ElementInventorycompany_website").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailCompanyWebsite": value })
                : that.setState({ "ElementInventoryloginDetailCompanyWebsite": null })

        }).done();

        AsyncStorage.getItem("ElementInventoryphone_number").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailphone_number": value })
                : that.setState({ "ElementInventoryloginDetailphone_number": null })

        }).done();

        AsyncStorage.getItem("ElementInventorystate_name").then((value) => {
            value !== null ?
            that.setState({ "ElementInventoryloginDetailStateName": value })
                : that.setState({ "ElementInventoryloginDetailStateName": null })

        }).done();

    }
    _onLogoutPress = () => {
        const { params } = this.props.navigation.state;
        const UserAccount = params ? params.userAccount : null;
        // alert(UserAccount)
        AsyncStorage.setItem('ElementInventorylogin', '0');
        // AsyncStorage.setItem('ElementInventoryloginName', null);
        this.setState({ "ElementInventoryloginDetailUserAccount": '0' })
        // this.setState({ "ElementInventoryloginDetailNameUserAccount": '0' })
        alert('Successfully Logout')
        this.props.navigation.goBack()
        this.props.navigation.navigate('Settings', { footer: UserAccount })
    }
    render() {
        return (
            <Container style={styles.container} >
                <Content>

                    <View style={styles.parentWrapper}>
                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text value="Available" style={styles.innerText}>User-Id</Text>
                                <Text name="checkmark" style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailUserAccount}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >Phone Number</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailphone_number}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >Company Name</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailCompanyName}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >Company Website</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailCompanyWebsite}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >Business Type</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailBusinessType}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >Business Address</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailBusinessAddress}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >city</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailcity}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >State</Text>
                                <Text style={styles.imgIconStyle} >{this.state.ElementInventoryloginDetailStateName}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this._onLogoutPress}>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerTextLogout} value="onHand" >LogOut</Text>
                                <Text style={styles.imgIconStyle} ></Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </Content>
                <Footer navigation={this.props.navigation} />
            </Container>
        )
    }
}