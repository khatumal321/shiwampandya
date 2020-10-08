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
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
export default class ManageAddress extends React.Component {
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
        <StatusBar style="auto" />
        <View style={styles.addressView}>
          <TextInput
            style={styles.textInput}
            placeholder="House Number & Street"
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
              <Text style={styles.confrimbtnText}>Manage Addresses</Text>
              <Image
                style={styles.confrimbtnTextImg}
                source={require("./../Screens/assets/back.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <MapView
          style={{ flex: 1, height: 300 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          annotations={markers}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 25.39755, longitude: 68.364841 }}
            title="Saylani Zonal Office"
          />
        </MapView>

        <TouchableOpacity style={styles.confrimBtn}>
          <Text style={styles.confrimbtnText}>Confirm Go</Text>
        </TouchableOpacity>
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
    // width: 25,
    // height: 23,
    left: 30,
  },
});
