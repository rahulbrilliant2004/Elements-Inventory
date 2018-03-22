// import React, { Component } from 'react';
// import { Text,Image, StyleSheet, View, ListView, TextInput, ActivityIndicator , TouchableOpacity} from 'react-native';
// import { Button, Container, Content, Icon, Input, Item } from 'native-base';
// import  styles  from './style';
// import Footer from "../../components/footer/index";

// export default class ContactUs extends Component {

//     static navigationOptions = ({ navigation }) => ({
//         title: "Contact Us",
//     });
//     render(){
//         return(
//             <Container style={styles.container} >
//                 <Content>
//                 <View>
//                     <Text style={{padding:20, color:'#000', fontSize:20}}>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{"\n\n"}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n\n"} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. {"\n"}Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                     </Text>
//                 </View>
//                 </Content>
//                 <Footer navigation = {this.props.navigation} />
//             </Container>
//         )
//     }
// }

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

export default class ContactUs extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Contact Us",
    });
    constructor(props) {
        super(props);
        this.state = {
            fname: null,
            lname: null,
            email: null,
            city: null,
            stateName: null,
            zip: null,
            error: 0,
            navigate: this.props.navigation.navigate,
            phoneNumber: null,
            message: null,
            signInBox: 0,
            success: 0,
            ElementInventoryloginDetail: 0,
            ElementInventoryloginDetailName: 0,
            businessAddress: null,
            phoneNumber: null,
        }
    }
    redirectToHome = () => {
        var that = this
        // axios
        //     .post(`${URL.SIGNUP_URL}register`, {
        //         user_email: this.state.email,
        //         password: this.state.password,
        //         display_name: this.state.name
        //     })
        //     .then(function (response) {
        //         that.setState({ success: 1, })
        //         console.log(response)
        //         response.data.error ?
        //             (alert(response.data.error + " Please Login"))
        //             :
        //             (alert('Successfully Registered'))
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }
    render() {
        this.state.success == 1 ? this.state.navigate('LogIn') : null
        return (
            <Container style={styles.container} >

                <BannerHeader />
                <Content>
                    <Form style={styles.formContainer}>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="First Name"
                                onChangeText={(fname) => { this.setState({ fname }); }}
                                value={this.state.fname}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Last Name"
                                onChangeText={(lname) => { this.setState({ lname }); }}
                                value={this.state.lname}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Email"
                                onChangeText={(email) => { this.setState({ email }); }}
                                value={this.state.email}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>
                        <Item style={styles.formItem} last>
                            <Input
                                placeholder="Website"
                                onChangeText={(CompanyWebsite) => { this.setState({ CompanyWebsite }); }}
                                value={this.state.CompanyWebsite}
                                style={styles.formInput}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>

                        <Item style={styles.formItem}>
                            <Input
                                placeholder="Message"
                                onChangeText={(message) => { this.setState({ message }); }}
                                value={this.state.message}
                                style={styles.formInput}
                                multiline = {true}
                            />
                            {this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
                        </Item>

                        <Button style={styles.formButtonSub} onPress={() => this.redirectToHome()}>
                            <Text style={styles.formButtonSubText}>Submit</Text>
                        </Button>
                    </Form>
                </Content>

                <Footer navigation={this.props.navigation} />
            </Container>

        )
    }
}