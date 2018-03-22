import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput, ActivityIndicator,AsyncStorage, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import styles from './style';
import Footer from "../../components/footer/index";

export default class SettingsDefaultWarehouse extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Setting Default Warehouse",
    });
    constructor(props) {
        super(props);
        this.state = {
            SettingsDefaultWarehouseAsFun:'0',
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('SettingsDefaultWarehouse').then((value) => {
            value !== null ?
            this.setState({ SettingsDefaultWarehouseAsFun: value })
            :
            this.setState({ SettingsDefaultWarehouseAsFun: '0' })          
        }).done();
    }
    
    DefaultWarehousef = (data) => {
        AsyncStorage.setItem('SettingsDefaultWarehouse', data)
        this.setState({ SettingsDefaultWarehouseAsFun: data })
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
                        <TouchableOpacity   onPress={() => this.DefaultWarehousef('Fabstone Dallas')}>
                            <View style={styles.viewInner}>
                                <Text value="Fabstone Dallas" style={styles.innerText}>FabStone (McKinney)</Text>
                                {  this.state.SettingsDefaultWarehouseAsFun ==  'Fabstone Dallas' ?
                                <Icon name="md-checkmark-circle" size={10} style={styles.imgIconStyle}/>
                                : null }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={() => this.DefaultWarehousef('Austin Stone Works')}>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="Austin Stone Works" >Elements (Dallas)</Text>
                                {  this.state.SettingsDefaultWarehouseAsFun ==  'Austin Stone Works' ?
                                <Icon name="md-checkmark-circle" size={10} style={styles.imgIconStyle}/>
                                : null }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={() => this.DefaultWarehousef('All')}>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="All" >All Locations</Text>
                                {  this.state.SettingsDefaultWarehouseAsFun ==  'All' ?
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