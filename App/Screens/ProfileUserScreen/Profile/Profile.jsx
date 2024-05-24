// rnfe
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./Profile.Style";
data = [
  {
    id: 1,
    name: "Chỉnh sửa thông tin",
    param: "info-view",
    icon: "settings",
  },
  {
    id: 2,
    name: "Ưu đãi",
    param: "points",
    icon: "card-sharp",
  },
  // {
  //   id: 3,
  //   name: "Vườn của tôi",
  //   param: "my-garden/listgarden",
  //   icon: "cart-sharp",
  // },
  {
    id: 3,
    name: "Lịch sử",
    param: "history-qr-scan",
    icon: "film",
  },
  {
    id: 4,
    name: "Đăng xuất",
    icon: "log-out",
  },
];

const user = {
  avatar: "https://image.pngaaa.com/764/3043764-middle.png",
  name: "Doan Trung Dung",
  gmail: "doantrungdung2001@gmail.com",
};

const Proflie = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarTitle}>Hồ sơ</Text>
        <View style={styles.avatarContent}>
          <Image source={{ uri: user.avatar }} style={styles.avatarImg} />
          <Text style={styles.nameText}>{user.name}</Text>
          <Text style={styles.mailText}>{user.gmail}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {data.map((item) => (
          <TouchableOpacity
            style={styles.service}
            onPress={() => navigation.push(`profile/${item.param}`)}
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

export default Proflie;
