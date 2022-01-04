import {StyleSheet} from "react-native";
import {
  COLOR_PRIMARY,
  COLOR_GRAY_PRIMARY,
  COLOR_GRAY_SECONDARY,
} from "../../config/styles";

export default StyleSheet.create({
  ViewStyle: {
    backgroundColor: COLOR_GRAY_PRIMARY,
    width: "100%",
    height: 310,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: "15%",
    marginTop: "10%",
    flexDirection: "column",
  },

  ViewStyle1: {
    alignSelf: "center",
    height: 40,
    width: "84%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: "10%",
    paddingLeft: 10,
    flexDirection: "row",
  },

  ViewStyle2: {
    alignSelf: "center",
    height: 40,
    width: "84%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 10,
    flexDirection: "row",
  },

  TextStyle1: {
    flex: 1,
    color: "black",
  },

  TextStyle2: {
    flex: 1,
    color: "black",
  },

  TextStyle4: {
    flex: 1,
    alignSelf: "center",
    marginTop: 12,
    color: COLOR_GRAY_SECONDARY,
    fontSize: 20,
    fontWeight: "800",
  },

  TextStyle3: {
    marginTop: 20,
    marginRight: "8%",
    alignSelf: "flex-end",
  },

  ButtonStyle: {
    backgroundColor: COLOR_PRIMARY,
    width: "70%",
    height: "45%",
    borderRadius: 25,
    justifyContent: "flex-end",
  },

  ButtonViewStyle: {
    zIndex: 2,
    marginTop: "28%",
    alignItems: "center",
    position: "absolute",
    width: 270,
    height: 100,
    top: 200,
    left: 15,
  },

  IconStyle: {
    color: "gray",
    marginRight: 10,
    alignSelf: "center",
  },
});
