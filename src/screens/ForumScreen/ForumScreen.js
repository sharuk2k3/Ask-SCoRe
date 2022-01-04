import React from "react";
import {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";
import {firebase} from "../../config/config.js";
import {LOGO} from "../../config/styles.js";
import styles from "./styles";

class ForumScreen extends Component {
  state = {
    dialogvisible: false,
    forumtext: "",
    roomArray: [],
    isAdmin: null,
    isSelected: false,
  };
  componentDidMount() {
    const {roomArray} = this.state;
    const userID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref()
      .on("value", snapshot => {
        newroomArray = [];
        snapshot.forEach(element => {
          newroomArray.push(element.key);
          this.setState({roomArray: newroomArray});
        });
      });
    firebase
      .firestore()
      .collection("users")
      .doc(userID)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({isAdmin: doc.data().adminRights});
        }
      });
  }

  render() {
    const {roomArray, isAdmin, isSelected} = this.state;
    return (
      <SafeAreaView>
        <View>
          <View style={styles.ViewStyle}>
            <View style={styles.HeaderStyle1}>
              <Image source={LOGO} style={styles.ImageView} />
              <Text style={styles.HeaderStyle}>Forums</Text>
              {isAdmin ? (
                <TouchableOpacity
                  style={styles.AskButtonStyle}
                  onPress={() => {
                    this.props.navigation.navigate("AddChat");
                  }}>
                  <Text style={styles.TextStyle2}>+</Text>
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.DividerView} />
            <View style={styles.DividerView} />
          </View>
          <FlatList
            data={roomArray}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onLongPress={() => {
                      this.setState({isSelected: true});
                      isAdmin
                        ? isSelected
                          ? Alert.alert("DELETE!", "Are you Sure?", [
                              {
                                text: "Cancel",
                                onPress: () => null,
                                style: "cancel",
                              },
                              {
                                text: "Delete",
                                onPress: () => {
                                  firebase
                                    .database()
                                    .ref(item)
                                    .remove()
                                    .then(() => {
                                      alert("Deleted");
                                    })
                                    .catch(error => {
                                      alert(error);
                                    });
                                },
                              },
                            ])
                          : null
                        : null;
                    }}
                    onPress={() =>
                      this.props.navigation.push("Chat", {
                        data: item,
                      })
                    }>
                    <View>
                      <View style={styles.ViewStyle1}>
                        <Image source={LOGO} style={styles.ImageView1} />
                        <Text style={styles.TextStyle3}>{item}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.DividerView1} />
                </View>
              );
            }}
            keyExtractor={(item, index) => "key" + index}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ForumScreen;
