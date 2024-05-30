import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
import styles from "./ResultScan.Styles";
import { formatDateTime } from "../../../Utils/helper";
const ResultScan = () => {
  const param = useRoute().params;
  const [resultScan, setResultScan] = useState(null);
  const [clientName, setClientName] = useState("");
  const [id, setId] = useState("");
  const [nameFarm, setNameFarm] = useState("");
  const [scannedTime, setScannedTime] = useState("");

  useEffect(() => {
    setResultScan(param.result);
    extractPurchaseInfo(param.result);
  }, [param.result]);

  // Function to extract purchase info
  const extractPurchaseInfo = (result) => {
    if (result && result.purchaseInfo) {
      const regex = /(.+) with id (.+) scan this product, farm: (.+) at (.+)/;
      const match = result.purchaseInfo.match(regex);

      if (match) {
        setClientName(match[1]);
        setId(match[2]);
        setNameFarm(match[3]);
        // Lấy phần thời gian từ chuỗi
        const timeString = match[4]; // Lấy phần thời gian từ chuỗi
        const timeRegex = /(\d+):(\d+):(\d+)/; // Định dạng chuỗi thời gian
        const timeMatch = timeString.match(timeRegex);

        if (timeMatch) {
          const hour = parseInt(timeMatch[1], 10);
          const minute = parseInt(timeMatch[2], 10);
          const second = parseInt(timeMatch[3], 10);

          // Tạo đối tượng Date từ các phần tử thời gian
          const date = new Date();
          date.setUTCHours(hour);
          date.setUTCMinutes(minute);
          date.setUTCSeconds(second);

          setScannedTime(date); // Set thời gian dưới dạng đối tượng Date
        } else {
          console.log("Không tìm thấy thông tin thời gian.");
        }
      } else {
        console.log("Không tìm thấy thông tin mua hàng.");
      }
    }
  };

  // Function to handle when the TX code is pressed
  const handleTXPress = () => {
    const link = `https://traceabilityuser.onrender.com/search/transaction-hash/${resultScan.txScan}`;
    // Open the link in the browser
    Linking.openURL(link);
  };

  // Function to handle when the TX code is pressed
  const handleProjectIdPress = (id) => {
    const link = `https://traceabilityuser.onrender.com/results/${id}`;
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
        {resultScan?.isLegit ? (
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://static-00.iconduck.com/assets.00/success-icon-2048x2048-8woikx05.png",
              }}
              style={styles.avatar}
            />
            <Text style={styles.name}> Sản phẩm chính hãng</Text>
          </View>
        ) : (
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/012/042/301/original/warning-sign-icon-transparent-background-free-png.png",
              }}
              style={styles.avatar}
            />
            <Text style={styles.fake}>Sản phẩm giả mạo</Text>
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Mã transaction Hash:</Text>
          {renderTruncatedTX()}
        </View>
        <View style={styles.divider} />
        <View style={styles.customerInfoContainer}>
          <Text style={styles.subtitle}>Thông tin mua hàng:</Text>
          {clientName && (
            <View style={styles.customerInfo}>
              <Text style={styles.label}>Tên khách hàng:</Text>
              <Text style={styles.text}>{clientName}</Text>
            </View>
          )}
          {id && (
            <View style={styles.customerInfo}>
              <Text style={styles.label}>Mã sản phẩm:</Text>
              <TouchableOpacity onPress={() => handleProjectIdPress()}>
                <Text style={styles.textIdProject}>{id}</Text>
              </TouchableOpacity>
            </View>
          )}
          {nameFarm && (
            <View style={styles.customerInfo}>
              <Text style={styles.label}>Nông trại:</Text>
              <Text style={styles.text}>{nameFarm}</Text>
            </View>
          )}
          {scannedTime && (
            <View style={styles.customerInfo}>
              <Text style={styles.label}>Thời gian:</Text>
              <Text style={styles.text}>{formatDateTime(scannedTime)}</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultScan;
