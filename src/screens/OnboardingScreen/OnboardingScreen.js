import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styles from "./styles";

const Dots = ({selected}) => {
  let backgroundColor = selected ? "#51AD28" : "#adadad";

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={styles.buttonView} {...props}>
    <Text style={styles.textView}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={styles.buttonView} {...props}>
    <Text style={styles.textView}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={styles.buttonView} {...props}>
    <Text style={styles.textView}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Start")}
      onDone={() => navigation.navigate("Start")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.ImageView1}
              source={require("../../../assets/OB1.png")}
            />
          ),
          title: <Text style={styles.titleView}>Community</Text>,
          subtitle: (
            <Text style={{marginBottom: 50, letterSpacing: 2}}>
              Support and Help Each Other
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.ImageView2}
              source={require("../../../assets/OB2.png")}
            />
          ),
          title: <Text style={styles.titleView}>Collaboration</Text>,
          subtitle: (
            <Text style={styles.subtitleView}>
              Collaborate and sync on Projects
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.ImageView3}
              source={require("../../../assets/OB3.png")}
            />
          ),
          title: <Text style={styles.titleView}>Communicate</Text>,
          subtitle: (
            <Text style={styles.subtitleView}>
              Communication is what makes team strong
            </Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={styles.ImageView4}
              source={require("../../../assets/OB4.png")}
            />
          ),
          title: <Text style={styles.titleView}>Queries</Text>,
          subtitle: (
            <Text style={styles.subtitleView}>Get your queries Resolved</Text>
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;
