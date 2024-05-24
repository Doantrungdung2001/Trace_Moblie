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

const HistoryQRScan = () => {
  const [userId, setUserId] = useState(null);
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

  // Function to handle when the TX code is pressed
  const handleTXPress = (txHash) => {
    const link = `https://traceabilityuser.onrender.com/search/transaction-hash/${txHash}`;
    Linking.openURL(link);
  };
  const handleProjectIdPress = (prjectId) => {
    const link = `https://traceabilityuser.onrender.com/results/${prjectId}`;
    Linking.openURL(link);
  };

  // Function to render the truncated project ID
  const renderTruncatedProjectId = (projectId) => {
    if (!projectId) return null;
    const beginning = projectId.substring(0, 5); // Display the first 5 characters
    const end = projectId.substring(projectId.length - 5); // Display the last 5 characters
    return (
      <TouchableOpacity onPress={() => handleProjectIdPress(projectId)}>
        <Text style={styles.txHash}>
          {beginning}...{end}
        </Text>
      </TouchableOpacity>
    );
  };

  // Function to render the truncated TX code with the TouchableOpacity
  const renderTruncatedTX = (tx) => {
    if (!tx) return null;
    const beginning = tx.substring(0, 5); // Display the first 5 characters
    const end = tx.substring(tx.length - 5); // Display the last 5 characters
    return (
      <TouchableOpacity onPress={() => handleTXPress(tx)}>
        <Text style={styles.txHash}>
          {beginning}...{end}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <PageHeading title={"Lịch sử mua hàng"} />
      <View style={{ marginBottom: 20 }}></View>
      {isSuccessHistoryQRScan && (
        <View>
          {dataHistoryQRScan?.map((history, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.item}>
                <View style={styles.itemContent}>
                  <Text style={styles.itemPrice}>
                    {formatDateTime(history.time)}
                  </Text>
                  <Text style={styles.itemName}>{history.plant}</Text>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 4, fontSize: 18 }}>
                      Mã dự án:
                    </Text>
                    {renderTruncatedProjectId(history.projectId)}
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 4, fontSize: 18 }}>Mã tx:</Text>
                    {renderTruncatedTX(history.tx)}
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
      {isLoadingHistoryQRScan && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </ScrollView>
  );
};

export default HistoryQRScan;
