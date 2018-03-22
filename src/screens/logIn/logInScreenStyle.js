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
        width: deviceWidth - 70,
        alignItems: "center",
        justifyContent: "center",
    },
    formButtonSubText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    formContainer: {
        marginTop: 5,
        width: deviceWidth - 50,
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
        backgroundColor: "#f5f5f5",
        elevation: 1,
        borderWidth: 1,
        borderTopWidth: 2,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        // shadowRadius: 2,

        // backgroundColor: "#f5f5f5",
        // borderColor: '#ccc',
        // borderRadius: 2,
        // elevation: 4,
        // borderWidth: 1,
        // borderBottomWidth: 0,
        // borderTopWidth: 2,
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
        marginTop: 2,
    },
    helpTextCenter: {
        color: "#b08d58",
        fontWeight: "600",
        fontSize: 18,
    },
    helpRowCenterForgetPass: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },
    helptextCenterForgetPass: {
        color: "#b08d58",
        fontWeight: "600",
        fontSize: 14,
    },
    listItemCheckBox: {
        borderBottomWidth: 0,
    },
    listItemCheckBoxText: {
        paddingLeft: 15,
    },
    logoutText: {
        color: '#fff',
        fontSize: 20,
    },
    success: {
        color: "green",
        paddingLeft: 5,
    },
    error: {
        color: "red",
        paddingLeft: 5,
    },
};