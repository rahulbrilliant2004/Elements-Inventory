const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	container: {
		backgroundColor: "#fff",
	},
	content: {
		marginLeft: 10,
		marginRight: 10,
	},
	colDetail: { 
		paddingTop: 10, 
		paddingBottom: 10, 
	},
	colHeader: {
		alignItems: "center", 
		justifyContent: "center", 
	},
	colHeaderText: {
		color: "#000",
		fontSize: 15,
		fontWeight: "600",
		textDecorationColor: "#000",
		textDecorationLine: "underline",
	},
	colHeaderTextData: {
		color: "#000",
		fontSize: 15,
		paddingBottom: 10,
		paddingTop: 10,
	},
	detailTitles: {
		color: "#000",
		fontWeight: "600",
		fontSize: 15,
	},
	listImgIcon: {
		height: 30,
		width: 30,
	},
	minDetailsProImage: {
		height: 120,
		width: 135,
		borderRadius: 5,
	},
	minDetailsProImageCol: {
		justifyContent: "center",
		alignItems: "center",
	},
	minDetailsProTextRow: {
		color: "#000",
		fontSize: 15,
	},
	priceRow: { 
		height: 40,
		justifyContent: "flex-end",
	},
	priceText: {
		color: "#000",
		fontSize: 18,
		fontWeight: "600",
		paddingRight: 15,
	},
	Row1: {
		height: 50,
	},
	Row2: {
		height: 120,
	},
	Row3: {
		height: 30,
	},
	singleProTitle: {
		fontWeight: "600",
		paddingBottom: 5,
		paddingLeft: 5,
		paddingTop: 15,
	},
	viewHeight: {
		height: 50,
	},
	view3: {
		height: 50,
		flex: 1,
		flexDirection: "row",
	},
	view3Inner1: {
		alignItems: "flex-start", 
		justifyContent: "flex-start",
		paddingLeft: 20,
		width: "50%",
	},
	view3Inner2: {
		alignItems: "flex-end", 
		justifyContent: "flex-end",
		paddingRight: 20,
		width: "50%",
	},
	view3InnerImage: {
		width: 30,
		height: "100%",
	},
	zViewPopUpMain: {
		backgroundColor: "#fff", 
		bottom: 70, 
		flexDirection: "column",
		height: 225, 
		position: "absolute", 
		width: "100%", 
		zIndex: 99999,	
	},
	zSubViewPopUp: {
		borderBottomWidth: 2,
		height: "20%", 
		paddingLeft: 20, 
		paddingRight: 20,
		width: "100%", 
	},
	zSubViewPopUpCancle: {
		backgroundColor: "#616161",
		height: "20%", 
		width: "100%", 
	},
	zSubViewPopUpButton: {
		flexDirection:"row", 
		alignItems: "flex-start", 
		justifyContent: "flex-start",
	},
	zSubViewPopUpButton_1: {
		alignItems: "center",
		flexDirection:"row", 
		justifyContent: "center", 
	},
	zSubViewPopUpImgIcon: {
		height: "100%", 
		width: 40, 
	},
	zSubViewPopUpText: {
		fontSize: 15, 
		paddingBottom: 5, 
		paddingLeft: 20, 
		paddingTop: 5, 
	},
	zSubViewPopUpTextCancle: {
		color: "#fff",
		fontSize: 15,
		fontWeight: "600",
	},
};