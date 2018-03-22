const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	pickerWrapperSettings: {
		borderColor: '#ddd',
		borderWidth: 1,
	},
	container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    titleInfoStyle: {

    },
    footer: {
        width: window.width,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff'
    },
    titleStyle: {
        color: '#000'
    }
}