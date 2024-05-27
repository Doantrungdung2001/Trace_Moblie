import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: 300,
  },
  nameFarm: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "RobotoCondensed-Bold",
  },
  emailFarm: {
    color: "blue",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  phoneFarm: {
    color: "blue",
    fontSize: 17,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  addressFarm: {
    color: COLORS.secondary,
    fontSize: 18,
    fontFamily: "regular",
    textAlign: "center",
  },
  backBtnContainer: {
    marginTop: 25,
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    textAlign: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    marginTop: 15,
  },
  linkButton: {
    margin: 20,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    alignItems: "center",
  },
  linkButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
