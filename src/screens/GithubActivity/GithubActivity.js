import axios from "axios";
import React, {Component} from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles";
import {GITHUB_API} from "../../config/config";

class GithubActivity extends Component {
  state = {githubData: []};

  componentDidMount() {
    const {githubData} = this.state;
    axios
      .get(GITHUB_API)
      .then(response => {
        this.setState({githubData: response.data});
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    const {githubData} = this.state;
    return (
      <SafeAreaView style={styles.SafeAreaStyle}>
        <View>
          <View style={styles.ViewStyle} />
          <FlatList
            data={githubData}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(item.html_url)}>
                    <View style={styles.ViewStyle1}>
                      <View style={styles.ViewStyle5}>
                        <Text style={styles.TextStyle}>{item.name}</Text>
                        <View style={styles.DividerView} />
                        <Text style={styles.TextStyle1}>
                          {item.description}
                        </Text>
                        <Text style={styles.TextStyle2}>{item.language}</Text>
                      </View>
                      <View style={styles.ViewStyle2}>
                        <View style={styles.ViewStyle3}>
                          <Image
                            source={{uri: item.owner.avatar_url}}
                            style={styles.ImageStyle}
                          />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => "key" + index}
            ListFooterComponent={<View style={{height: 50}} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default GithubActivity;
