import {StyleSheet, Dimensions} from "react-native";
import {
  COLOR_PRIMARY,
  COLOR_GRAY_SECONDARY,
  COLOR_GRAY_PRIMARY,
} from "../../config/styles";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  WholeTabBar: {
    width: "100%",
    height: 60,
    backgroundColor: COLOR_PRIMARY,
    alignSelf: "center",
    borderRadius: 3,
    flexDirection: "row",
    paddingVertical: 5,
  },

  LoginTabBar: {
    height: "100%",
    width: "50%",
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 20,
  },

  SignupTabBar: {
    height: "100%",
    width: "50%",
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 3,
  },

  BarStyle: {
    textAlign: "center",
    marginTop: 8,
    color: COLOR_PRIMARY,
    fontSize: 20,
    fontWeight: "800",
  },

  BarStyle1: {
    textAlign: "center",
    marginTop: 8,
    color: COLOR_PRIMARY,
    fontSize: 20,
    fontWeight: "800",
  },

  ViewStyle: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
  },

  DividerView: {
    borderBottomColor: "#23598B",
    borderBottomWidth: 7,
    marginVertical: 3,
    marginHorizontal: 0,
  },

  DividerView1: {
    borderBottomColor: COLOR_PRIMARY,
    borderBottomWidth: 2,
    marginVertical: 3,
    marginHorizontal: 0,
  },

  SafeAreaStyle: {flex: 0, backgroundColor: COLOR_PRIMARY},

  IconStyle: {color: COLOR_GRAY_PRIMARY, alignSelf: "center"},

  IconStyle1: {color: "white", alignSelf: "center"},

  TextStyle: {alignSelf: "center", color: "white"},
});
