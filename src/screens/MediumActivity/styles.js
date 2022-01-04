import {StyleSheet, Platform, Dimensions} from "react-native";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  SafeAreaStyle: {backgroundColor: "#e6e6e6"},

  ViewStyle: {marginBottom: 15},

  ViewStyle1: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 7,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
  },

  TextStyle: {
    fontSize: 17,
    fontWeight: Platform.OS === "ios" ? "400" : "normal",
    marginVertical: 5,
  },

  TextStyle1: {fontSize: 11, fontWeight: "normal"},

  ViewStyle2: {alignSelf: "flex-end", flex: 2.6},

  ViewStyle3: {flexDirection: "row"},

  DividerView: {
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
    marginBottom: 3,
    marginHorizontal: 10,
    marginVertical: 3,
  },

  ViewStyle4: {
    borderBottomColor: "black",
    borderRightWidth: 2,
  },

  ImageStyle: {
    width: deviceWidth * 0.235,
    height: deviceHeight * 0.144,
    alignSelf: "flex-end",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },

  ViewStyle5: {flex: 7.4, padding: 5, marginLeft: 5},
});
