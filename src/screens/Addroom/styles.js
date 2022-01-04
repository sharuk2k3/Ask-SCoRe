import {StyleSheet, Dimensions, Platform} from "react-native";
import {
  COLOR_PRIMARY,
  COLOR_LIGHT_PRIMARY,
  COLOR_GRAY_PRIMARY,
} from "../../config/styles";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  HeaderStyle1: {
    flexDirection: "row",
  },

  ImageView: {
    width: deviceWidth * 0.13,
    aspectRatio: 1,
    marginTop: 5,
    marginHorizontal: 5,
  },

  HeaderStyle: {
    fontSize: 30,
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },

  AskButtonStyle: {
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.046,
    backgroundColor: COLOR_LIGHT_PRIMARY,
    borderRadius: 10,
    right: 10,
    justifyContent: "center",
    marginTop: Platform.OS == "ios" ? 7 : 10,
  },

  DividerView: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
    marginHorizontal: 10,
  },

  DividerView1: {
    borderBottomColor: COLOR_PRIMARY,
    borderBottomWidth: 2,
    marginBottom: 3,
  },

  TextStyle2: {
    flex: 1,
    color: "black",
    padding: 10,
    fontSize: 20,
  },

  TextStyle: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },

  ViewStyle: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 100,
  },

  TextStyle1: {
    fontSize: 19,
    alignSelf: "center",
    fontWeight: "500",
    marginBottom: 10,
  },

  ViewStyle1: {
    width: deviceWidth * 0.64,
    height: deviceHeight * 0.09,
    backgroundColor: COLOR_GRAY_PRIMARY,
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },

  ViewStyle2: {
    width: deviceWidth * 0.64,
    minHeight: deviceHeight * 0.14,
    backgroundColor: COLOR_GRAY_PRIMARY,
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginTop: 10,
    borderRadius: 10,
  },

  TouchableStyle: {
    height: deviceHeight * 0.064,
    width: deviceWidth * 0.64,
    backgroundColor: "gray",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },

  ViewStyle3: {
    width: deviceWidth * 0.64,
    height: deviceHeight * 0.09,
    backgroundColor: COLOR_GRAY_PRIMARY,
    justifyContent: "center",
    borderBottomColor: COLOR_PRIMARY,
    borderBottomWidth: 2,
  },

  ViewStyle4: {
    width: deviceWidth * 0.64,
    minHeight: deviceHeight * 0.14,
    backgroundColor: COLOR_GRAY_PRIMARY,
    padding: 10,
    borderBottomColor: COLOR_PRIMARY,
    borderBottomWidth: 2,
    marginTop: 10,
    borderRadius: 10,
  },

  ViewStyle5: {
    height: deviceHeight * 0.064,
    width: deviceWidth * 0.64,
    backgroundColor: COLOR_PRIMARY,
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },

  ViewStyle6: {
    borderRadius: 10,
    marginHorizontal: 10,
    width: "70%",
    marginRight: 15,
  },

  TextInputStyle1: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: COLOR_GRAY_PRIMARY,
    borderRadius: 10,
  },

  AskButtonStyle1: {
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.05,
    backgroundColor: COLOR_LIGHT_PRIMARY,
    borderRadius: 10,
    right: 10,
    justifyContent: "center",
  },

  ViewStyle7: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 5,
  },

  TextStyle3: {marginLeft: "8%", color: "#9e9e9e"},

  ViewStyle8: {
    flexDirection: "row",
    height: deviceHeight * 0.05,
    justifyContent: "center",
  },

  TextStyle4: {alignSelf: "center", fontSize: 20},

  SafeAreaViewStyle: {flex: 1},
});
