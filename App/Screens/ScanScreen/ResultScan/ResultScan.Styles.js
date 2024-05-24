import { StyleSheet } from "react-native";
import { COLORS } from "../../../Constants";
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    color: COLORS.primary,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
    fontSize: 20,
  },
  infoValue: {
    marginTop: 5,
    fontSize: 18,
  },
  txHash: {
    marginTop: 5,
    fontSize: 18,
    color: "blue",
  },
});
export default styles;
