import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
import styles from "./ResultScan.Styles";
const ResultScan = () => {
  const param = useRoute().params;
  const [resultScan, setResultScan] = useState(null);
  useEffect(() => {
    setResultScan(param.result);
  }, []);
  console.log("---------dữ liệu------------------", resultScan);

  // Function to handle when the TX code is pressed
  const handleTXPress = () => {
    const link = `https://traceabilityuser.onrender.com/search/transaction-hash/${resultScan.txScan}`;
    // Open the link in the browser
    Linking.openURL(link);
  };

  // Function to render the truncated TX code with the TouchableOpacity
  const renderTruncatedTX = () => {
    if (!resultScan?.txScan) return null;

    // Change the length of the TX code you want to display at the beginning and end
    const beginning = resultScan.txScan.substring(0, 10); // Display the first 5 characters
    const end = resultScan.txScan.substring(resultScan.txScan.length - 5); // Display the last 5 characters

    return (
      <TouchableOpacity onPress={handleTXPress}>
        <Text style={styles.txHash}>
          {beginning}...{end}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <PageHeading title={"Kết quả quét mã"} />
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://static-00.iconduck.com/assets.00/success-icon-2048x2048-8woikx05.png",
            }}
            style={styles.avatar}
          />
          {resultScan?.isLegit ? (
            <Text style={styles.name}> Sản phẩm chính hãng</Text>
          ) : (
            <Text style={styles.name}>Sản phẩm có thể bị giả mạo</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Mã tx:</Text>
          {renderTruncatedTX()}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Thông tin mua hàng:</Text>
          <Text style={styles.infoValue}>{resultScan?.purchaseInfo}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultScan;
