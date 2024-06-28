import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../Constants";
const NotData = ({ text }) => {
  return (
    <View>
      <Text
        style={{
          color: COLORS.gray,
          fontSize: 30,
          fontWeight: "600",
          textAlign: "center",
          marginTop: 40,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default NotData;
