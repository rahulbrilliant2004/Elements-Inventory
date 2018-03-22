const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    searchBarView: {
        backgroundColor: "#f5f5f5",
        borderColor: '#ccc',
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#ccc',
        shadowOpacity: 10,
        shadowRadius: 5,
        // margin: 10,
        maxHeight:'45%',
    },
    recentSearchBarView:{
        backgroundColor: "#f5f5f5",
        borderColor: '#ccc',
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#ccc',
        shadowOpacity: 10,
        shadowRadius: 5,
        // margin: 10,
        height:'auto',
        maxHeight:'55%',
    },
    recentSearchHeading:{
        fontWeight: 'bold',
        fontSize: 20,
        padding:10,
    },
    inputSearchColor: {
        color: "#323232",
        fontSize: 20,
    },
    simpleSearchWrapper: {
        backgroundColor: '#fff',
        flex: 1,
        height:deviceHeight,
    },
    wrapperSearch:{
        height:deviceHeight - 40,
    },
    imgSearchIconStyle: {
        height: 20,
    },
    listStyleContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    MainContainer :{
        justifyContent: 'center',
    },

    rowViewContainer: {
        fontSize: 17,
        padding: 10,
        flexDirection:'row',
        justifyContent:'space-between',
    },

    TextInputStyleClass:{
        textAlign: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7 ,
        backgroundColor : "#FFFFFF"
    }
};