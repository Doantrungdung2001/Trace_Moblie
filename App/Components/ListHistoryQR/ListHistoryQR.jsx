import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListHistoryQR.Styles";
import Heading from "../Heading/Heading";
import UserInfoAsyncStorage from "../../Utils/UserInfoAsyncStorage";
import useHistoryQRScan from "../../Screens/ProfileUserScreen/HistoryQRScan/useHistoryQRScan";
import * as Linking from "expo-linking";
import { formatDateTime } from "../../Utils/helper";
import { COLORS } from "../../Constants";
const ListHistoryQR = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState([
    {
      id: 1,
      number: "**** **** **** 1234",
      holder: "John Doe",
      expiration: "12/24",
      logo: "https://img.icons8.com/color/70/000000/visa.png",
    },
    {
      id: 2,
      number: "**** **** **** 5678",
      holder: "John Doe",
      expiration: "12/24",
      logo: "https://img.icons8.com/color/70/000000/mastercard.png",
    },
    {
      id: 3,
      number: "Apple Pay",
      holder: "John Doe",
      expiration: "",
      logo: "https://img.icons8.com/color/70/000000/apple-pay.png",
    },
  ]);

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
    const link = `https://trace-fe.onrender.com/search/transaction-hash/${txHash}`;
    Linking.openURL(link);
  };
  const handleProjectIdPress = (prjectId) => {
    const link = `https://trace-fe.onrender.com/results/${prjectId}`;
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
    <ScrollView style={styles.container}>
      <View>
        <Heading text={"QR quét gần đây"} />
        <TouchableOpacity
          onPress={() => navigation.push("service/history-qr-scan")}
          style={{ alignSelf: "flex-end", marginRight: 30 }}
        >
          <Text style={{ color: COLORS.primary, fontSize: 15 }}>
            Tất cả lịch sử
          </Text>
        </TouchableOpacity>
      </View>
      {isSuccessHistoryQRScan && (
        <ScrollView
          horizontal
          contentContainerStyle={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        >
          {dataHistoryQRScan ? (
            dataHistoryQRScan.slice(0, 5).map((item) => (
              <View key={item.id} style={styles.cardContainer}>
                <View>
                  <Text>Mã dự án</Text>
                  <Text style={styles.cardNumber}>
                    {renderTruncatedProjectId(item.projectId)}
                  </Text>
                </View>
                <View>
                  <Text>Mã transaction Hash</Text>
                  <Text style={styles.cardNumber}>
                    {renderTruncatedTX(item.tx)}
                  </Text>
                </View>
                <View style={styles.cardInfoContainer}>
                  <View style={styles.cardInfoItem}>
                    <Text style={styles.cardInfoLabel}>Tên cây</Text>
                    <Text style={styles.cardInfoValue}>{item.plant}</Text>
                  </View>
                  <View style={styles.cardInfoItem}>
                    <Text style={styles.cardInfoLabel}>Ngày quét</Text>
                    <Text style={styles.cardInfoValue}>
                      {formatDateTime(item.time)}
                    </Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View>
              <Text>Chưa quét lần nào</Text>
            </View>
          )}
        </ScrollView>
      )}
      {isLoadingHistoryQRScan && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </ScrollView>
  );
};

export default ListHistoryQR;
