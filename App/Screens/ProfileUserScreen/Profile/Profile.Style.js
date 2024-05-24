import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants";
const styles = StyleSheet.create({
  avatarContainer: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLORS.primary,
  },
  avatarTitle: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  avatarContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.primary,
  },
  avatarImg: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
  nameText: {
    fontSize: 26,
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: COLORS.white,
  },
  mailText: {
    fontSize: 15,
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: COLORS.white,
  },
  content: {
    paddingTop: 50,
  },
  service: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 30,
    paddingHorizontal: 70,
  },
});
export default styles;
