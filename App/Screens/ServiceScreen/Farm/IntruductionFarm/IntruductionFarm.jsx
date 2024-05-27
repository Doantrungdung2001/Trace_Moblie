import {Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Heading from "../../../../Components/Heading/Heading";

import styles from "./IntruductionFar.Styles";
const IntruductionFarm = ({ Info }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    Info && (
      <View>
        {/* Gioi thieu  */}
        <Heading text={"Giới thiệu"} />
        <Text style={styles.description} numberOfLines={isReadMore ? 30 : 3}>
          {Info.description}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text style={styles.textBtn}>
            {isReadMore ? "Thu gọn" : "Chi tiết"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default IntruductionFarm;

