import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useState } from "react";
import styles from "./Service.Styles";
import { COLORS, icons, SIZES, FONTS } from "../../Constants";
import { useNavigation } from "@react-navigation/native";
const featureData = [
  {
    id: 1,
    icon: icons.farm,
    color: COLORS.yellow,
    backgroundColor: COLORS.lightyellow,
    description: "Nông trại",
    param: "list-farm-detail",
  },
  {
    id: 2,
    icon: icons.internet,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGreen,
    description: "Website",
    param: "Internet",
  },
  {
    id: 3,
    icon: icons.clock,
    color: COLORS.yellow,
    backgroundColor: COLORS.lightyellow,
    description: "Lịch sử",
    param: "history-qr-scan",
  },
];
const ListService = () => {
  const [feature, setFeatures] = useState(featureData);
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.param === "Internet") {
      Linking.openURL("https://trace-fe.onrender.com/");
    } else {
      navigation.push(`service/${item.param}`, {
        category: item.description,
      });
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        marginBottom: SIZES.padding * 1,
        width: 100,
        alignItems: "center",
      }}
      key={index}
      onPress={() => handlePress(item)}
    >
      <View
        style={{
          height: 50,
          width: 50,
          marginBottom: 5,
          borderRadius: 20,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            tintColor: item.color,
          }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          flexWrap: "wrap",
          ...FONTS.body4,
        }}
      >
        {item.description}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={{ margin: 20 }}>
        {/* <View style={{ marginBottom: SIZES.padding * 2 }}>
          <Text style={{ ...FONTS.h3 }}>Dịch vụ</Text>
        </View> */}
        <FlatList
          data={feature}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          style={styles.renderFlast}
        />
      </View>
    </View>
  );
};

export default ListService;
