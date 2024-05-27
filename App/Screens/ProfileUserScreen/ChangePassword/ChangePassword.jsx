import { Text, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import styles from "./ChangePassword.Styles";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import InputField from "../../../Components/InputField/InputField";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { MaterialIcons } from '@expo/vector-icons';
const ChangePassword = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <PageHeading title={"Cập nhật mật khẩu"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <InputField
          label={"Mật khẩu"}
          icon={
            <MaterialIcons
              name="password"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
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
        />

        <CustomButton label={"Cập nhật"} onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
