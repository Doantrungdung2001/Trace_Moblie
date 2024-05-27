import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
import IntruductionProject from "../IntruductionFarm/IntruductionFarm";

import styles from "./DetailFarm.Styles";
const DetailFarm = () => {
  const param = useRoute().params;
  const [farmInformation, setFarmInformation] = useState(param.farmInfo);
  useEffect(() => {
    setFarmInformation(farmInformation);
  }, [farmInformation]);
  const navigation = useNavigation(); 

  const handleLinkPress = () => {
    Linking.openURL(`https://traceabilityuser.onrender.com/farm/detail/${farmInformation.id}`);
  };
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: farmInformation?.avatar }}
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameFarm}>{farmInformation.name}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.emailFarm}>{farmInformation?.email}</Text>
            <Text style={styles.phoneFarm}>{farmInformation?.phone}</Text>
          </View>
          <Text style={styles.addressFarm}>
            <Ionicons
              name="location-sharp"
              size={24}
              color={COLORS.secondary}
              style={{ marginRight: 14 }}
            />
            {farmInformation.address}
          </Text>

          {/* Horizontal Line */}
          <View style={styles.line}></View>

          <IntruductionProject Info={farmInformation} />

          {/* Horizontal Line */}
          <View style={styles.line}></View>
        </View>
        {/* slider service */}

        {/*List project */}
        <TouchableOpacity style={styles.linkButton} onPress={handleLinkPress}>
          <Text style={styles.linkButtonText}>Đến trang web của nông trại</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DetailFarm;
