import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  spinnerContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  urlText: {
    fontSize: 18,
    margin: 10,
  },
  processingText: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Roboto-BoldItalic",
    color: "blue",
  },
});
export default styles;
