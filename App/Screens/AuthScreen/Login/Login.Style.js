import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
  },
  header: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 40,
    color: COLORS.primary,
    fontFamily: "RobotoCondensed-Bold",
  },
  content: {
    marginVertical: 30,
  },
  textInputEmail: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
  },
  password: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputPassword: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
    flex: 1,
  },
  displayPassword: {
    position: "absolute",
    right: 20,
  },
  forgetPassword: {
    fontFamily: "Roboto-BoldItalic",
    fontSize: 18,
    alignSelf: "flex-end",
    color: COLORS.primary,
  },
  btnLogin: {
    padding: 20,
    backgroundColor: COLORS.primary,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnLogin: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.white,
    textAlign: "center",
    fontSize: 25,
  },
  btnRegister: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textBtnRegister: {
    fontFamily: "RobotoCondensed-Bold",
    color: COLORS.black,
    textAlign: "center",
    fontSize: 19,
  },
  alertLogin: {
    color: "red",
    fontSize: 17,
  },
});

export default styles;
