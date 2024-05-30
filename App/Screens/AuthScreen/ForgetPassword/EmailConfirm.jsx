import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../Constants";
import AUTH from "../../../Services/AuthService";
import styles from "./EmailConfirm.Styles";
import PageHeading from "../../../Components/PageHeading/PageHeading";

const EmailConfirm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const isValidEmail = (email) => {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValid(isValidEmail(text));
  };
  return (
    <SafeAreaView>
      <PageHeading title={"Quên mật khẩu"} />
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.darkgray}
            style={styles.textInputEmail}
            value={email}
            onChangeText={handleEmailChange}
          />
          {!emailValid && (
            <Text style={styles.errorText}>Email không hợp lệ</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.push("ResetPassword")}
        >
          <Text style={styles.textBtnLogin}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmailConfirm;
