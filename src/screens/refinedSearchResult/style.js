const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    container: {
		backgroundColor: "#fff",
	},
	rowViewContainer: {
        fontSize: 17,
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
	},
	imgSearchIconStyle: {
        height: 20,
        padding:10,
        margin:8,
    },
}