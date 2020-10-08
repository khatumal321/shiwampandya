import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
export default class AddressDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.addressView}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Surname"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Address"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Landmark"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />

          <TextInput
            style={styles.textInput}
            placeholder="City & Zip Code"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />
          <View style={{ width: "75%", height: 45, alignSelf: "center" }}>
            <TouchableOpacity style={styles.addressBtn}>
              <Text style={styles.confrimbtnText}>Do</Text>
              <Image
                style={styles.confrimbtnTextImg}
                source={require("./../Screens/assets/backicon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={styles.confrimbtnTextImg}
          source={require("./../Screens/assets/backicon.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  addressView: {
    width: "78%",
    height: 380,
    alignSelf: "center",
  },
  addressBtn: {
    backgroundColor: "#ED3237",

    opacity: 0.7,
    // position: "absolute",
    top: 70,

    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    elevation: 10,
  },
  confrimBtn: {
    backgroundColor: "#ED3237",
    width: "55%",
    height: 45,
    opacity: 0.7,
    position: "absolute",
    bottom: 30,
    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    elevation: 10,
  },
  confrimbtnText: {
    fontSize: 17,
    alignSelf: "center",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "white",
    borderBottomColor: "#ED3237",
    borderBottomWidth: 3,
    fontSize: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    top: 50,
  },
  confrimbtnTextImg: {
    left: 30,
    
  },
});
