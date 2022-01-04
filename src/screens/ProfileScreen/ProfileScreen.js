import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import {firebase} from "../../config/config";
import ImagePicker from "react-native-image-crop-picker";
import styles from "./styles";
import {LOGO, NO_IMAGE} from "../../config/styles.js";
import * as Progress from "react-native-progress";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [interest, setInterest] = useState("");
  const [country, setCountry] = useState("");
  const [editfield, setEditfield] = useState(false);
  const [image, setImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [transferred, setTransferred] = useState(0);
  const [imageUpload, setImageUpload] = useState(true);
  const [progressUpload, setProgressUpload] = useState(true);
  const [profilePresent, setProfilePresent] = useState(null);

  const userID1 = firebase.auth().currentUser.uid;
  const ref = firebase.firestore().collection("users").doc(userID1);

  useEffect(() => {
    ref
      .get()
      .then(doc => {
        if (doc.exists) {
          setName(doc.data().fullName);
          setInterest(doc.data().interest);
          setCountry(doc.data().country);
          setOccupation(doc.data().occupation);
          setDisplayImage(doc.data().downloadURL);
          setProfilePresent(doc.data().isImagePresent);
        } else {
          alert("No Document Found");
        }
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  const uploadImage = async () => {
    setProgressUpload(false);
    if (image == null) {
      savePostData(displayImage);
      return;
    }
    const uri = image;
    const childPath = `post/${
      firebase.auth().currentUser.uid
    }/profile_picture.png`;

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskCompleted = () => {
      task.snapshot.ref
        .getDownloadURL()
        .then(snapshot => {
          savePostData(snapshot);
        })
        .catch(error => {
          alert("Please Upload all the Information below");
        });
    };

    const taskError = snapshot => {
      alert("Error Occured");
    };

    task.on(
      "state_changed",
      snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      },
      taskError,
      taskCompleted,
    );
  };

  const savePostData = downloadURL => {
    setEditfield(false);
    setDisplayImage(downloadURL);
    ref
      .update({
        country,
        occupation,
        interest,
        downloadURL,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
        isImagePresent: true,
      })
      .then(() => {
        alert("Updated Profile");
        setImageUpload(true);
        setProgressUpload(true);
        setTransferred(0);
      })
      .catch(error => {
        alert(error);
      });
  };

  const takePhotoFromLib = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
        setImageUpload(false);
      })
      .catch("Unknown Error Occured");
  };

  return (
    <SafeAreaView style={styles.SafeStyle}>
      <View style={{marginBottom: 20}}>
        <View style={{marginBottom: 15}}>
          <View style={styles.HeaderStyle1}>
            <Image source={LOGO} style={styles.ImageView1} />
            <Text style={styles.HeaderStyle}>Profile</Text>
            {editfield ? (
              <TouchableOpacity
                onPress={uploadImage}
                style={styles.AskButtonStyle}>
                <Text style={styles.EditDoneStyle}>DONE</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setEditfield(true)}
                style={styles.AskButtonStyle}>
                <Text style={styles.EditDoneStyle}>EDIT</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.DividerView} />
          <View style={styles.DividerView} />
        </View>
      </View>

      <ScrollView style={{height: "100%"}} bounces={false}>
        <View style={styles.ViewStyle}>
          <View style={{marginVertical: 10}}>
            <Image
              style={styles.ImageProfileStyle}
              source={profilePresent ? {uri: displayImage} : NO_IMAGE}
              resizeMode={"cover"}
            />

            {editfield ? (
              <View>
                {imageUpload ? (
                  <TouchableOpacity onPress={takePhotoFromLib}>
                    <Text style={styles.PickImageStyle}>Pick Image</Text>
                  </TouchableOpacity>
                ) : progressUpload ? (
                  <Text style={styles.PickImageStyle}>Uploading...</Text>
                ) : (
                  <Text style={styles.PickImageStyle}>In progress</Text>
                )}
                <Progress.Bar
                  progress={transferred}
                  width={180}
                  style={{alignSelf: "center"}}
                />
              </View>
            ) : null}
          </View>

          <View style={styles.container2}>
            <View style={styles.container4}>
              <Text style={styles.title1}>Full Name</Text>
              <View style={styles.line1} />
              <View style={styles.container3}>
                <View style={styles.ViewStyle2}>
                  <TextInput
                    style={{color: "black"}}
                    value={name}
                    editable={false}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.container4}>
              <Text style={styles.title1}>Email</Text>
              <View style={styles.line1} />
              <View style={styles.container3}>
                <View style={styles.ViewStyle2}>
                  <TextInput
                    style={{color: "black"}}
                    value={firebase.auth().currentUser.email}
                    editable={false}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <View style={styles.line} />

            <View style={styles.container4}>
              <Text style={styles.title1}>Occupation</Text>
              <View style={styles.line1} />
              <View style={styles.container3}>
                <View style={styles.ViewStyle2}>
                  <TextInput
                    style={{color: "black"}}
                    value={occupation}
                    editable={editfield}
                    onChangeText={text => setOccupation(text)}
                  />
                </View>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.container4}>
              <Text style={styles.title1}>Interest</Text>
              <View style={styles.line1} />
              <View style={styles.container3}>
                <View style={styles.ViewStyle2}>
                  <TextInput
                    style={{color: "black"}}
                    value={interest}
                    editable={editfield}
                    onChangeText={text => setInterest(text)}
                  />
                </View>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.container4}>
              <Text style={styles.title1}>Country</Text>
              <View style={styles.line1} />
              <View style={styles.container3}>
                <View style={styles.ViewStyle2}>
                  <TextInput
                    style={{color: "black"}}
                    value={country}
                    editable={editfield}
                    onChangeText={text => setCountry(text)}
                  />
                </View>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.LogoutButtonStyle}>
              <TouchableOpacity
                style={styles.LoginButtonView}
                onPress={() => firebase.auth().signOut()}>
                <Text style={styles.LoginButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
