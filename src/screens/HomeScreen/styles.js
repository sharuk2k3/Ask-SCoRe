import {StyleSheet, Dimensions, Platform} from "react-native";
import {COLOR_LIGHT_PRIMARY, COLOR_LIGHT_SECONDARY} from "../../config/styles";

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  HeaderStyle: {
    fontSize: 30,
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
  },

  ImageView: {
    width: deviceWidth * 0.13,
    aspectRatio: 1,
    marginHorizontal: 5,
  },

  HeaderStyle1: {
    flexDirection: "row",
  },

  DividerView: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 3,
    marginHorizontal: 10,
  },

  AskButtonStyle: {
    width: deviceWidth * 0.14,
    height: deviceHeight * 0.04,
    backgroundColor: COLOR_LIGHT_PRIMARY,
    borderRadius: 10,
    right: 10,
    justifyContent: "center",
    marginTop: Platform.OS == "ios" ? 7 : 12,
  },

  QuestionStyle: {
    width: "90%",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Platform.OS === "ios" ? "#fff" : null,
    borderColor: "#b8b8b8",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.9 : 0.8,
    shadowRadius: Platform.OS === "ios" ? 3 : 40,
    elevation: Platform.OS === "ios" ? 3 : 4,
    alignSelf: "center",
  },

  nameHeadlineStyle: {
    width: "101%",
    paddingVertical: 2,
    backgroundColor: COLOR_LIGHT_SECONDARY,
    borderRadius: 7,
    alignSelf: "center",
    justifyContent: "space-between",
    top: 0,
    flexDirection: "row",
  },

  AnswerButtonStyle: {
    width: "20%",
    paddingVertical: 2,
    backgroundColor: COLOR_LIGHT_PRIMARY,
    borderRadius: 5,
    alignSelf: "flex-end",
    bottom: 5,
    right: 5,
    justifyContent: "center",
  },

  AnswerButtonStyle1: {
    width: "20%",
    paddingVertical: 2,
    backgroundColor: COLOR_LIGHT_SECONDARY,
    borderRadius: 5,
    alignSelf: "flex-end",
    bottom: 5,
    right: 5,
    justifyContent: "center",
  },

  textStyle: {
    color: "black",
    fontWeight: "400",
    textAlign: "center",
    fontSize: 14,
  },

  AskStyle: {
    color: "black",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16,
  },

  itemnameStyle: {
    marginLeft: 10,
    marginTop: 2,
  },

  postTimeStyle: {
    fontSize: 10,
    marginTop: 3,
    marginRight: 5,
    color: "white",
  },

  QueryStyle: {
    padding: 10,
    fontSize: 14,
  },

  ImageStyle: {
    borderRadius: 10,
    height: deviceHeight * 0.14,
    aspectRatio: 1,
    alignSelf: "center",
  },
});
