import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";
const styles = StyleSheet.create({
  featuresContainer: {
    marginBottom: SIZES.padding * 2,
  },
  featuresText: {
    ...FONTS.h3,
  },
  renderFlast: {
    marginTop: SIZES.padding * 2,
  },
  itemContainer: {
    marginBottom: SIZES.padding * 2,
    width: 60,
    alignItems: "center",
  },
  itemCard: {
    height: 50,
    width: 50,
    marginBottom: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    height: 20,
    width: 20,
  },
  itemText: {
    textAlign: "center",
    flexWrap: "wrap",
    ...FONTS.body4,
  },
});
export default styles;
