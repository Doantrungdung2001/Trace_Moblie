import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants";
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  textBtn: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
  },
});
export default styles;
