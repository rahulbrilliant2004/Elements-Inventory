import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput, ActivityIndicator, AsyncStorage, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import styles from './style';
import Footer from "../../components/footer/index";

export default class SettingsDefaultView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Setting Default View",
    });
    constructor(props) {
        super(props);
        this.state = {
            ViewInventoryAs: '0',
        }
    }
    componentDidMount() {

        AsyncStorage.getItem('ViewInventoryAsSetting').then((value) => {
            value !== null ?
                this.setState({ ViewInventoryAs: value })
                :
                this.setState({ ViewInventoryAs: '0' })
        }).done();
    }
    listphotoView = (data) => {
        AsyncStorage.setItem('ViewInventoryAsSetting', data)
        this.setState({ ViewInventoryAs: data })
        // this.props.navigation.goBack()
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
                        <TouchableOpacity onPress={() => this.listphotoView('listView')}>
                            <View style={styles.viewInner}>
                                <Text value="listView" style={styles.innerText}>List</Text>
                                {this.state.ViewInventoryAs == 'listView' ?
                                    <Icon name="md-checkmark-circle" size={10} style={styles.imgIconStyle} />
                                    : null
                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.listphotoView('photoView')}>
                            <View style={styles.viewInner}>
                                <Text style={styles.innerText} value="photoView" >Photo</Text>
                                {this.state.ViewInventoryAs == 'photoView' ?
                                    <Icon name="md-checkmark-circle" size={10}  style={styles.imgIconStyle} />
                                    : null
                                }
                            </View>
                        </TouchableOpacity>

                    </View>
                </Content>
                <Footer navigation={this.props.navigation} />
            </Container>
        )
    }
}