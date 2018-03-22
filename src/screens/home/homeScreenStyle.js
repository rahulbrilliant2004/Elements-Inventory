const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    buttonSearchStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: deviceWidth,
    },
    buttonElementsCustGrid: {
        marginLeft: 5,
        marginRight: 5,
        width: deviceWidth / 3 - 18,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        elevation:0,
    },
    container: {
        backgroundColor: "#fff",
    },
    ColElements: {
        alignItems: 'center', 
        height: 170, 
        paddingBottom: 20, 
        paddingTop: 20, 
    },
    ColElementsCustGrid: {
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    imgColElements:{
        height:130,
        maxHeight: 135,
        width: (deviceWidth/3) - 10,
        borderRadius:10,
    },
    inputSearchColor: {
        color: "#323232",
        fontSize: 20,
    },
    imgSearchIconStyle: {
        height: 25,
    },
    RowElements: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        elevation:0,
    },
    searchBarView: {
        backgroundColor: "#f5f5f5",
        borderColor: '#ccc',
        borderRadius: 2,
        elevation: 2,
        margin:10,
        borderWidth:1,
        borderBottomWidth:0,
        borderTopWidth:3,
        borderBottomColor:'transparent',
        // shadowRadius:5,
    },
    searchBarInput: {
        padding: 10,
    },
    searchWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    textColElements: {
        color: "#323232",
        fontSize: 18,
        flex: 1,
        flexDirection:'row',
        paddingTop: 6, 
        width: "100%",
        textAlign: "center",
        flexWrap:'wrap',
    },
    textSearchStyle: {
        color: "#b08d58",
        fontSize: 20,
        fontWeight: "600",
        padding:10,
    },
};