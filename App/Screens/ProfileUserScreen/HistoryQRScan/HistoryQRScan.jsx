import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import styles from "./HistoryQRScan.Styles";
import useHistoryQRScan from "./useHistoryQRScan";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import { formatDateTime } from "../../../Utils/helper";
import * as Linking from "expo-linking";
import NotData from "../../../Components/NotData/NotData";
const ITEMS_PER_PAGE = 3;

const HistoryQRScan = () => {
  const [userId, setUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserInfoAsyncStorage.getUserInfo("UserInfo");
        setUserId(result.farm._id);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const { dataHistoryQRScan, isSuccessHistoryQRScan, isLoadingHistoryQRScan } =
    useHistoryQRScan({
      clientId: userId,
    });

  const handleTXPress = (txHash) => {
    const link = `https://trace-fe.onrender.com/search/transaction-hash/${txHash}`;
    Linking.openURL(link);
  };

  const handleProjectIdPress = (projectId) => {
    const link = `https://trace-fe.onrender.com/results/${projectId}`;
    Linking.openURL(link);
  };

  const renderTruncatedProjectId = (projectId) => {
    if (!projectId) return null;
    const beginning = projectId.substring(0, 5);
    const end = projectId.substring(projectId.length - 5);
    return (
      <TouchableOpacity onPress={() => handleProjectIdPress(projectId)}>
        <Text style={styles.txHash}>
          {beginning}...{end}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTruncatedTX = (tx) => {
    if (!tx) return null;
    const beginning = tx.substring(0, 5);
    const end = tx.substring(tx.length - 5);
    return (
      <TouchableOpacity onPress={() => handleTXPress(tx)}>
        <Text style={styles.txHash}>
          {beginning}...{end}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderHistoryItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = dataHistoryQRScan.slice(startIndex, endIndex);

    return paginatedData.map((history, index) => (
      <View style={styles.card} key={index}>
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <Text style={styles.itemPrice}>{formatDateTime(history.time)}</Text>
            <Text style={styles.itemName}>{history.plant}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginRight: 4, fontSize: 18 }}>Mã dự án:</Text>
              {renderTruncatedProjectId(history.projectId)}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginRight: 4, fontSize: 18 }}>Mã tx:</Text>
              {renderTruncatedTX(history.tx)}
            </View>
          </View>
        </View>
      </View>
    ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageButton = (pageNumber) => (
    <TouchableOpacity
      key={pageNumber}
      onPress={() => handlePageChange(pageNumber)}
      style={[
        styles.pageButton,
        currentPage === pageNumber && styles.activePage,
      ]}
    >
      <Text>{pageNumber}</Text>
    </TouchableOpacity>
  );

  const renderPageButtons = () => {
    const numPages = Math.ceil(dataHistoryQRScan.length / ITEMS_PER_PAGE);
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(renderPageButton(i));
    }
    return pages;
  };

  return (
    <ScrollView>
      <PageHeading title={"Lịch sử mua hàng"} />
      <View style={{ marginBottom: 20 }}></View>
      {isLoadingHistoryQRScan ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : dataHistoryQRScan && dataHistoryQRScan.length > 0 ? (
        <>
          {renderHistoryItems()}
          <View style={styles.pagination}>{renderPageButtons()}</View>
        </>
      ) : (
        <NotData text={"Bạn chưa mua hàng"}/>
      )}
    </ScrollView>
  );
};

export default HistoryQRScan;
