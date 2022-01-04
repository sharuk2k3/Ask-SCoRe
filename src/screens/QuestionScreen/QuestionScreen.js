import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Linking,
} from "react-native";
import {firebase} from "../../config/config";
import {LOGO} from "../../config/styles.js";
import styles from "./styles";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import ImagePicker from "react-native-image-crop-picker";
import * as Progress from "react-native-progress";

class QuestionScreen extends React.Component {
  state = {
    queryInput: "",
    setImage: null,
    setDisplayImage: null,
    transferred: 0,
    postNumber: null,
  };

  getPostNumber() {
    const {postNumber} = this.state;
    const Useruid = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("users")
      .doc(Useruid)
      .get()
      .then(doc => {
        this.setState({postNumber: doc.data().postNumber});
      });
  }

  takePhotoFromLib = () => {
    const {setImage} = this.state;
    this.setState({transferred: 0});
    ImagePicker.openPicker({
      cropping: false,
    })
      .then(image => {
        const imageUri = image.path;
        this.setState({setImage: imageUri});
      })
      .catch("Unknown Error Occured");
  };

  uploadImage = async () => {
    const {setImage, postNumber} = this.state;
    if (setImage == null) {
      return;
    }
    const uri = setImage;
    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/queries/${postNumber}/${Math.random().toString(36)}`;
    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskCompleted = () => {
      const {transferred} = this.state;
      task.snapshot.ref
        .getDownloadURL()
        .then(snapshot => {
          this.setState({setDisplayImage: snapshot});
        })
        .catch(error => {
          alert(error);
        });
    };

    const taskError = snapshot => {
      alert("Error Occured");
    };

    task.on(
      "state_changed",
      snapshot => {
        const {transferred} = this.state;
        this.setState({
          transferred:
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        });
      },
      taskError,
      taskCompleted,
    );
  };

  showAlert = () => {
    const {setImage, setDisplayImage} = this.state;
    Alert.alert("Alert", "", [
      {text: "Show", onPress: () => Linking.openURL(setDisplayImage)},
      {
        text: "Remove",
        onPress: () => {
          this.setState({
            setDisplayImage: null,
            setImage: null,
          });
        },
      },
      {text: "Cancel", onPress: () => null, style: "cancel"},
    ]);
  };

  addQuery = () => {
    const {setDisplayImage, setImage, queryInput, postNumber} = this.state;
    var timeDate = moment();
    const Useruid = firebase.auth().currentUser.uid;
    if (queryInput && queryInput.length > 0) {
      firebase
        .firestore()
        .collection("queries")
        .add({
          id: Useruid,
          queryInput: queryInput,
          postDateTime: firebase.firestore.FieldValue.serverTimestamp(),
          postTime: timeDate.format("lll"),
          answerPresent: false,
          queryImage: setDisplayImage,
          postNumber: postNumber,
        })
        .then(docRef => {
          this.setState({
            queryInput: "",
            setDisplayImage: null,
            setImage: null,
            postNumber: this.state.postNumber + 1,
          });
          firebase
            .firestore()
            .collection("users")
            .doc(Useruid)
            .update({
              postNumber: postNumber + 1,
            });
        })
        .catch(error => {
          alert("Error occured while adding your Query");
        });
    } else {
      alert("Please Enter Valid Query");
    }
  };

  componentDidMount() {
    this.getPostNumber();
  }

  render() {
    const {setDisplayImage, setImage, transferred} = this.state;
    return (
      <SafeAreaView>
        <View>
          <View style={{marginBottom: 15}}>
            <View style={styles.HeaderStyle1}>
              <Image source={LOGO} style={styles.ImageView} />
              <Text style={styles.HeaderStyle}>Query</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Home")}
                style={styles.AskButtonStyle}>
                <Text style={styles.DoneStyle}>DONE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.DividerView} />
            <View style={styles.DividerView} />
          </View>
          <View style={{marginTop: 15}}>
            <View style={styles.QuestionStyle}>
              <View style={styles.nameHeadlineStyle}>
                <Text style={{marginLeft: 10}}>Enter your Question here</Text>
              </View>
              <View style={styles.ViewStyle}>
                <TextInput
                  style={styles.TextInputStyle}
                  multiline
                  placeholderTextColor={"gray"}
                  value={this.state.queryInput}
                  placeholder="Ask your query, by addressing your problem clearly!"
                  onChangeText={queryInput => this.setState({queryInput})}
                />
                {setDisplayImage ? (
                  <TouchableOpacity onPress={this.showAlert}>
                    <Image
                      source={{uri: setDisplayImage}}
                      style={styles.ImageStyle}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </View>
          <View style={styles.AskButtonStyle2}>
            {setDisplayImage ? null : setImage ? (
              <Progress.Bar
                progress={transferred}
                width={230}
                style={styles.ProgressBarStyle}
              />
            ) : null}
            {setDisplayImage ? null : setImage ? (
              <Icon
                style={styles.IconStyle}
                size={30}
                name={"cloud-upload-outline"}
                onPress={this.uploadImage}
              />
            ) : (
              <Icon
                style={styles.IconStyle}
                size={30}
                name={"image-outline"}
                onPress={this.takePhotoFromLib}
              />
            )}

            <TouchableOpacity
              onPress={this.addQuery}
              style={styles.AskButtonStyle1}>
              <Text style={styles.PostTextStyle}>POST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default QuestionScreen;
