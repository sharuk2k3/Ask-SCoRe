import React from "react";
import {Component} from "react";
import {firebase} from "../../config/config";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {Spinner} from "../common";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

class SignupForm extends Component {
  state = {
    email: "",
    password: "",
    fullName: "",
    repassword: "",
    error: "",
    loading: false,
  };

  onButtonPress() {
    const {email, password, repassword, fullName} = this.state;
    this.setState({error: "", loading: true});

    if (password !== repassword) {
      alert("Password don't Match!");
      this.setState({loading: false});
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().signOut();
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            alert("Verification Email Sent. Please Verify your Email");
          });
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
          isImagePresent: false,
          postNumber: 0,
          adminRights: false,
        };
        const userRef = firebase.firestore().collection("users");
        const userInf = firebase.firestore().collection("userInfo");
        userRef
          .doc(uid)
          .set(data)
          .then(this.onSigninSuccess.bind(this))
          .catch(error => {
            alert(error);
          });

        userInf
          .doc(email)
          .set({
            id: uid,
          })
          .then(() => {
            null;
          })
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
        this.setState({error: "Signin Error", loading: false});
      });
  }
  onSigninSuccess() {
    this.setState({email: "", password: "", loading: false, error: ""});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.TextStyle4}>SIGNUP</Text>
      </TouchableOpacity>
    );
  }

  onSigninFail() {
    this.setState({error: "Signin Error", loading: false});
  }

  render() {
    return (
      <View>
        <View style={styles.ViewStyle}>
          <View>
            <View style={styles.ViewStyle1}>
              <Icon style={styles.IconStyle} size={20} name={"mail"} />
              <TextInput
                style={styles.TextStyle1}
                placeholder="example@gmail.com"
                placeholderTextColor={"gray"}
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={styles.ViewStyle2}>
              <Icon style={styles.IconStyle} size={20} name={"person"} />
              <TextInput
                style={styles.TextStyle2}
                placeholder="Full Name"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                value={this.state.fullName}
                onChangeText={fullName => this.setState({fullName})}
              />
            </View>
            <View style={styles.ViewStyle2}>
              <Icon style={styles.IconStyle} size={20} name={"eye-off"} />
              <TextInput
                style={styles.TextStyle2}
                placeholder="Password"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={styles.ViewStyle2}>
              <Icon style={styles.IconStyle} size={20} name={"eye-off"} />
              <TextInput
                style={styles.TextStyle2}
                placeholder="Re-Password"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                secureTextEntry
                value={this.state.repassword}
                onChangeText={repassword => this.setState({repassword})}
              />
            </View>
          </View>
          <View style={styles.ButtonViewStyle}>{this.renderButton()}</View>
        </View>
      </View>
    );
  }
}

export default SignupForm;
