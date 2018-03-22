import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput,AsyncStorage, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import styles from './style';
import Footer from "../../components/footer/index";

export default class SettingsDefaultAvailability extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Setting Default Availability",
    });

    constructor(props) {
        super(props);
        this.state = {
            AvailableInventoryAs:'0',
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('AvailableInventoryAsSetting').then((value) => {
            value !== null ?
            this.setState({ AvailableInventoryAs: value })
            :
            this.setState({ AvailableInventoryAs: '0' })          
        }).done();
    }
    AvailableInventoryView = (data) => {
        AsyncStorage.setItem('AvailableInventoryAsSetting', data)
        this.setState({ AvailableInventoryAs: data })
        const { params } = this.props.navigation.state;
        const footerSettingIcon = params ? params.footer : null;
        this.props.navigation.goBack()
        this.props.navigation.navigate('Settings',{footer:footerSettingIcon})
    }
    render() {
        return (
            <Container style={styles.container} >
                <Content>

                    <View style={styles.parentWrapper}>
                        <TouchableOpacity  onPress={() => this.AvailableInventoryView('Available')}>
                            <View style={styles.viewInner}>
                                <Text value="Available" style={styles.innerText}>Available</Text>
                                {  this.state.AvailableInventoryAs ==  'Available' ?
                                <Icon name="md-checkmark-circle" size={10} style={styles.imgIconStyle}/>
                                : null }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.AvailableInventoryView('onHand')}>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="onHand" >on-Hand</Text>
                                {  this.state.AvailableInventoryAs ==  'onHand' ?
                                <Icon name="md-checkmark-circle" size={10} style={styles.imgIconStyle}/>
                                 : null }
                            </View>
                        </TouchableOpacity>

                    </View>

                </Content>
                <Footer navigation={this.props.navigation} />
            </Container>
        )
    }
}