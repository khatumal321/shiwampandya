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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default class Payment extends React.Component {
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
          <Text style={styles.confrimbtnText}>Confirm Pickndrop</Text>
        </TouchableOpacity>

        <View style={styles.secondcontainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              top: 40,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="cash" size={40} color="#ED3237" />
              <Text style={{ color: "#ED3237" }}>Cash</Text>
            </View>
            <Image
              style={styles.confrimbtnTextImg}
              source={require("./../Screens/assets/backicon.png")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              top: 30,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="payment" size={40} color="#ED3237" />
              <Text style={{ color: "#ED3237" }}>Add payment method</Text>
            </View>
            <Image
              style={styles.confrimbtnTextImg}
              source={require("./../Screens/assets/backicon.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    top: 100,
  },
  profileView: {
    backgroundColor: "#f5f7f7",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    top: 100,
    width: "96%",
    height: 280,
    alignSelf: "center",
    // flexDirection: "row",
  },
  addressBtn: {
    backgroundColor: "#ED3237",

    opacity: 0.7,
    // position: "absolute",
    // top: 70,

    borderRadius: 30,
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    elevation: 10,
  },

  confrimBtn: {
    backgroundColor: "#ED3237",
    width: "55%",
    height: 45,
    opacity: 0.7,
    position: "absolute",
    bottom: 125,
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
    top: 50,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,

    // left: 30,
  },
  bike: {
    backgroundColor: "white",
    color: "#ED3237",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ED3237",
    borderRadius: 25,
    width: 50,
    padding: 5,
  },
  secondcontainer: {
    backgroundColor: "#f5f7f7",
    width: "96%",
    height: 280,
    opacity: 1,
    bottom: 20,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignSelf: "center",
  },
});
