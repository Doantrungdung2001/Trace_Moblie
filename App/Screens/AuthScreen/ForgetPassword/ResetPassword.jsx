import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { COLORS } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import AUTH from "../../../Services/AuthService";
import styles from "./ResetPassword.Styles";
import ToastMessage from "../../../Components/ToastMessage/ToastMessage";
import PageHeading from "../../../Components/PageHeading/PageHeading";
const ResetPassword = () => {
  const navigation = useNavigation();
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState(false);
  const [selectConfirmDisplayPassword, setSelectConfirmDisplayPassowrd] =
    useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const toastRef = useRef(null);
  const [typeToast, setTypeToast] = useState("success");
  const [textToast, setTextToast] = useState();

  const [descriptionToast, setDescriptionToast] = useState();

  const handleShowToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  };
  const isValidEmail = (email) => {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleTokenChange = (text) => {
    setToken(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValid(isValidEmail(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordsMatch(text === password);
  };

  const Register = async (name, email, password) => {
    try {
      const res = await AUTH.register({
        name: name,
        email: email,
        password: password,
      });
      if (res.data.status === 200 || res.data.status === 201) {
        setTypeToast("success");
        setTextToast("Thành công");
        setDescriptionToast(
          "Đăng ký tài khoản thành công, hãy đăng nhập để trải nghiệm dịch vụ"
        );
        handleShowToast();
      }

      console.log("Register success");
    } catch (error) {
      if (error?.response?.data.code) {
        setTypeToast("danger");
        setTextToast("Không thành công");
        setDescriptionToast("Tài khoản đã tồn tại");
        handleShowToast();
      }
      console.log("Register fail: --", error);
    }
  };
  return (
    <SafeAreaView>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
      <PageHeading title={"Đặt lại mật khẩu"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>
            Chúng tôi đã gửi mã token để lấy lại mật khẩu.Vui lòng kiểm tra
            email
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <TextInput
              placeholder="Mã Token"
              placeholderTextColor={COLORS.darkgray}
              style={styles.textInputEmail}
              value={token}
              onChangeText={handleTokenChange}
            />
          </View>
          <View>
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

          <View style={styles.password}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectDisplayPassword}
              style={styles.textInputPassword}
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() => setSelectDisplayPassowrd(!selectDisplayPassword)}
            >
              {selectDisplayPassword ? (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  color="black"
                  style={styles.dispalyPassword}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.dispalyPassword}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.password}>
            <TextInput
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={!selectConfirmDisplayPassword}
              style={styles.textInputPassword}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
            <TouchableOpacity
              style={{ justifyContent: "center" }}
              onPress={() =>
                setSelectConfirmDisplayPassowrd(!selectConfirmDisplayPassword)
              }
            >
              {selectConfirmDisplayPassword ? (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  color="black"
                  style={styles.dispalyPassword}
                />
              ) : (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.dispalyPassword}
                />
              )}
            </TouchableOpacity>
          </View>
          {!passwordsMatch && (
            <Text style={styles.errorText}>Mật khẩu không khớp</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => {
            if (emailValid && passwordsMatch) {
              Register(name, email, password);
            } else {
              alert("Vui lòng nhập email hợp lệ và mật khẩu khớp");
            }
          }}
        >
          <Text style={styles.textBtnRegister}>Xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textBtnLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
