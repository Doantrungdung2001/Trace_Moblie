import { Text, View, ScrollView, SafeAreaView } from "react-native";
import React, { useState, useRef } from "react";
import styles from "./ChangePassword.Styles";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import InputField from "../../../Components/InputField/InputField";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import ToastMessage from "../../../Components/ToastMessage/ToastMessage";
import AUTH from "../../../Services/AuthService";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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

  const handlePasswordChange = (text) => {
    setNewPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordsMatch(text === newPassword);
  };

  const ChangePassword = async (oldPassword, newPassword) => {
    try {
      const res = await AUTH.updatePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
      });
      console.log("Du lieu tra ve : ", res);
      if (res.data.status === 200 || res.data.status === 201) {
        setTypeToast("success");
        setTextToast("Thành công");
        setDescriptionToast("Thay đổi mật khẩu thành công thành công");
        handleShowToast();
      }
    } catch (error) {
      if (error?.response?.data.code) {
        setTypeToast("danger");
        setTextToast("Không thành công");
        setDescriptionToast("Thay đổi mật khẩu thất bại");
        handleShowToast();
      }
      console.log("fail: --", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <ToastMessage
        type={typeToast}
        text={textToast}
        description={descriptionToast}
        ref={toastRef}
      />
      <PageHeading title={"Cập nhật mật khẩu"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <InputField
          label={"Mật khẩu cũ"}
          icon={
            <MaterialIcons
              name="password"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <InputField
          label={"Mật khẩu mới"}
          icon={
            <MaterialIcons
              name="password"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={newPassword}
          onChangeText={handlePasswordChange}
        />

        <InputField
          label={"Xác nhận mật khẩu"}
          icon={
            <MaterialIcons
              name="password"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        {!passwordsMatch && (
          <Text style={styles.errorText}>Mật khẩu không khớp</Text>
        )}
        <CustomButton
          label={"Cập nhật"}
          onPress={() => {
            ChangePassword(oldPassword, newPassword);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
