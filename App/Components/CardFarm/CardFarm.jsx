import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./CardFarm.Styles";
const CardFarm = ({ farm }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("detail-farm", { farmInfo: farm })}
    >
      <Image source={{ uri: farm?.avatar }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.nameFarm}>{farm.name}</Text>
        <Text style={styles.districtFarm}>
          <Ionicons
            name="location-sharp"
            size={24}
            color={COLORS.secondary}
            style={{ marginRight: 14 }}
          />
          {farm.district}
        </Text>
        <Text style={styles.distanceFarm}>{farm.distance} km</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardFarm;
