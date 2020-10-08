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
export default class bookedDetails extends React.Component {
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

        <View style={styles.profileView}>
          <View style={{ top: 40, left: 25 }}>
            <Text>VDETA SINGH</Text>
            <Text>DL Id:- 1234567891</Text>
          </View>

          <View style={{ alignSelf: "flex-end", bottom: 10, right: 25 }}>
            <Image
              style={styles.profileImg}
              source={require("./../Screens/assets/profile.jpg")}
            />
            <View style={{ width: "75%", height: 45, marginHorizontal: 20 }}>
              <TouchableOpacity style={styles.profileBtn}>
                <Text style={styles.bike}>Bike</Text>
                <Text style={styles.confrimbtnText}>HR 22 8 9570</Text>
              </TouchableOpacity>
            </View>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            bottom: 480,
          }}
        >
          <View>
            <Image
              // style={styles.profileImg}
              source={require("./../Screens/assets/backicon.png")}
            />
            <Text style={{ color: "gray", right: 15 }}>Edit Ride</Text>
          </View>

          <View>
            <Image
              // style={styles.profileImg}
              source={require("./../Screens/assets/backicon.png")}
            />
            <Text style={{ color: "gray", right: 15 }}>Share Location</Text>
          </View>

          <View>
            <Image
              // style={styles.profileImg}
              source={require("./../Screens/assets/backicon.png")}
            />
            <Text style={{ color: "gray", right: 15 }}>Contact</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.confrimBtn}>
          <Text style={styles.confrimbtnText}>Confirm Pickndrop</Text>
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
    top: 45,
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
  profileBtn: {
    backgroundColor: "#ED3237",
    width: "55%",
    height: 30,
    opacity: 0.8,
    position: "absolute",
    borderRadius: 30,
    top: 5,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    elevation: 10,
  },
  confrimBtn: {
    backgroundColor: "#ED3237",
    width: "55%",
    height: 45,
    opacity: 0.7,
    position: "absolute",
    bottom: 55,
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
});
