import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00008B",
  },
  cardContainer: {
    marginHorizontal: 10,
    width: 300,
    height: 180,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 6,
    borderBottomColor: "#ccc",
  },
  cardNumber: {
    fontSize: 18,
    letterSpacing: 4,
    marginBottom: 10,
  },
  cardInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInfoItem: {
    flex: 1,
  },
  cardInfoLabel: {
    fontSize: 12,
    color: "gray",
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  carouselContainer: {
    marginVertical: 40,
    alignItems: "center",
  },
  txHash: {
    color: "blue",
    fontSize: 18,
    fontFamily: "Roboto-BoldItalic",
  },
});
export default styles;
