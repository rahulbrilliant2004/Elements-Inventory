import React, { Component } from 'react';
import { Text,Image, StyleSheet, View, ListView, TextInput, ActivityIndicator , TouchableOpacity} from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import  styles  from './style';
import Footer from "../../components/footer/index";

export default class SettingFeedbackSupport extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Setting Feedback Support",
    });
    render(){
        return(
            <Container style={styles.container} >
                <Content>
                <View>
                    <Text>
                        
                    </Text>
                </View>
                </Content>
                <Footer navigation = {this.props.navigation} />
            </Container>
        )
    }
}