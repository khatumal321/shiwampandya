import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import i18n from "i18n-js";
import styles from "./styles";
import { en, fr, ht } from "./../../lang/index";

// Set the locale once at the beginning of your app.
// When a value is missing from a language it'll fallback to another language with the key present.
class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={styles._splash_view}>
          <Image
            style={styles.tinyLogo}
            source={require("./../../../assets/Group.png")}
          />

          <Image
            source={require("./../../../assets/PickNDrop.png")}
            style={styles._pic_icon}
          />
        </View>
      </View>
    );
  }
}

export default GetStarted;

// Set the key-value pairs for the different languages you want to support.
