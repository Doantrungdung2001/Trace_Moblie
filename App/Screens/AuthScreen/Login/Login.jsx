import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import AUTH from "../../../Services/AuthService";
import UserInfoAsyncStorage from "../../../Utils/UserInfoAsyncStorage";
import styles from "./Login.Style";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectDisplayPassword, setSelectDisplayPassowrd] = useState();
  const [LoginStatus, setLoginStatus] = useState("");
  const [loading, setLoading] = useState(false); // Thêm state cho loading

  const handleLogin = async (email, password) => {
    setLoading(true); // Bắt đầu hiển thị loading
    try {
      const res = await AUTH.login({
        email: email,
        password: password,
      });
      if (res.data.status === 200) {
        setLoginStatus("success");
        UserInfoAsyncStorage.storeUser("UserInfo", res.data.metadata.metadata);
        console.log("Login success");
        navigation.push("Home");
      } else {
        setLoginStatus("false");
      }
    } catch (error) {
      if (error?.response?.data.code) {
        setLoginStatus("false");
      }
    } finally {
      setLoading(false); // Tắt loading sau khi hoàn tất xử lý
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Đăng nhập</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.darkgray}
            style={styles.textInputEmail}
            onChangeText={(email) => setEmail(email)}
          />
          <View style={styles.password}>
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor={COLORS.darkgray}
              secureTextEntry={true}
              style={styles.textInputPassword}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          {LoginStatus === "false" && (
            <Text style={styles.alertLogin}>
              Tài khoản hoặc mật khẩu đã sai
            </Text>
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.push("ForgetPassword")}>
          <Text style={styles.forgetPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => handleLogin(email, password)}
          disabled={loading} // Vô hiệu hóa nút khi đang loading
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.textBtnLogin}>Đăng nhập</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.push("Register")}
        >
          <Text style={styles.textBtnRegister}>Bạn chưa có tài khoản?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
