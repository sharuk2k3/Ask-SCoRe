import React, {Component} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {firebase} from "../../config/config";
import {Spinner} from "../common";
import Icon from "react-native-vector-icons/Ionicons";
import DialogInput from "react-native-dialog-input";
import styles from "./styles";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
    isDialogVisible: false,
    inputText: "",
  };

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: "", loading: true});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (firebase.auth().currentUser.emailVerified) {
          this.onLoginSuccess.bind(this);
        } else {
          firebase.auth().signOut();
          alert("Email not Verified");
        }
      })
      .catch(error => {
        alert(error);
        this.setState({email: "", password: "", loading: false, error: ""});
      });
  }

  onLoginSuccess() {
    this.setState({email: "", password: "", loading: false, error: ""});
  }

  onLoginFail() {
    this.setState({error: "Authentication Error", loading: false});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.TextStyle4}>LOGIN</Text>
      </TouchableOpacity>
    );
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
                placeholder="Username"
                autoCapitalize="none"
                placeholderTextColor={"gray"}
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={styles.ViewStyle2}>
              <Icon style={styles.IconStyle} size={20} name={"eye-off"} />
              <TextInput
                style={styles.TextStyle2}
                placeholder="Password"
                placeholderTextColor={"gray"}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </View>

            <TouchableOpacity
              style={styles.TextStyle3}
              onPress={() => {
                this.setState({isDialogVisible: true});
              }}>
              <Text style={{color: "gray"}}>Forgot Password?</Text>
            </TouchableOpacity>

            <DialogInput
              isDialogVisible={this.state.isDialogVisible}
              title={"Enter Email"}
              message={"Enter email address to send password reset link"}
              hintInput={"email"}
              submitInput={inputText => {
                this.setState({inputText});
                firebase
                  .auth()
                  .sendPasswordResetEmail(inputText)
                  .then(() => {
                    alert("Reset Email Sent");
                    this.setState({isDialogVisible: false});
                  })
                  .catch(error => {
                    alert(error);
                  });
              }}
              closeDialog={() => {
                this.setState({isDialogVisible: false});
              }}
            />
          </View>
          <View style={styles.ButtonViewStyle}>{this.renderButton()}</View>
        </View>
      </View>
    );
  }
}

export default LoginForm;
