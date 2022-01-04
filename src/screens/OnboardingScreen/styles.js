import {StyleSheet} from "react-native";
import {COLOR_LIGHT_PRIMARY} from "../../config/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonView: {
    marginHorizontal: 10,
    backgroundColor: COLOR_LIGHT_PRIMARY,
    width: 70,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
  },

  textView: {
    fontSize: 16,
    textAlign: "center",
  },

  titleView: {
    fontSize: 45,
    fontWeight: "200",
    marginBottom: 20,
  },

  subtitleView: {
    marginBottom: 50,
    letterSpacing: 2,
  },

  ImageView1: {
    width: 350,
    height: 200,
  },

  ImageView2: {
    width: 300,
    height: 276,
  },

  ImageView3: {
    width: 300,
    height: 180,
  },

  ImageView4: {
    width: 300,
    height: 250,
  },
});
