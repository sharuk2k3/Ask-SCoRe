import {StyleSheet, Dimensions} from "react-native";
import {
  COLOR_LIGHT_PRIMARY,
  COLOR_GRAY_SECONDARY,
  COLOR_PRIMARY,
} from "../../config/styles";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  HeaderStyle1: {
    flexDirection: "row",
  },

  HeaderStyle: {
    fontSize: 30,
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },

  AskButtonStyle1: {
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.046,
    backgroundColor: COLOR_LIGHT_PRIMARY,
    borderRadius: 10,
    right: 5,
    justifyContent: "center",
  },

  DividerView: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
  },

  DividerView1: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    marginTop: 2,
    marginBottom: 5,
  },

  ImageView1: {
    height: deviceHeight * 0.034,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: COLOR_GRAY_SECONDARY,
    marginRight: 7,
  },
  ViewStyle: {
    marginLeft: 10,
    marginRight: 48,
    marginVertical: 7,
  },
  ViewStyle1: {
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: 10,
    minHeight: 35,
    width: "70%",
    marginRight: 5,
  },

  ViewStyle7: {
    backgroundColor: "white",
    borderRadius: 10,
    minHeight: 30,
    marginBottom: 5,
    width: "65%",
    borderColor: "black",
    borderWidth: 1,
  },

  TextInputStyle: {
    padding: 10,
    fontSize: 13,
    borderRadius: 10,
    width: "90%",
    color: "black",
    backgroundColor: "white",
  },

  ImageStyle: {
    height: deviceHeight * 0.14,
    aspectRatio: 1,
    borderRadius: 10,
    marginVertical: 5,
  },

  ImageStyle1: {
    height: deviceHeight * 0.14,
    aspectRatio: 1,
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: "center",
  },

  TextStyle: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },

  TextStyle1: {
    color: "gray",
    fontSize: 10,
    marginTop: 2,
  },

  IconStyle: {
    color: "black",
    marginRight: 10,
    alignSelf: "flex-end",
  },

  SafeAreaViewStyle: {flex: 0, backgroundColor: COLOR_PRIMARY},

  FlexStyle: {flex: 1},

  ViewStyle2: {marginBottom: 5},

  ViewStyle3: {flexDirection: "column", flex: 1},

  ViewStyle4: {flexDirection: "row"},

  ViewStyle5: {
    flexDirection: "column",
    marginLeft: 5,
  },

  ViewStyle6: {
    flexDirection: "row",
    marginBottom: 5,
  },

  TextStyle2: {fontWeight: "500", marginRight: 7},

  TextStyle3: {fontSize: 13, fontWeight: "300"},

  ViewStyle8: {
    flexDirection: "row",
    minHeight: 35,
    alignSelf: "center",
  },

  ViewStyle9: {flexDirection: "row", marginLeft: 10},
});
