import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CustomButton.Styles";
const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textBtn}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
