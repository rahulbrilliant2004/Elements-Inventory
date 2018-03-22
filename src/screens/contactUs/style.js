const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    container: {
    	alignItems: "center",
        backgroundColor: "#fff",
    	justifyContent: "center",
    },
    formButtonSub: {
    	backgroundColor: "#323232",
    	borderRadius: 5,
    	margin: 10,
    	width: deviceWidth-70,
		alignItems: "center",    	    
		justifyContent: "center",
    },
    formButtonSubText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    formContainer: {
    	marginTop: 15,
    	width: deviceWidth-50,
    },
    formInput: {
    	backgroundColor: "#f5f5f5",
    	borderColor: '#ccc',
    	borderWidth: 1,
    	borderRadius: 5,
    	elevation: 5,
    	shadowColor: '#ccc',
    	shadowOpacity: 10,
    	shadowRadius: 5,
    },
    formItem: {
    	borderBottomWidth: 0,
    	margin: 10,
    },
    helpButtonRight: {       
        alignItems: "flex-end",           
        justifyContent: "flex-end",       
    },
    helpTextLeft: {
        textAlign: "left",
        color: "#b08d58",
        fontWeight: "600",
        fontSize: 18,
    },
    helpTextRight: {
        textAlign: "right",
        color: "#b08d58",
        fontWeight: "600",
        fontSize: 18,
    },
    helpRowCenter: {       
        alignItems: "center",           
        justifyContent: "center",
        marginTop: 5,
    },
    helpTextCenter: {       
        color: "#b08d58",
        fontWeight: "600",
        fontSize: 18,
    },
    listItemCheckBox: {
		borderBottomWidth: 0,
    },
    listItemCheckBoxText: {
        paddingLeft: 15,
    },
    logoutText:{
        color:'#fff',
        fontSize:20,
    },
    success: {
        color: "green",
        paddingLeft: 5,
    },
    error: {
        color: "red",
        paddingLeft: 5,
    },
    PickerSignIn:{
        backgroundColor:'#ccc',
        padding:5,
        margin: 10,
    },
};