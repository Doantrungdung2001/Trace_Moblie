import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import QR from "../../../Services/QRScanService";
import styles from "./Scan.Styles";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import useHistoryQRScan from "../../ProfileUserScreen/HistoryQRScan/useHistoryQRScan";

const Scan = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const scannedRef = useRef(false); // Sử dụng useRef để quản lý trạng thái quét

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserInfoAsyncStorage.getUserInfo("UserInfo");
        setUserId(result.farm._id);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchData();
  }, []);

  const { refetcListQRInfomation } = useHistoryQRScan({
    clientId: userId,
  });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    return () => {
      scannedRef.current = false; // Đặt lại khi component unmounts
    };
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    if (!scannedRef.current && isFocused) {
      scannedRef.current = true;
      setLoading(true);
      try {
        const parts = data.split("/");
        const idProject = parts[parts.length - 2];
        const idPrivate = parts[parts.length - 1];

        if (!idPrivate || !idProject) {
          navigation.push("error-scan");
          return;
        }

        const result = await QR.scanQR({
          privateId: idPrivate,
          projectId: idProject,
        });

        let dataResult = null;
        if (
          result.data.message === "Scan QR success!" &&
          result.data.metadata.message === "QR is already scanned"
        ) {
          dataResult = {
            isLegit: false,
            txScan: result.data.metadata.scannedQR.txScan,
            purchaseInfo: result.data.metadata.scannedQR.purchaseInfo,
          };
        } else {
          dataResult = {
            isLegit: true,
            txScan: result.data.metadata.txScan,
            purchaseInfo: result.data.metadata.purchaseInfo,
          };
        }

        refetcListQRInfomation();
        navigation.push("result-scan", {
          result: dataResult,
        });
      } catch (error) {
        console.log("Error handling barcode scan:", error);
        navigation.push("error-scan");
      } finally {
        setLoading(false);

        // Đặt lại scannedRef.current sau một khoảng thời gian để cho phép quét lại
        setTimeout(() => {
          scannedRef.current = false;
        }, 1000); // Thời gian chờ (milliseconds) có thể điều chỉnh
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to access the camera.
        </Text>
        <Button
          onPress={() => BarCodeScanner.requestPermissionsAsync()}
          title="Grant Permission"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {loading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.processingText}>Đang xử lý...</Text>
        </View>
      )}
    </View>
  );
};

export default Scan;
