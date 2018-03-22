import React, { Component } from 'react';
import { View, Text, AsyncStorage, TextInput } from 'react-native';
import { Body, Button, Card, CheckBox, Container, Content, Form, Icon, Input, Item, ListItem, Picker } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import styles from "./style";
import BannerHeader from "../../components/bannerHeader/index";
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";
import validate from 'validate.js'

const constraints = {
    email: {
        presence: {
            message: "Cannot be blank."
        },
        email: {
            message: ''
        },
    },
    // password: {
    //     presence: {
    //         message: "Cannot be blank."
    //     },
    //     length: {
    //         minimum: 5,
    //         message: 'Your password must be at least 5 characters'
    //     }
    // },
    phoneNumber: {
        presence: {
            message: "Cannot be blank."
        },
        length: {
            minimum: 10,
        },
        numericality: {
            onlyInteger: true,
        },
    },
    companyWebsite: {
        presence: {
            message: "Cannot be blank."
        },
        url: {
            regexp: [".+"],
            message: ' - Please enter a valid URL[Ex. https://elements.design/]'
        },
    },
    businessAddress: {
        presence: {
            message: "Cannot be blank."
        },
        format: {
            // Must be numbers followed by a name
            pattern: "^[0-9]+ .+$",
            message: "Please Enter valid address [Ex: 11111 Zodiac Lane in Dallas]"
        },
    },
    zip: {
        presence: {
            message: "Cannot be blank."
        },
        format: {
            pattern: "[0-9]+"
        },
        length: {
            maximum: 6,
        },
    },
    city: {
        presence: {
            message: "Cannot be blank."
        },
    },
    stateName: {
        presence: {
            message: "Cannot be blank."
        },
    },
    name: {
        presence: {
            message: "Cannot be blank."
        },
    },
    BusinessType: {
        presence: {
            message: "Cannot be blank."
        },
    },
}

const validator = (field, value) => {
    // Creates an object based on the field name and field value
    // e.g. let object = {email: 'email@example.com'}
    let object = {}
    object[field] = value

    let constraint = constraints[field]
    console.log(object, constraint)

    // Validate against the constraint and hold the error messages
    const result = validate(object, { [field]: constraint })

    console.log(object, constraint, result)

    // If there is an error message, return it!
    if (result) {
        // Return only the field error message if there are multiple
        return result[field][0]
    }

    return null
}

export default class RequestAccess extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Sign Up",
    });
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            nameError: null,
            email: null,
            emailError: null,
            city: null,
            cityError: null,
            stateName: null,
            stateNameError: null,
            zip: null,
            zipError: null,
            error: 0,
            navigate: this.props.navigation.navigate,
            phoneNumber: null,
            companyWebsite: null,
            companyWebsiteError: null,
            signInBox: 0,
            success: 0,
            ElementInventoryloginDetail: 0,
            ElementInventoryloginDetailName: 0,
            businessAddress: null,
            businessAddressError: null,
            phoneNumber: null,
            phoneNumberError: null,
            BusinessType: null,
            BusinessTypeError: null,
        }
    }

    redirectToHome = () => {
        let { email, phoneNumber, zip, companyWebsite, businessAddress, city, stateName, name, BusinessType } = this.state;
        // console.log("business_type" + this.state.BusinessType +
        //     "company_name" + this.state.name +
        //     "business_address" + this.state.businessAddress +
        //     "city" + this.state.city +
        //     "state_name" + this.state.stateName +
        //     "zip" + this.state.zip +
        //     "phone_number" + this.state.phoneNumber +
        //     "user_email" + this.state.email +
        //     "company_website" + this.state.companyWebsite)

        let emailError = validator('email', email)
        let phoneNumberError = validator('phoneNumber', phoneNumber)
        let zipError = validator('zip', zip)
        let companyWebsiteError = validator('companyWebsite', companyWebsite)
        let businessAddressError = validator('businessAddress', businessAddress)
        let cityError = validator('city', city)
        let stateNameError = validator('stateName', stateName)
        let nameError = validator('name', name)
        let BusinessTypeError = validator('BusinessType', BusinessType)

        this.setState({
            emailError: emailError,
            phoneNumberError: phoneNumberError,
            zipError: zipError,
            companyWebsiteError: companyWebsiteError,
            businessAddressError: businessAddressError,
            cityError: cityError,
            stateNameError: stateNameError,
            nameError: nameError,
            BusinessTypeError: BusinessTypeError,
        })
        if (BusinessTypeError == null && nameError == null && businessAddressError == null && cityError == null && stateNameError == null && zipError == null && phoneNumberError == null && emailError == null && companyWebsiteError == null) {
            var that = this
            axios
                .post(`${URL.SIGNUP_URL}register`, {
                    business_type: this.state.BusinessType,
                    company_name: this.state.name,
                    business_address: this.state.businessAddress,
                    city: this.state.city,
                    state_name: this.state.stateName,
                    zip: this.state.zip,
                    phone_number: this.state.phoneNumber,
                    user_email: this.state.email,
                    company_website: this.state.companyWebsite,
                })
                .then(function (response) {
                    that.setState({ success: 1, })
                    console.log(response)
                    response.data.error ?
                        (alert(response.data.error))
                        :
                        (alert('Successfully Registered'))
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    onValueChange1 = (value) => {
        this.setState({
            BusinessType: value
        });
    }
    render() {
        const { emailError, phoneNumberError, zipError, companyWebsiteError, businessAddressError, cityError, BusinessTypeError, nameError, stateNameError } = this.state
        this.state.success == 1 ? this.state.navigate('LogIn') : null
        return (
            <Container style={styles.container} >

                <BannerHeader />
                <Content>
                    <Form style={styles.formContainer}>
                        <View style={styles.PickerSignIn}>
                            <Picker
                                mode="dropdown"
                                selectedValue={this.state.BusinessType}
                                onValueChange={(value) => this.onValueChange1(value)}
                                style={styles.pickerSetting}
                                type='BusinessType'
                            >
                                <Picker.Item label="Business Type" />
                                <Picker.Item label="Fabricator" value="Fabricator" />
                                <Picker.Item label="Designer" value="Designer" />
                                <Picker.Item label="Architect" value="Architect" />
                                <Picker.Item label="General Contractor" value="General Contractor" />
                            </Picker>
                        </View>
                        {BusinessTypeError ?
                            <Item>
                                <Text style={{ color: 'red' }}>  {BusinessTypeError} </Text>
                            </Item>
                            : null}
                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Company Name"
                                onChangeText={(name) => { this.setState({ name }); }}
                                value={this.state.name}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {nameError ? nameError : null}</Text>
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Business Address"
                                onChangeText={(businessAddress) => { this.setState({ businessAddress }); }}
                                value={this.state.businessAddress}
                                style={styles.formInput}
                                type="businessAddress"
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {businessAddressError ? businessAddressError : null}</Text>
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="City"
                                onChangeText={(city) => { this.setState({ city }); }}
                                value={this.state.city}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {cityError ? cityError : null}</Text>
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="State"
                                onChangeText={(stateName) => { this.setState({ stateName }); }}
                                value={this.state.stateName}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {stateNameError ? stateNameError : null}</Text>
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Zip Code"
                                onChangeText={(zip) => { this.setState({ zip }); }}
                                value={this.state.zip}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {zipError ? zipError : null}</Text>
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Phone Number"
                                onChangeText={(phoneNumber) => { this.setState({ phoneNumber }); }}
                                value={this.state.phoneNumber}
                                style={styles.formInput}
                                keyboardType='numeric'
                                type="phoneNumber"
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {phoneNumberError ? phoneNumberError : null}</Text>
                        </Item>
                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Email"
                                type="email"
                                onChangeText={(email) => {
                                    this.setState({ email });
                                }}
                                value={this.state.email}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {emailError ? emailError : null}</Text>
                        </Item>
                        <Item style={styles.formItem} last>
                            <Input
                                placeholder="Company Website"
                                onChangeText={(companyWebsite) => { this.setState({ companyWebsite }); }}
                                value={this.state.companyWebsite}
                                style={styles.formInput}
                                type="companyWebsite"
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item>
                            <Text style={{ color: 'red' }}> {companyWebsiteError ? companyWebsiteError : null}</Text>
                        </Item>

                        <Button style={styles.formButtonSub} onPress={() => this.redirectToHome()}>
                            <Text style={styles.formButtonSubText}>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>

                <Footer navigation={this.props.navigation} />
            </Container>

        )
    }
}