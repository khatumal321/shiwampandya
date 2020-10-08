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
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default class Uploadpic extends React.Component {
  render() {
    var markers = [
      {
        latitude: 45.65,
        longitude: -78.9,
        title: "Foo Place",
        subtitle: "1234 Foo Drive",
      },
    ];
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar style="auto" />
          <View style={styles.paymentView}>
            <View style={styles.JpglogoView}>
              <Image
                style={styles.JpglogoImg}
                source={require("./../Screens/assets/jpgLogo.png")}
              />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="ABC Pics of today Item"
              // onChangeText={(text) => onChangeText(text)}
              // value={value}
            />

            <TextInput
              style={styles.textInput}
              placeholder="EFG Pics of today Item"
              // onChangeText={(text) => onChangeText(text)}
              // value={value}
            />
          </View>
          <View style={styles.barView}>
            <View style={styles.barViewfill}>
              <Text style={styles.barText}>ABC Pics of today Item</Text>
            </View>
          </View>

          <View style={styles.barView}>
            <View style={styles.barViewfill2}>
              <Text style={styles.barText2}>G Pics of today Item</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 270,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <TouchableOpacity style={styles.uploadBtn}>
                <Text style={styles.uploadbtnText}>Upload</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.uploadBtn}>
                <Text style={styles.uploadbtnText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    // top: 100,
  },
  paymentView: {
    width: "78%",
    height: 230,
    alignSelf: "center",
  },

  uploadBtn: {
    backgroundColor: "#ED3237",
    width: 120,
    height: 35,
    opacity: 0.9,
    // position: "absolute",
    borderRadius: 30,
    flex: 1,
    marginTop: 120,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    elevation: 1,
  },
  uploadbtnText: {
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
    top: 150,
  },

  textInputView: {
    width: "78%",
    height: 250,
    alignSelf: "center",
  },
  barView: {
    width: "75%",
    height: 25,
    borderRadius: 20,
    marginVertical: 7,
    top: 300,
    backgroundColor: "#e6e7e9",
    alignSelf: "center",
  },
  barViewfill: {
    width: "45%",
    backgroundColor: "#ED3237",
    borderRadius: 20,
    height: 25,
    // marginRight: 250,
  },
  barViewfill2: {
    width: "60%",
    backgroundColor: "#ED3237",
    borderRadius: 20,
    height: 25,
    // marginRight: 250,
  },
  barText: {
    color: "#ED3237",
    textAlign: "right",
    marginHorizontal: -150,
    fontSize: 11,
    top: 4,
  },
  barText2: {
    color: "#ED3237",
    textAlign: "right",
    marginHorizontal: -110,
    fontSize: 11,
    top: 4,
  },
  JpglogoImg: {
    width: "39%",
    height: 150,
    alignSelf: "center",
    margin: 20,
    // borderColor: "green",
    // borderWidth: 3,
    top: 30,
    position: "absolute",
  },
  JpglogoView: {
    width: "100%",
    height: 250,
    alignSelf: "center",
    borderColor: "#aba9b7",
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 1,
    top: 135,
  },
});
