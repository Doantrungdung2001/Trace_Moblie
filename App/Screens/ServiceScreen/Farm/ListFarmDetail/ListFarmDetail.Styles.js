import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Constants";
const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 10,
    marginLeft: 10,
  },
  filterBtn: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 8,
  },
  filterTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.black,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  pageButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 3,
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 5,
  },
  activePage: {
    backgroundColor: COLORS.green, // Màu nền của nút phân trang được chọn
  },
});

export default styles;
