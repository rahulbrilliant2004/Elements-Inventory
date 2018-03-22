import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item } from 'native-base';
import styles from './style';
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";

export default class Settings extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Refined Search Result",
    });

    constructor(props) {
        super(props);
        this.state = {
            RefinedSearchData: [],
            navigate: this.props.navigation.navigate,
            isLoading: true,
        };
    }
    componentDidMount() {
        var that = this
        const { state } = this.props.navigation;
        let AvailableInventory = state.params ? state.params.AvailableInventoryT : "";
        let warehouse = state.params ? state.params.warehouse : "";
        let color = state.params ? state.params.color : "";
        let MaterialSeries = state.params ? state.params.MaterialSeries : "";
        let MaterialType = state.params ? state.params.MaterialType : "";
        let PriceGroup = state.params ? state.params.PriceGroup : "";
        let MaterialThickness = state.params ? state.params.MaterialThickness : "";

        axios
            .post(`${URL.REFINED_SEARCH}refined_search`, {
                'Slab Status': AvailableInventory,
                Location: warehouse,
                Group: MaterialSeries,
                Category: MaterialType,
                'Unit Cost': PriceGroup,
                'Material Thickness':MaterialThickness,
            })
            .then(function (response) {
                that.setState({ success: 1, RefinedSearchData: response.data, isLoading: false })
                // console.log(response.data)

            })
            .catch(function (error) {
                // console.log(error);
            });
    }

    GetListViewItem(data) {
        this.state.navigate("SingleProductSlider", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
    }

    render() {

        console.log(this.state.RefinedSearchData)
        // alert(value1+" "+value2+" "+value3+" "+value4+" "+value5+" "+value6+ " "+value7)
        return (
            <Container style={styles.container} >
                <Content>
                    <View>
                    {this.state.isLoading ?
                        (<View style={{flex: 1,justifyContent: 'center' ,alignContent:'center'}}>
                            <ActivityIndicator size="large" color="#323232" />
                        </View>) : (
                            <View>
                                {
                                    this.state.RefinedSearchData.length > 0 ? (
                                        this.state.RefinedSearchData.map((data, i) => {
                                            return (

                                                <View key={i}>
                                                    <TouchableOpacity onPress={() => this.GetListViewItem(data)}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <View style={{ padding: 4 }}><Text style={styles.rowViewContainer}>{data.Product} </Text></View>
                                                            <View style={{ paddingTop: 10 }}>
                                                                <Image
                                                                    style={styles.imgSearchIconStyle}
                                                                    source={require('../../assets/arrow.png')}
                                                                    resizeMode="contain"
                                                                />
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })
                                    ) : <Text style={{fontSize:20,padding:20}}>No Product Available</Text>
                                }
                                {/* {AvailableInventory} {warehouse} {color} {MaterialSeries} {MaterialType} {PriceGroup} {MaterialThickness} */}
                            </View>)
                    }
                    </View>
                </Content>
                <Footer navigation={this.props.navigation} />
            </Container>
        )
    }
}