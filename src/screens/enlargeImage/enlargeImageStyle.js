const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	container: {
		backgroundColor: "#fff",
	},
	header: {
		backgroundColor: "#fff",
		elevation: 0,
	},
	imgCancleIconStyle: {
		width: 30,
		height: 30,
	},
	imgProIconStyle: {
		width: deviceWidth,
		height: deviceHeight/2,
	},
	mainView: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	}
};