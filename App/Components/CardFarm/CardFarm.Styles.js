import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants";
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  nameFarm: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: 25,
  },
  districtFarm: {
    fontFamily: "regular",
    color: COLORS.black,
    fontSize: 17,
  },
  distanceFarm: {
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: 14,
  },
});
export default styles;
