import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import useClientInformation from "../ProfileInformation/useClientInformation";
import { COLORS } from "../../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./Profile.Style";

const data = [
  {
    id: 1,
    name: "Chỉnh sửa thông tin",
    param: "info-view",
    icon: "settings",
  },
  {
    id: 2,
    name: "Lịch sử",
    param: "history-qr-scan",
    icon: "film",
  },
  {
    id: 3,
    name: "Đăng xuất",
    icon: "log-out",
  },
];

const user = {
  avatar: "https://image.pngaaa.com/764/3043764-middle.png",
};

const Profile = () => {
  const navigation = useNavigation();
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

  const {
    dataClient,
    isSuccessClientInformation,
    isLoadingClientInformation,
    refetchClientInformation,
  } = useClientInformation({
    clientId: userId,
  });

  const handleLogout = async () => {
    try {
      await UserInfoAsyncStorage.clearUserInfo();
      navigation.replace("Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarTitle}>Hồ sơ</Text>
        {isSuccessClientInformation && (
          <View style={styles.avatarContent}>
            <Image source={{ uri: user.avatar }} style={styles.avatarImg} />
            <Text style={styles.nameText}>{dataClient.name}</Text>
            <Text style={styles.mailText}>{dataClient.email}</Text>
          </View>
        )}
        {isLoadingClientInformation && (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
      <View style={styles.content}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.service}
            onPress={() => {
              console.log("item: ", item)
              if (item.name === "Đăng xuất") {
                handleLogout();
              } else if (item.name === "Chỉnh sửa thông tin") {
                navigation.push(`profile/${item.param}`, {
                  infoClient: dataClient,
                });
              } else {
                navigation.push(`profile/${item.param}`, {
                  infoClient: dataClient,
                });
              }
            }}
          >
            <Ionicons name={item.icon} size={44} color={COLORS.primary} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto-Medium",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;
