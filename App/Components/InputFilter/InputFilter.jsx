import { TextInput, View } from "react-native";
import React from "react";
import styles from "./InputFilter.Styles";
const InputFilter = ({ placeholderText, value, onChangeFunction }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholderText.toString()}
        value={value}
        onChangeText={(text) => onChangeFunction(text)}
        keyboardType="numeric"
      />
    </View>
  );
};

export default InputFilter;
