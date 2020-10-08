import { StyleSheet } from "react-native";
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "center",
  },
  tinyLogo: {
    width: 130,
    height: 35,
  },
  _splash_view: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  _pic_icon: {
    height: 30,
    width: 100,
    marginBottom: 50,
  },
  _top_curve: {
    height: 180,
    width: "110%",
    backgroundColor: "white",
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
    marginTop: -40,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  _heading_tab: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
  _tab_text: {
    fontWeight: "bold",
    color: "white",
    borderBottomWidth: 2,
    width: "100%",
    flex: 1,
    textAlign: "center",
    paddingBottom: 5,
  },
  _input_filed: {
    borderBottomWidth: 0.1,
    borderColor: "white",
    color: "white",
    fontSize: 13,
  },
  _input_row: {
    marginTop: 20,
  },
  _lable: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  _checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  _agree_row: {
    flexDirection: "row",
    width: "85%",
    alignSelf: "center",
    paddingVertical: 20,
    marginTop:20
  },
  _signup: {
    backgroundColor: "white",
    width: 120,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 30,
  },
  _btn_text: {
    color: "#ff0000",
    fontWeight: "bold",
  },
  _bottom_text: {
    color: "white",
    textAlign: "center",
  },
});

export default styles;
