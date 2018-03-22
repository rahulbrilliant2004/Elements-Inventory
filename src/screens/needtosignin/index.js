import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import styles from './style';
import Footer from "../../components/footer/index";

export default class WhatDoINeedToSignIn extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "What Do I Need to Sign In",
    });
    render() {
        return (
            <Container style={styles.container} >
                <Content>
                    <View>
                        <Text style={{ padding: 20, color: '#000', fontSize: 20 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{"\n\n"}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n\n"} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. {"\n"}Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                </Content>
                <Footer navigation={this.props.navigation} />
            </Container>
        )
    }
}