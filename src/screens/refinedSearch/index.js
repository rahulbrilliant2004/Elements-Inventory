import React, { Component } from "react";
import { Platform, Text, View, Image, BackHandler } from "react-native";
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
import styles from './refinedSearchStyle';
import Footer from "../../components/footer/index";
import * as URL from "../../constants/constants";
import axios from "axios";
import { connect } from 'react-redux';
import { settingIcon, contactIcon, searchIcon, specialIcon, aFrameIcon } from "../../actions/index";


const Item = Picker.Item;

class PickerExample extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: 'Refined Search',
		headerLeft:   <Icon
		name='arrow-back'
		onPress={() => {
			const { params } = navigation.state; 
			const RefinedSearchA = params ? params.RefinedSearch : null;
			RefinedSearchA.searchIcon(0)
			navigation.goBack()
		}}
		style={{color:'#fff', marginLeft:10}}
	/>,
	});
    componentWillMount() { BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick); }
    componentWillUnmount() { BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick); }

    handleBackButtonClick = () => { 		
        this.props.settingIcon(0)
		this.props.contactIcon(0)
		this.props.searchIcon(0)
		this.props.specialIcon(0)
        this.props.aFrameIcon(0) 
    }
	searchRefined = () => {
		// alert(this.state.AvailableInventory+" ware"+this.state.warehouse +"  color"+this.state.color+" MaterialSeries "+ this.state.MaterialSeries + " MaterialType"+ this.state.MaterialType + " materialthickness "+this.state.MaterialThickness+ " price"+ this.state.PriceGroup)
		(this.state.AvailableInventory !== '' || this.state.warehouse !== 'all' || this.state.color !== '' || this.state.MaterialSeries !== '' || this.state.MaterialType !=='all' || this.state.PriceGroup !== '' || this.state.MaterialThickness !== '') ?
		this.state.navigate('RefinedSearchResult', { AvailableInventoryT: this.state.AvailableInventory, warehouse: this.state.warehouse, color: this.state.color, MaterialSeries: this.state.MaterialSeries, MaterialType: this.state.MaterialType, PriceGroup: this.state.PriceGroup, MaterialThickness: this.state.MaterialThickness })
		:
		alert('Please Select your choice first')
	}

	componentDidMount() {
		var that = this;
		axios
			.get(`${URL.URL_CI}categories`)
			.then(function (response) {
				that.setState({ 'categoryVar': response.data });
				// console.log(response.data)
			})
			.catch(function (error) {
				// console.log(error);
			});
	}

	onValueChange1 = (value) => {
		this.setState({
			AvailableInventory: value
		});
	}
	onValueChange2 = (value) => {
		this.setState({
			warehouse: value
		});
	}
	onValueChange3 = (value) => {
		this.setState({
			color: value
		});
	}
	onValueChange4 = (value) => {
		this.setState({
			MaterialSeries: value
		});
	}
	onValueChange5 = (value) => {
		this.setState({
			MaterialType: value
		});
	}
	onValueChange6 = (value) => {
		this.setState({
			PriceGroup: value
		});
	}
	onValueChange7 = (value) => {
		this.setState({
			MaterialThickness: value
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			AvailableInventory: "",
			warehouse: "all",
			color: "",
			MaterialSeries: "",
			MaterialType: "",
			PriceGroup: "",
			MaterialThickness: "",
			navigate: this.props.navigation.navigate,
			categoryVar: [],
		};
	}
	render() {
		return (
			<Container style={styles.container} >
				<Content>
					<Form>
						<View style={styles.mainView}>
							<View style={styles.innerMainView1} >
								<Picker
								// placeholder="Available Inventory"
									// iosHeader="Select one"
									mode="dropdown"
									selectedValue={this.state.AvailableInventory}
									onValueChange={(value) => this.onValueChange1(value)}
									style={styles.picker1}
								>
									<Item style={styles.picker1Item} label="Available Inventory" value="all" />
									<Item style={styles.picker1Item} label="ONHOLD" value="ONHOLD" />
									<Item style={styles.picker1Item} label="ONSO" value="ONSO" />
									<Item style={styles.picker1Item} label="ONTRANSFER" value="ONTRANSFER" />
									<Item style={styles.picker1Item} label="Packinglist" value="Packinglist" />
									<Item style={styles.picker1Item} label="Pick Ticket" value="Pick Ticket" />
								</Picker>
							</View>
							<View style={styles.innerMainView2} >
								<Picker
									// iosHeader="Select two"
									mode="dropdown"
									selectedValue={this.state.warehouse}
									onValueChange={(value) => this.onValueChange2(value)}
									style={styles.picker2}
								>
									<Item label="All Warehouse" value="all" />
									<Item label="Fabstone Dallas" value="Fabstone Dallas" />
									<Item label="Fabricators Stone Group" value="Fabricators Stone Group" />
									<Item label="Austin Stone Works" value="Austin Stone Works" />
									<Item label="Northwest Building Materials" value="Northwest Building Materials" />
									<Item label="Granite Depot dba Baton Rouge Stone Gallery" value="Granite Depot dba Baton Rouge Stone Gallery" />
									<Item label="Stone Design Countertops" value="Stone Design Countertops" />
									<Item label="Natural Stone Interiors" value="Natural Stone Interiors" />
									<Item label="Stone Source" value="Stone Source" />
									<Item label="Granite Division Inc." value="Granite Division Inc." />
									<Item label="Sheppards Countertops" value="Sheppards Countertops" />
									<Item label="First In Counters" value="First In Counters" />
									<Item label="Surfaces" value="Surfaces" />
									<Item label="Quality Granite & Marble Countertops" value="Quality Granite & Marble Countertops" />
									<Item label="Marble Depot" value="Marble Depot" />
									<Item label="Classic Carpet of Lawton" value="Classic Carpet of Lawton" />
									<Item label="Collins Tile" value="Collins Tile" />
									<Item label="Midland Marble" value="Midland Marble" />
									<Item label="The Stone Gallery" value="The Stone Gallery" />
									<Item label="DALE NICHOLS MARBLE INC" value="DALE NICHOLS MARBLE INC" />
									<Item label="Stonetex" value="Stonetex" />
									<Item label="Ashcraft Marble & Granite" value="Ashcraft Marble & Granite" />
									<Item label="US Granite" value="US Granite" />
									<Item label="Ibanez AGM Countertops" value="Ibanez AGM Countertops" />
									<Item label="Stoneworks" value="Stoneworks" />
									<Item label="Conceptual Designs Inc" value="Conceptual Designs Inc" />
									<Item label="Noriegas Custom Cabinets and Tile" value="Noriegas Custom Cabinets and Tile" />
									<Item label="Unique Kitchen & Bath" value="Unique Kitchen & Bath" />
									<Item label="Tile Marble and Granite Works" value="Tile Marble and Granite Works" />
									<Item label="J&B Tile & Marble" value="J&B Tile & Marble" />
									<Item label="A&A Granite" value="A&A Granite" />
									<Item label="Precision Stone and Granite" value="Precision Stone and Granite" />
									<Item label="Texas Rock Tops" value="Texas Rock Tops" />
									<Item label="MIQ Logistics" value="MIQ Logistics" />
									<Item label="Adobe Walls Stoneworks" value="Adobe Walls Stoneworks" />
									<Item label="North America Granite" value="North America Granite" />
								</Picker>
							</View>
						</View>
						<View style={styles.subMainView}>
							<Picker
								// iosHeader="Select three"
								mode="dropdown"
								selectedValue={this.state.color}
								onValueChange={(value) => this.onValueChange3(value)}
								style={styles.picker3}
							>
								<Item label="Material Color" value="all" />
							</Picker>
							</View>
						<View style={styles.subMainView}>
							<Picker
								// iosHeader="Select four"
								mode="dropdown"
								selectedValue={this.state.MaterialSeries}
								onValueChange={(value) => this.onValueChange4(value)}
								style={styles.picker3}
							>
								<Item label="Material Series" value="all" />
								<Item label="BASIC" value="BASIC" />
								<Item label="EXOTIC" value="EXOTIC" />
								<Item label="DISCO" value="DISCO" />
								<Item label="FAB ADV" value="FAB ADV" />
								<Item label="Group" value="Group" />
								<Item label="MARBLE" value="MARBLE" />
								<Item label="QUARTZ" value="QUARTZ" />
								<Item label="SEMIEXOTIC" value="SEMIEXOTIC" />
							</Picker>
							</View>
						<View style={styles.subMainView}>
							<Picker
								// iosHeader="Select five"
								mode="dropdown"
								selectedValue={this.state.MaterialType}
								onValueChange={(value) => this.onValueChange5(value)}
								style={styles.picker3}
							>
								<Item label="Material Type" value="all" />
								{
									this.state.categoryVar.map((data, i) => {
										return <Item label={data.type} value={data.type} key={i} />
									})
								}
							</Picker>
							</View>
						<View style={styles.subMainView}>
							<Picker
								// iosHeader="Select six"
								mode="dropdown"
								selectedValue={this.state.PriceGroup}
								onValueChange={(value) => this.onValueChange6(value)}
								style={styles.picker3}
								enabled = {this.state.PriceGroup !== 'all' ? true :false}
							>
								<Item label="Price Group" value="all" />
								<Item label="$0-$10" value="$0-$10" />
								<Item label="$10-$20" value="$10-$20" />
								<Item label="$20-$30" value="$20-$30" />
								<Item label=">$30" value="$30-$40" />
							</Picker>
							</View>
						<View style={styles.subMainView}>
							<Picker
								// iosHeader="Select seven"
								mode="dropdown"
								selectedValue={this.state.MaterialThickness}
								onValueChange={(value) => this.onValueChange7(value)}
								style={styles.picker3}
							>
								<Item label="Material Thickness" value="all" />
								<Item label="1" value="1" />
								<Item label="2" value="2" />
								<Item label="3" value="3" />
								<Item label="4" value="4" />
								<Item label="5" value="5" />
								<Item label="6" value="6" />
								<Item label="7" value="7" />
							
							</Picker>
						</View>
						<View style={styles.subSearchMainView}>
							<View style={styles.searchButtonView}>
								<Button style={styles.searchButton} onPress={() => this.searchRefined()} transparent><Text style={styles.searchButtonText}>Search</Text></Button>
							</View>
						</View>
					</Form>
				</Content>
				<Footer navigation={this.props.navigation} />
			</Container>
		);
	}
}
function mapStateToProps(state) {
	return {
		footerTabChangee: state.footerTabChange
	}
}
function mapDispatchToProps(dispatch) {
	return {
		settingIcon: (text) => dispatch(settingIcon(text)),
		contactIcon: (text) => dispatch(contactIcon(text)),
		searchIcon: (text) => dispatch(searchIcon(text)),
		specialIcon: (text) => dispatch(specialIcon(text)),
		aFrameIcon: (text) => dispatch(aFrameIcon(text)),
	}
}
export default connect(
    mapStateToProps,
	mapDispatchToProps
)(PickerExample)