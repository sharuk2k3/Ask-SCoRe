import {StyleSheet} from "react-native";
import {
  COLOR_PRIMARY,
  COLOR_GRAY_SECONDARY,
  COLOR_GRAY_PRIMARY,
} from "../../config/styles";

export default StyleSheet.create({
  WholeTabBar: {
    width: 300,
    height: 40,
    backgroundColor: COLOR_GRAY_PRIMARY,
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
  },

  LoginTabBar: {
    height: "100%",
    width: "50%",
    backgroundColor: COLOR_GRAY_PRIMARY,
    borderRadius: 20,
  },

  SignupTabBar: {
    height: "100%",
    width: "50%",
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 20,
  },

  ImageView: {
    height: 80,
    width: 80,
    marginBottom: 20,
  },

  BarStyle: {
    textAlign: "center",
    marginTop: 8,
    color: COLOR_GRAY_SECONDARY,
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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20%",
  },
  ViewStyle1: {backgroundColor: "white", flex: 1},
});
