import React from "react";
import {firebase} from "../../config/config";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {withNavigation} from "react-navigation";
import {LOGO} from "../../config/styles.js";
import styles from "./styles";

class HomeScreen extends React.Component {
  state = {queryDetail: []};
  componentDidMount() {
    const {queryDetail} = this.state;
    firebase
      .firestore()
      .collection("queries")
      .orderBy("postDateTime", "desc")
      .onSnapshot(querySnapshot => {
        var newEntity = [];
        var queryArray = [];
        querySnapshot.forEach(doc => {
          qData = {
            uid: doc.data().id,
            queryInput: doc.data().queryInput,
            postTime: doc.data().postTime,
            id: doc.id,
            postdDteTime: doc.data().postDateTime,
            answerPresent: doc.data().answerPresent,
            queryImage: doc.data().queryImage,
          };
          queryArray.push(qData);
        });

        queryArray.forEach(query => {
          firebase
            .firestore()
            .collection("users")
            .doc(query.uid)
            .get()
            .then(userObject => {
              data = {
                fullName: userObject.data().fullName,
                queryInput: query.queryInput,
                id: query.id,
                postTime: query.postTime,
                postDateTime: query.postDateTime,
                answerPresent: query.answerPresent,
                queryImage: query.queryImage,
              };
              newEntity.push(data);
              this.setState({queryDetail: newEntity});
            });
        });
      });
  }

  render() {
    const {queryDetail} = this.state;
    return (
      <SafeAreaView>
        <View>
          <View style={{marginBottom: 15}}>
            <View style={styles.HeaderStyle1}>
              <Image source={LOGO} style={styles.ImageView} />
              <Text style={styles.HeaderStyle}>Community</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.push("Question")}
                style={styles.AskButtonStyle}>
                <Text style={styles.AskStyle}>ASK</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.DividerView} />
            <View style={styles.DividerView} />
          </View>

          <FlatList
            data={queryDetail}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.push("Answer", {
                      data: item.id,
                      qData: item.queryInput,
                    })
                  }>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.QuestionStyle}>
                      <View style={styles.nameHeadlineStyle}>
                        <Text style={styles.itemnameStyle}>
                          {item.fullName}
                        </Text>
                        <Text style={styles.postTimeStyle}>
                          {item.postTime}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.QueryStyle}>{item.queryInput}</Text>
                        {item.queryImage ? (
                          <Image
                            source={{uri: item.queryImage}}
                            style={styles.ImageStyle}
                          />
                        ) : null}
                        {item.answerPresent ? (
                          <View style={styles.AnswerButtonStyle1}>
                            <Text style={styles.textStyle}>Answered</Text>
                          </View>
                        ) : (
                          <View style={styles.AnswerButtonStyle}>
                            <Text style={styles.textStyle}>Answer</Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => "key" + index}
            ListFooterComponent={<View style={{height: 170}} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
