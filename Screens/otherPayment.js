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
export default class OtherPayment extends React.Component {
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
            <View style={styles.addpaymentBtn}>
              <MaterialIcons name="payment" size={40} color="#ED3237" />
              <Text style={{ color: "#ED3237" }}>Add payment method</Text>
            </View>

            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              // onChangeText={(text) => onChangeText(text)}
              // value={value}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Mail Id"
              // onChangeText={(text) => onChangeText(text)}
              // value={value}
            />
          </View>

          <View style={{ marginTop: 70 }}>
            <View style={styles.textInputView}>
              <View style={styles.textInputBtn}>
                <View style={{ right: 80 }}>
                  <MaterialIcons name="payment" size={45} color="#ED3237" />
                </View>
                <TextInput
                keyboardType="number-pad"
                  placeholder="Card Number"
                  //   keyboardType="numbers-and-punctuation"
                  // onChangeText={(text) => onChangeText(text)}
                  // value={value}
                />
              </View>

              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <View style={styles.textInputBtn2}>
                  <View>
                    <MaterialCommunityIcons
                      name="calendar-text"
                      size={45}
                      color="#ED3237"
                    />
                  </View>
                  <TextInput
                    style={{ textAlign: "right" }}
                    placeholder="23/15"
                    keyboardType="numeric"
                    // onChangeText={(text) => onChangeText(text)}
                    // value={value}
                  />
                </View>

                <View style={styles.textInputBtn3}>
                  <View>
                    <MaterialIcons
                      name="lock-outline"
                      size={45}
                      color="#ED3237"
                    />
                  </View>
                  <TextInput
                    style={{ textAlign: "right" }}
                    placeholder="897"
                    keyboardType="numeric"
                    // onChangeText={(text) => onChangeText(text)}
                    // value={value}
                  />
                </View>
              </View>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#ED3237", fontSize: 17 }}>
                Remember Me
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 170 }}>
            <TouchableOpacity style={styles.payBtn}>
              <Text style={styles.confrimbtnText}>Pay $15.99</Text>
            </TouchableOpacity>
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
  payBtn: {
    backgroundColor: "#ED3237",
    width: "55%",
    height: 45,
    opacity: 0.9,
    // position: "absolute",
    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    elevation: 1,
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
    top: 150,
  },
  addpaymentBtn: {
    backgroundColor: "white",
    fontSize: 15,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    top: 130,
  },
  textInputView: {
    width: "78%",
    height: 250,
    alignSelf: "center",
  },
  textInputBtn: {
    backgroundColor: "white",
    borderColor: "#ED3237",
    borderWidth: 2,
    fontSize: 15,
    height: 60,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomWidth: 0,
    fontSize: 18,
    // textAlign: "left",
    flexDirection: "row",
    justifyContent: "center",
    top: 100,
  },

  textInputBtn2: {
    backgroundColor: "white",
    borderColor: "#ED3237",
    borderWidth: 2,
    fontSize: 15,
    width: 160,
    height: 60,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    fontSize: 18,
    flexDirection: "row",
    alignSelf: "center",
    top: 100,
  },

  textInputBtn3: {
    backgroundColor: "white",
    borderColor: "#ED3237",
    borderWidth: 2,
    fontSize: 15,
    width: 160,
    height: 60,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderLeftWidth: 0.6,
    fontSize: 18,
    flexDirection: "row",
    alignSelf: "center",
    top: 100,
  },
});
