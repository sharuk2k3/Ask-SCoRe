import React, {Component} from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {MEDIUM_API} from "../../config/config";

class MediumActivity extends Component {
  state = {
    mdata: [],
  };

  FetchDataFromRssFeed() {
    const {mdata} = this.state;
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        var Obj = JSON.parse(request.responseText);
        this.setState({mdata: Obj.items});
      }
    };
    request.open("GET", MEDIUM_API, true);
    request.send();
  }

  componentDidMount() {
    this.FetchDataFromRssFeed();
  }

  render() {
    const {mdata} = this.state;
    return (
      <SafeAreaView style={styles.SafeAreaStyle}>
        <View>
          <View style={styles.ViewStyle} />
          <FlatList
            data={mdata}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => Linking.openURL(item.guid)}>
                    <View style={styles.ViewStyle1}>
                      <View style={styles.ViewStyle5}>
                        <Text style={styles.TextStyle}>{item.title}</Text>
                        <View style={styles.DividerView} />
                        <Text style={styles.TextStyle1}>{item.author}</Text>
                        <Text style={styles.TextStyle1}>{item.pubDate}</Text>
                      </View>
                      <View style={styles.ViewStyle2}>
                        <View style={styles.ViewStyle3}>
                          <View style={styles.ViewStyle4} />
                          <Image
                            source={{uri: item.thumbnail}}
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

export default MediumActivity;
