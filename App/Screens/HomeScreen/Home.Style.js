import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../Constants";
const styles = StyleSheet.create({
  //container home
  container: { flex: 1, 
    backgroundColor: COLORS.white,
  },
  //header
  headerContainer: {
    flexDirection: "row",
    marginVertical: SIZES.padding * 2,
    padding: 20,
    backgroundColor: COLORS.green,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerNotification: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
  },
  //banner
  bannerContainer: {
    flex: 1,
    alignItems: "center",
  },
  bannerSliderImage: {
    borderRadius: 15,
    width: "95%",
    marginTop: 15,
  },
  //features
  featuresContainer: {
    marginBottom: SIZES.padding * 2,
  },
  featuresText: {
    ...FONTS.h3,
  },

  //item
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
  //Flast List
  renderFlast: {
    marginTop: SIZES.padding * 2,
  },
  //render Promo
  renderPromoContainer: {
    flexDirection: "row",
    marginBottom: SIZES.padding,
  },
  textViewAll: {
    color: COLORS.gray,
    ...FONTS.body4,
  },

  //render Item
  renderItemContainer: {
    marginVertical: SIZES.base,
    width: SIZES.width / 2.5,
  },
  renderItemCard: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.primary,
  },
  renderItemImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  renderItemContent: {
    padding: SIZES.padding,
    backgroundColor: COLORS.lightGray,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textTitle: {
    ...FONTS.h4,
  },
});
export default styles;
