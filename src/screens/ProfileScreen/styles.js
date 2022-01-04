import {StyleSheet, Dimensions} from "react-native";
import {
  COLOR_PRIMARY,
  COLOR_GRAY_SECONDARY,
  COLOR_LIGHT_PRIMARY,
} from "../../config/styles";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  LoginButtonView: {
    width: "100%",
    height: 50,
    backgroundColor: COLOR_PRIMARY,
    justifyContent: "center",
    borderRadius: 20,
  },

  LoginButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "800",
  },

  ImageView: {
    width: deviceWidth * 0.13,
    aspectRatio: 1,
    borderRadius: 70,
    backgroundColor: COLOR_GRAY_SECONDARY,
    alignSelf: "center",
    marginTop: "5%",
    borderWidth: 2,
    borderColor: "#23598B",
    alignItems: "center",
    marginBottom: 30,
  },

  container2: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },

  container4: {
    backgroundColor: "white",
    height: "10%",
    marginHorizontal: 5,
    marginTop: 3,
    borderRadius: 10,
    flexDirection: "row",
  },

  container3: {
    flexDirection: "row",
    marginLeft: 20,
  },

  title1: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: 110,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },

  line: {
    borderBottomColor: "#dfdfe5",
    borderBottomWidth: 1,
    margin: 5,
  },

  line1: {
    borderBottomColor: "#dfdfe5",
    borderRightWidth: 1,
    marginVertical: 5,
  },

  HeaderStyle1: {
    flexDirection: "row",
  },

  ImageView1: {
    width: deviceWidth * 0.13,
    aspectRatio: 1,
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
    marginTop: 7,
  },

  DividerView: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
    marginHorizontal: 10,
  },

  SafeStyle: {
    backgroundColor: "white",
    flex: 1,
  },

  EditDoneStyle: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },

  ViewStyle: {
    backgroundColor: "white",
    marginVertical: 20,
    justifyContent: "center",
  },

  ImageProfileStyle: {
    marginRight: 10,
    alignSelf: "center",
    marginLeft: 10,
    width: deviceWidth * 0.24,
    height: deviceHeight * 0.13,
    aspectRatio: 1,
    borderRadius: 30,
  },

  ViewStyle2: {
    width: "100%",
    alignSelf: "center",
  },

  PickImageStyle: {
    alignSelf: "center",
    color: "gray",
    paddingTop: 10,
  },

  LogoutButtonStyle: {
    alignSelf: "center",
    width: "90%",
    marginTop: 20,
  },
});
