import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import CardFarm from "../../../../Components/CardFarm/CardFarm";
import useListFarm from "../../../../Components/ListFarm/useListFarm";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./ListFarmDetail.Styles";

const ITEMS_PER_PAGE = 4; // Số lượng mục trên mỗi trang

const ListFarmDetail = () => {
  const { allFarm, isSuccessAllFarm, isLoadingAllFarm } = useListFarm();
  const param = useRoute().params;
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredFarms, setFilteredFarms] = useState([]);
  const [searchedFarm, setSearchedFarm] = useState(allFarm);
  const flatListRef = useRef(null);

  // Tính toán danh sách nông trại hiển thị trên trang hiện tại
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setFilteredFarms(searchedFarm.slice(startIndex, endIndex));
  }, [currentPage, searchedFarm]);

  const handleSearch = () => {
    // Cập nhật danh sách nông trại hiển thị dựa trên searchText
    const filtered = allFarm.filter(
      (farm) =>
        farm.name.toLowerCase().includes(searchText.toLowerCase()) ||
        farm.district.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedFarm(filtered);
    // Reset trang về trang đầu tiên khi thực hiện tìm kiếm
    setCurrentPage(1);
  };

  // Hàm hiển thị nút trang
  const renderPageButton = (pageNumber, label) => (
    <TouchableOpacity
      key={pageNumber}
      onPress={() => handlePageChange(pageNumber)}
      style={[
        styles.pageButton,
        currentPage === pageNumber && styles.activePage,
      ]}
    >
      <Text
        style={[
          styles.textLabel,
          currentPage === pageNumber && styles.activeLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  // Hàm hiển thị nút "..."
  const renderEllipsisButton = () => (
    <View style={styles.pageButton}>
      <Text>...</Text>
    </View>
  );

  // Hàm tạo danh sách các nút trang
  const renderPageButtons = () => {
    const numPages = Math.ceil(searchedFarm.length / ITEMS_PER_PAGE);
    const visiblePages = Math.min(5, numPages);
    const pages = [];
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + visiblePages - 1, numPages);

    // Xử lý trường hợp số trang quá nhiều
    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    // Thêm nút trang vào danh sách
    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderPageButton(i, i));
    }

    // Thêm nút "..." nếu có nhiều trang hơn
    if (startPage > 1) {
      pages.unshift(renderEllipsisButton());
    }
    if (endPage < numPages) {
      pages.push(renderEllipsisButton());
    }

    return pages;
  };

  // Xử lý sự kiện chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Cuộn FlatList về đầu danh sách khi chuyển trang
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <ScrollView>
      <PageHeading title={"Danh sách nông trại"} />

      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Nhập tên nông trại, tỉnh"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text)
              handleSearch()
            }}
          />
        </View>
        <TouchableOpacity onPress={handleSearch} style={styles.filterBtn}>
          <AntDesign name="search1" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {isSuccessAllFarm && (
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            style={{ margin: 10 }}
            data={filteredFarms}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CardFarm farm={item} key={index} />
            )}
          />
          {/* Hiển thị điều hướng phân trang */}
          <View style={styles.pagination}>{renderPageButtons()}</View>
        </View>
      )}
      {isLoadingAllFarm && <ActivityIndicator size="large" color="#00ff00" />}
    </ScrollView>
  );
};

export default ListFarmDetail;
