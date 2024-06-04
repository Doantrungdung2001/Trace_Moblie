import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./ProfileInformation.Styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import useClientInformation from "./useClientInformation";
const ProfileInformation = () => {
  const [userId, setUserId] = useState(null);
  const navigation = useNavigation();

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
  const {
    dataClient,
    isSuccessClientInformation,
    isLoadingClientInformation,
    refetcClientInfomation,
  } = useClientInformation({
    clientId: userId,
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.styleGoBack}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      {isSuccessClientInformation && (
        <View>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://image.pngaaa.com/764/3043764-middle.png",
              }}
              style={styles.avatar}
            />
            <Text style={[styles.name, styles.textWithShadow]}>
              {dataClient.name}
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{dataClient.email}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Số điện thoại:</Text>
              <Text style={styles.infoValue}>{dataClient.phone}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Địa chỉ:</Text>
              <Text style={styles.infoValue}>{dataClient.address}</Text>
            </View>
          </View>
          <View style={styles.updateBtn}>
            <CustomButton
              label={"Chỉnh sửa thông tin"}
              onPress={() =>
                navigation.push("profile/update-info", {
                  dataClient: dataClient,
                  refetcClientInfomation: refetcClientInfomation,
                })
              }
            />
          </View>
        </View>
      )}
      {isLoadingClientInformation && (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

export default ProfileInformation;
