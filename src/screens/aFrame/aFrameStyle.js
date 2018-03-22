const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	container: {
		backgroundColor: "#fff",
	},
	DateTimeText: {
		color: "#000",
		fontStyle: "italic",
		fontSize: 11,
	},
	highlightedText: {
		color: "#000",
		fontWeight: "bold",
		fontSize: 15,
		paddingLeft: 10,
	},
	list: {
		width: '100%', 
		marginLeft: 0, 
		paddingLeft: 0, 
		paddingRight: 0, 
		marginRight: 0,
	},
	listColGridImage: {
        alignItems: "stretch",
		flex: 1,
        flexDirection: "row",
		height: 150,
		padding: 5,
		paddingLeft: 10,
	},
	listColGridText: {
		height: 150,
		padding: 5,
	},
	listProTitle: {
		fontWeight: "600",
		paddingLeft: 15,
	},
	listText: {
		color: "#000",
		fontSize: 15,
		flex: 1,
		overflow: "hidden",
	},
	productsIconList: {
		height: 25,
		width: 25,
	},
	productsIconListRow: {
		paddingTop: 10,
	},
	productsImageList: {
		borderRadius: 3,
        height: 140,
        width: "100%",
	},
};