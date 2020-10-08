import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

// Set the locale once at the beginning of your app.
// When a value is missing from a language it'll fallback to another language with the key present.
class LoginSignup extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: true,
      number: "+91-98139337069",
      Password: "1234567",
      checked: true,
    };
  }
  render() {
    let { activeTab, number, Password, checked } = this.state;
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles._top_curve}>
          <Image
            style={styles.tinyLogo}
            source={require("./../../../assets/Group.png")}
          />
        </View>
        {/*body section*/}
        <View style={styles._heading_tab}>
          <Text
            style={[
              styles._tab_text,
              activeTab ? { borderColor: "white" } : { borderColor: "black" },
            ]}
            onPress={() => this.setState({ activeTab: true })}
          >
            Login
          </Text>

          <Text
            style={[
              styles._tab_text,
              activeTab === false
                ? { borderColor: "white" }
                : { borderColor: "black" },
            ]}
            onPress={() => this.setState({ activeTab: false })}
          >
            Signup
          </Text>
        </View>

        {/* FORM */}
        <Content style={{ width: 300 }}>
          <Form>
            <Item stackedLabel style={styles._input_row}>
              <Label style={styles._lable}>Phone Number</Label>
              <Input
                style={styles._input_filed}
                value={number}
                onChangeText={(e) => this.setState({ number: e })}
              />
            </Item>
            <Item stackedLabel style={styles._input_row}>
              <Label style={styles._lable}>Password</Label>
              <Input
                style={[
                  styles._input_filed,
                  { fontSize: 45, paddingBottom: 0 },
                ]}
                value={Password}
                secureTextEntry={true}
                onChangeText={(e) => this.setState({ Password: e })}
              />
            </Item>
            <View style={styles._agree_row}>
              <TouchableOpacity
                style={styles._checkbox}
                onPress={() => this.setState({ checked: !checked })}
              >
                {checked ? (
                  <Ionicons name="md-checkmark" size={16} color="white" />
                ) : null}
              </TouchableOpacity>
              <Text
                style={{ color: "white", paddingLeft: 10, fontWeight: "bold" }}
              >
                Agree
              </Text>
            </View>
            <TouchableOpacity style={styles._signup}>
              <Text style={styles._btn_text}>
                Signup
              </Text>
            </TouchableOpacity>
            <Text style={styles._bottom_text}>
              Forgot password
            </Text>
          </Form>
        </Content>
      </View>
    );
  }
}

export default LoginSignup;

// Set the key-value pairs for the different languages you want to support.
