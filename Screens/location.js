import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
export default class Location extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.currentlocation}>
          <Image
            style={styles.currentlocationImg}
            source={require("./../Screens/assets/location.png")}
          />
          <View style={styles.currentlocationText}>
            <Text
              style={{
                color: "#ED3237",
                fontSize: 18,
              }}
            >
              Your Current Loction
            </Text>
            <Text style={{ fontSize: 10, color: "#373435" }}>
              49A, VIP RD, Zirakpur, Punjab 12345
            </Text>
          </View>
        </View>
        <MapView
          style={{ flex: 1, height: 300 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* <Marker
            coordinate={{ latitude: 25.39755, longitude: 68.364841 }}
            title="Saylani Zonal Office"
          /> */}
        </MapView>

        <View style={styles.secondcontainer}>
          <View style={styles.circleView}>
            <View>
              <View style={styles.circle}>
                <Image
                  style={styles.circleImg}
                  source={require("./../Screens/assets/location.png")}
                />
              </View>
              <Text style={{ color: "white" }}>Pick Loction</Text>
            </View>

            <View>
              <View style={styles.circle}>
                <Image
                  style={styles.circleImg}
                  source={require("./../Screens/assets/location.png")}
                />
              </View>
              <Text style={{ color: "white" }}>Drop Loction</Text>
            </View>
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
  },
  currentlocation: {
    borderRadius: 40,
    width: "72%",
    height: 90,
    backgroundColor: "#FEFEFE",
    elevation: 2,
    opacity: 0.8,
    position: "absolute",
    top: 170,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  secondcontainer: {
    backgroundColor: "#ED3237",
    width: "92%",
    height: 118,
    opacity: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignSelf: "center",
  },
  circleView: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 40,
  },
  circle: {
    backgroundColor: "white",
    borderRadius: 70,
    width: 100,
    height: 100,
    alignItems: "center",
    elevation: 2,
    justifyContent: "center",
  },
  circleImg: {
    width: 40,
    height: 55,
  },
  currentlocationImg: {
    width: 30,
    height: 40,
    top: 20,
    left: 30,
  },
  currentlocationText: {
    justifyContent: "center",
    alignSelf: "center",
    bottom: 30,
    left: 20,
  },
});
