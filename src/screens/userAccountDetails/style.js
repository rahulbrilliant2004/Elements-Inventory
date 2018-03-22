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
		color:'#b08d58',
	},
	viewInner:{
		flexDirection:'row',
		backgroundColor:'#fff',
		margin:5,
		padding:7,
		borderColor:'#dcdcdc',
		borderBottomWidth:1,
	},
	innerText:{
		position:'relative',
		fontSize:15,
		width:deviceWidth/3,
		color:'#000',
	},
	innerTextLogout:{
		position:'relative',
		fontSize:18,
		fontWeight:'600',
		width:deviceWidth - 10,
		color:'#fff',
		padding:5,
		backgroundColor:'#b08d58',
		textAlign:'center',
		justifyContent:'center',
	},

}