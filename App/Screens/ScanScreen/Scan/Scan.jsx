import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState, useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import QR from "../../../Services/QRScanService";
const Scan = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    setScannedData(data);

    // Tách chuỗi đường link thành mảng các phần bằng '/'
    const parts = data.split("/");

    // Lấy idProject và idPrivate từ phần tử thứ 5 và thứ 6 của mảng
    const idProject = parts[parts.length - 2];
    const idPrivate = parts[parts.length - 1];

    console.log("idProject----------------------:", idProject);
    console.log("idPrivate----------------------:", idPrivate);

    // Gọi hàm handlerScan với projectId và privateId
    handlerScan({ projectId: idProject, privateId: idPrivate });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={() => BarCodeScanner.requestPermissionsAsync()}
          title="grant permission"
        />
      </View>
    );
  }

  const handlerScan = async ({ privateId, projectId }) => {
    try {
      if (privateId && projectId) {
        const result = await QR.scanQR({
          privateId: privateId,
          projectId: projectId,
        });
        console.log("----------------afsadfdsfsdf", result);
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
        console.log("In thu ra de xem ,", dataResult);
        navigation.push("result-scan", {
          result: dataResult,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.bottomContainer}>
          <Button
            title="Click lại một lần nữa !"
            onPress={() => {
              setScanned(false);
              setScannedData("");
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  urlText: {
    fontSize: 18,
    margin: 10,
  },
});
