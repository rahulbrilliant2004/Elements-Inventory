const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	badgeAframeStyle: {
		alignItems: 'center',
		backgroundColor: "#afafaf",
		borderRadius: 5,
		justifyContent: 'center',
		left: "58%", 				
		minHeight: 25,
		width: 30,
		position: "absolute",				
		top: 5,		
	},
	badgeAframeStyleWhite: {
		alignItems: 'center',
		backgroundColor: "#fff",
		borderRadius: 5,
		justifyContent: 'center',
		left: "58%", 				
		minHeight: 25,
		width: 30,
		position: "absolute",				
		top: 5,		
	},
	footerContainer: { 	
		backgroundColor: "#323232", 
		height: 70, 
	},
	footerTabContainer: {
		backgroundColor: "#323232",
	},
	imgIconStyle: {
		height: 35,		
	},
	imgIconStyleAframe: {
		height: 35,
		position: "relative",
	},
	textAframeStyle: {
		color: '#323232',
		fontSize: 12,
		fontWeight: "bold",		
	},
	textIconColor: {
		color: "#afafaf",
		overflow: "hidden",
		paddingTop: 5,
	},
	textIconColorWhite: {
		color: "#fff",
		overflow: "hidden",
		paddingTop: 5,
	},
};