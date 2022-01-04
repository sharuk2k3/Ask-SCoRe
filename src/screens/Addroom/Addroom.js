import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {firebase} from "../../config/config";
import moment from "moment";
import styles from "./styles.js";
import {LOGO} from "../../config/styles.js";

class Addroom extends Component {
  state = {
    roomName: "",
    profilePresent: null,
    adminEmail: null,
    adminRights: null,
    message: "",
  };

  componentDidMount() {
    const userID = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("users")
      .doc(userID)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({profilePresent: doc.data().isImagePresent});
        }
      });
  }

  sendAdminRights(adminEmail) {
    firebase
      .firestore()
      .collection("userInfo")
      .doc(adminEmail)
      .get()
      .then(doc => {
        this.setState({adminRights: doc.data().id});
        firebase
          .firestore()
          .collection("users")
          .doc(doc.data().id)
          .update({
            adminRights: true,
          })
          .then(() => {
            alert("Administrator Rights Sent");
          })
          .catch(error => {
            alert(error);
          });
      });
  }

  createRoom(roomName) {
    const {message, profilePresent} = this.state;
    var timeDate = moment();
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(doc => {
        firebase
          .database()
          .ref(roomName)
          .push({
            name: doc.data().fullName,
            message,
            creation: new Date().toUTCString(),
            messageTime: timeDate.format("lll"),
            imageURL: profilePresent ? doc.data().downloadURL : "",
          })
          .then(data => {
            this.setState({roomName: "", message: ""});
            this.props.navigation.navigate("Forum");
          })
          .catch(error => {
            alert(error);
          });
      });
  }
  render() {
    const {roomName, message} = this.state;
    return (
      <SafeAreaView style={styles.SafeAreaViewStyle}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.SafeAreaViewStyle}>
            <View style={{marginBottom: 5}}>
              <View style={styles.HeaderStyle1}>
                <Image source={LOGO} style={styles.ImageView} />
                <Text style={styles.HeaderStyle}>Add room</Text>
                <TouchableOpacity
                  style={styles.AskButtonStyle}
                  onPress={() => this.props.navigation.navigate("Forum")}>
                  <Text style={styles.TextStyle}>BACK</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.DividerView} />
              <View style={styles.DividerView} />
            </View>
            <View style={styles.ViewStyle}>
              <Text style={styles.TextStyle1}>Enter the Room Name Here</Text>
              {this.state.roomName.length === 0 ? (
                <View>
                  <View style={styles.ViewStyle1}>
                    <TextInput
                      style={styles.TextStyle2}
                      title="CREATE A NEW CHAT ROOM"
                      placeholder="ROOM NAME"
                      value={this.state.roomName}
                      onChangeText={roomName => this.setState({roomName})}
                    />
                  </View>
                  <View style={styles.ViewStyle2}>
                    <TextInput
                      style={{}}
                      title="CREATE A NEW CHAT ROOM"
                      value={this.state.message}
                      onChangeText={message => this.setState({message})}
                      placeholder="Enter room description"
                      multiline
                    />
                  </View>
                  <TouchableOpacity
                    disabled={roomName.length === 0}
                    style={styles.TouchableStyle}
                    onPress={() => this.createRoom(this.state.roomName)}>
                    <Text style={{alignSelf: "center", fontSize: 20}}>
                      CREATE
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <View style={styles.ViewStyle3}>
                    <TextInput
                      style={styles.TextStyle2}
                      title="CREATE A NEW CHAT ROOM"
                      placeholder="ROOM NAME"
                      value={this.state.roomName}
                      onChangeText={roomName => this.setState({roomName})}
                    />
                  </View>
                  {this.state.message.length === 0 ? (
                    <View style={styles.ViewStyle2}>
                      <TextInput
                        style={{}}
                        title="CREATE A NEW CHAT ROOM"
                        placeholder="Enter room description"
                        value={this.state.message}
                        onChangeText={message => this.setState({message})}
                        multiline
                      />
                    </View>
                  ) : (
                    <View style={styles.ViewStyle4}>
                      <TextInput
                        style={{}}
                        title="CREATE A NEW CHAT ROOM"
                        placeholder="Enter room description"
                        value={this.state.message}
                        onChangeText={message => this.setState({message})}
                        multiline
                      />
                    </View>
                  )}
                  <TouchableOpacity
                    disabled={roomName.length === 0}
                    style={styles.ViewStyle5}
                    onPress={() => this.createRoom(this.state.roomName)}>
                    <Text style={styles.TextStyle4}>CREATE</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.ViewStyle7}>
          <Text style={styles.TextStyle3}>Send User Admin Rights</Text>
          <View style={styles.ViewStyle8}>
            <View style={styles.ViewStyle6}>
              <TextInput
                style={styles.TextInputStyle1}
                value={this.state.adminEmail}
                autoCapitalize="none"
                placeholder="Enter Email here"
                onChangeText={adminEmail => this.setState({adminEmail})}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.AskButtonStyle1}
                onPress={() => this.sendAdminRights(this.state.adminEmail)}
                value={this.state.adminEmail}>
                <Text style={styles.TextStyle}>SEND</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Addroom;
