import React, { Component } from 'react';
import { Image, View, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { Button, Container, Content, Icon, Input, Item, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import styles from "./homeScreenStyle";
import BannerHeader from "../../components/bannerHeader/index";
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";

const marble = require('../../assets/marble-img.png')
const granite = require('../../assets/granite-img.png')
const quartzite = require('../../assets/quartzite-img.png')
const onyx = require('../../assets/onyx-img.png')
const other = require('../../assets/other-img.png')
const quartz = require('../../assets/quartz-img.png')

var data = [
  {
    name: "marble0",
    image: marble,
  },
  {
    name: "granite0",
    image: granite,
  },
  {
    name: "quartzite0",
    image: quartzite,
  },
  {
    name: "onyx0",
    image: onyx,
  },
  {
    name: "other0",
    image: other,
  },
  {
    name: "quartz0",
    image: quartz,
  },
  {
    name: "marble1",
    image: marble,
  },
  {
    name: "granite1",
    image: granite,
  },
  {
    name: "quartzite1",
    image: quartzite,
  },
  {
    name: "onyx1",
    image: onyx,
  },
  {
    name: "other1",
    image: other,
  },
  {
    name: "quartz1",
    image: quartz,
  },
  {
    name: "marble2",
    image: marble,
  },
  {
    name: "granite2",
    image: granite,
  },
  {
    name: "quartzite2",
    image: quartzite,
  },
  {
    name: "onyx2",
    image: onyx,
  },
  {
    name: "other2",
    image: other,
  },
  {
    name: "quartz2",
    image: quartz,
  },
  {
    name: "marble3",
    image: marble,
  },
  {
    name: "granite3",
    image: granite,
  },
  {
    name: "quartzite3",
    image: quartzite,
  },
  {
    name: "onyx3",
    image: onyx,
  },
  {
    name: "other3",
    image: other,
  },
  {
    name: "quartz3",
    image: quartz,
  }
];

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigate: this.props.navigation.navigate,
      categoryVar: [],
      ElementInventoryloginDetail: 0,
      ElementInventoryloginDetailName: 0,
      isLoading: true,
      SettingsDefaultWarehouseAsFun: null,
      AvailableInventoryAs: null,
    }
  }

  redirectToCollectionProducts = (collectionName) => {
    this.state.navigate('CollectionProducts', {
      id: "123",
      title: collectionName,
      WarehouseSetting: this.state.SettingsDefaultWarehouseAsFun,
      AvailabilitySettings: this.state.AvailableInventoryAs,
    })
  }

  logoutElements = () => {

    AsyncStorage.setItem('ElementInventorylogin', 0);
    this.setState({ "ElementInventoryloginDetail": 0 });
    AsyncStorage.setItem('ElementInventoryloginName', 0);
    this.setState({ "ElementInventoryloginDetailName": 0 });
    // alert('fd');
  }

  componentDidMount() {
    var that = this;
    axios
      .get(`${URL.URL_CI}categories`)
      .then(function (response) {
        // console.log(response.data)
        that.setState({ 'categoryVar': response.data, isLoading: false });
      })
      .catch(function (error) {
        // console.log(error);
      });
    AsyncStorage.getItem("ViewInventoryAsSetting").then((value) => {
      value == null ?
        AsyncStorage.setItem('ViewInventoryAsSetting', 'photoView') : null
    }).done();
    AsyncStorage.getItem("SettingsDefaultWarehouse").then((value) => {
      value == null ?
        AsyncStorage.setItem('SettingsDefaultWarehouse', 'All') : null
    }).done();
    AsyncStorage.getItem("AvailableInventoryAsSetting").then((value) => {
      value == null ?
        AsyncStorage.setItem('AvailableInventoryAsSetting', 'Available') : null
    }).done();


    AsyncStorage.getItem('SettingsDefaultWarehouse').then((value) => {
      if (value === 'Austin Stone Works') {
        this.setState({ SettingsDefaultWarehouseAsFun: 'Austin Stone Works' })
      } else if (value === 'Fabstone Dallas') {
        this.setState({ SettingsDefaultWarehouseAsFun: 'Fabstone Dallas' })
      } else {
        this.setState({ SettingsDefaultWarehouseAsFun: 'All' })
      }
    }).done();

    AsyncStorage.getItem('AvailableInventoryAsSetting').then((value) => {
      if (value === 'onHand') {
        this.setState({ AvailableInventoryAs: 'onHand' })
      } else {
        this.setState({ AvailableInventoryAs: 'Available' })
      }
    }).done();
  }

  render() {
    
    // console.log(this.state.categoryVar)
    return (
      <Container style={styles.container} >

        <BannerHeader />

        <View searchBar style={styles.searchBarView} >
          <TouchableOpacity onPress={() => this.state.navigate('SearchSimple')}>
            <View style={styles.searchWrapper}>
              <Text style={styles.inputSearchColor} >
                Search by Product name
              </Text>
              <Image
                style={styles.imgSearchIconStyle}
                source={require('../../assets/input-search-icon.png')}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>

        <Content>
          {
            this.state.isLoading ?
              (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                  <ActivityIndicator size="large" color="#323232" />
                </View>
              ) :

              <Grid>
                <Row style={styles.RowElements}>
                  {
                    this.state.categoryVar.map((data, i) => {
                      let collName = data.type.capitalize()
                      return (
                        <Button style={styles.buttonElementsCustGrid} key={i} onPress={() => this.redirectToCollectionProducts(collName)}>
                          <Col style={styles.ColElementsCustGrid} key={i}>
                            <Image
                              style={styles.imgColElements}
                              source={{ uri: data.image }}
                              resizeMode="contain"
                            />
                            <Text style={styles.textColElements} >{collName}</Text>
                          </Col>
                        </Button>
                      )
                    })
                  }
                </Row>
              </Grid>
          }
        </Content>

        {/* <View>
          <Button block transparent onPress={() => this.state.navigate('RefinedSearch', { RefinedSearch: "RefinedSearch" })}>
            <Text style={styles.textSearchStyle}>Refined Search</Text>
          </Button>
          {
            this.state.ElementInventoryloginDetail !== 0 ? (
              <Button  block transparent  onPress={() => this.logoutElements()}>
                <Text style={styles.textSearchStyle}>{this.state.ElementInventoryloginDetailName} (Logout)</Text>
            </Button>) :
              (<Button block transparent onPress={() => this.state.navigate('LogIn', { Login: "LogInPage" })}>
                <Text style={styles.textSearchStyle}>Log-In</Text>
              </Button>)
          }
        </View> */}

        <Footer navigation={this.props.navigation} />
      </Container>
    );
  }
}
