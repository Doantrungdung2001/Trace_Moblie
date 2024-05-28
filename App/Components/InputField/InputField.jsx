import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./InputField.Styles";
const InputField = ({
  label,
  icon,
  value,
  onChangeText,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      {inputType == "password" ? (
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.labelBtn}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
