import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BookedDetails from "./../shiwampandya/Screens/bookedDetails";
// import GetStarted from './Screens/GetStarted/GetStarted';
// import LoginSignup from './Screens/LoginSignup';
import AddressDetails from './Screens/addressDetails';
import Location from './Screens/location';
import OtherPayment from './Screens/otherPayment';


export default function App() {
  return (
    <View style={styles.container}>
    <OtherPayment />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
