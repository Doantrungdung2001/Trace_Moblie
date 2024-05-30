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
  const [confirmEmail, setConfirmEmail] = useState(true);
  const isValidEmail = (email) => {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValid(isValidEmail(text));
  };

  const handleConfirmEmail = async (email) => {
    try {
      const res = await AUTH.forgetPassword({
        email: email,
      });
      if (res.data.status === 200) {
        navigation.push("ResetPassword", {
          email: email,
        });
      }
    } catch (error) {
      if (error?.response?.data.code) {
        setConfirmEmail(false);
      }
    }
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
          {!confirmEmail && (
            <Text style={styles.errorText}>Email không đúng</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => handleConfirmEmail(email)}
        >
          <Text style={styles.textBtnLogin}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmailConfirm;
