import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, ListView, TextInput, ActivityIndicator, AsyncStorage, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Container, Content, Icon, Input, Item, List, ListItem } from 'native-base';
import styles from './style';
import * as URL from "../../constants/constants";
import axios from "axios";
import { connect } from 'react-redux';
import { updateText } from "../../actions/index";
import { StackNavigator } from 'react-navigation';


function mapStateToProps(state) {
    return {
        footerTabChangee: state.footerTabChange
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateText: (text) => dispatch(updateText(text)),
    }
}
class SearchSimple extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Inventory Search",
    });

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            isLoading: false,
            text: '',
            recentSearchAsyncData: [],
            searchText: null,
            dataSource: [],
            SettingsDefaultWarehouseAsFun: null,
            AvailableInventoryAsSetting: null,
            typeData:false,
        }
        this.arrayholder = [];
    }

    componentDidMount() {
        AsyncStorage.getItem("recentSeactAsync").then((value) => {
            if (value !== null) {
                this.setState({ "recentSearchAsyncData": JSON.parse(value) });
                // console.log(value);
            }
        }).done();
    }

    GetListViewItem(data) {
        if ((this.state.recentSearchAsyncData !== null) && (this.state.recentSearchAsyncData !== '') && (this.state.recentSearchAsyncData.length > 0)) {
            let arrdemo = new Array()
            let convParse = this.state.recentSearchAsyncData
            convParse.map((asyncData, i) => {
                if (asyncData.BarcodeID !== data.BarcodeID) {
                    let pushdemo = arrdemo.push(asyncData)
                }
            })
            let convStr = data
            let pushdemo1 = arrdemo.push(data)
            AsyncStorage.setItem('recentSeactAsync', JSON.stringify(arrdemo));
        } else {
            let arrdemo = new Array()
            let convStr = data
            let pushdemo1 = arrdemo.push(data)
            AsyncStorage.setItem('recentSeactAsync', JSON.stringify(arrdemo));
        }
        this.state.navigate("SingleProductSlider", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
    }
    GetListViewItemRecentSearched(data) {
        this.state.navigate("SingleProductSlider", { ProData: JSON.stringify(data), ProDataBarcode: data.BarcodeID, ProDataSKU: data.SKU })
    }

    SearchFilterFunction(text) {
        const { params } = this.props.navigation.state;
        let warehouseSetting = params ? params.warehouseSetting : 'All';
        let AvailabilitySetting = params ? params.AvailabilitySetting : 'Available';

        if (text.length.toString() > 0) {

            this.props.updateText(text)
            var that = this
            that.setState({ isLoading: true })
            AsyncStorage.getItem('SettingsDefaultWarehouse').then(async (value) => {
                this.setState({ SettingsDefaultWarehouseAsFun: value })
            }).then(res => {

                AsyncStorage.getItem('AvailableInventoryAsSetting').then(async (value) => {
                    this.setState({ AvailableInventoryAsSetting: value })
                }).then(res => {
                    axios
                        .post(`${URL.SIMPLE_SEARCH}?Available=${this.state.AvailableInventoryAsSetting}&&Warehouse=${this.state.SettingsDefaultWarehouseAsFun}`, {
                            keyword: text,
                        })
                        .then(function (response) {
                            that.setState({ dataSource: response.data, isLoading: false });
                        })
                        .catch(function (error) {
                            // console.log(error);
                        });
                });
            });

        } else {
            this.props.updateText(null)
            this.setState({ dataSource: [], isLoading: false });
        }
        this.setState({typeData:true})
    }
    searchBarRemoveValue = () => {
        let that = this
        this.props.updateText(null)
        that.setState({ dataSource: [], isLoading: false });
    }


    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    width: "100%",
                }}
            />
        );
    }

    render() {
        const { updateText } = this.props.footerTabChangee
        return (
            <View style={styles.simpleSearchWrapper}>
                <Item>
                    <Input placeholder="Search by product name" style={styles.inputSearchColor}
                        onChangeText={(text) => { this.SearchFilterFunction(text) }}
                        value={updateText}
                    />
                    <TouchableOpacity onPress={() => this.searchBarRemoveValue()}>
                        <Image
                            style={styles.imgSearchIconStyle}
                            source={require('../../assets/cancle_cross.png')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </Item>
                {this.state.isLoading ?
                    (<View style={{ flex: 1, paddingTop: 20 }}>
                        <ActivityIndicator size="large" color="#323232" />
                    </View>)
                    :
                    (<View style={styles.wrapperSearch}>
                        <View style={styles.searchBarView}>
                            <ScrollView>
                                {
                                    this.state.dataSource.length > 0 ? (
                                        this.state.dataSource.map((data, i) => {
                                            return (
                                                <View key={i}>
                                                    <TouchableOpacity onPress={() => this.GetListViewItem(data)}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <View style={{ padding: 4 }}><Text style={styles.rowViewContainer}>{data.Product} </Text></View>
                                                            <View style={{ paddingTop: 5 }}>
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
                                    ) : (
                                        this.state.typeData?
                                    (<View><Text style={{fontSize:20,padding:10,color:'#000',textAlign:'center'}}>No Data Found</Text></View>):null
                                )
                                }
                            </ScrollView>
                        </View>

                        <View style={styles.recentSearchBarView}>
                            {
                                this.state.recentSearchAsyncData.length > 0 ? (
                                    <Text style={styles.recentSearchHeading}>Recent Searches</Text>
                                ) : null
                            }
                            <ScrollView>

                                {
                                    this.state.recentSearchAsyncData.length > 0 ? (
                                        this.state.recentSearchAsyncData.map((data, i) => {
                                            return (
                                                <View key={i}>
                                                    <TouchableOpacity onPress={() => this.GetListViewItemRecentSearched(data)}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <View style={{ padding: 4 }}><Text style={styles.rowViewContainer}>{data.Product} </Text></View>
                                                            <View style={{ paddingTop: 5 }}>
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
                                    ) : null
                                }

                            </ScrollView>
                        </View>
                    </View>)
                }
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSimple)