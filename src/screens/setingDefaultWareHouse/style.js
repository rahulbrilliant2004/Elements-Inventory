const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    container: {
		backgroundColor: "#fff",
	},
	parentWrapper:{
		padding:10,
	},
	imgIconStyle:{
		position:'absolute',
		right:5,
		top:2,
		color:'#b08d58',
	},
	viewInner:{
		flexDirection:'row',
		justifyContent:'space-between',
		backgroundColor:'#fff',
		margin:5,
		padding:7,
		borderColor:'#dcdcdc',
		borderBottomWidth:1,
	},
	innerText:{
		position:'relative',
		fontSize:15,
		width:deviceWidth - 30,
		color:'#000',
	}
}