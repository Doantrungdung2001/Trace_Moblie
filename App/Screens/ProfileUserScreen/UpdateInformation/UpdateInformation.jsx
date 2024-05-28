import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

import PageHeading from "../../../Components/PageHeading/PageHeading";
import styles from "./UpdateInformation.Styles";
import InputField from "../../../Components/InputField/InputField";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const UpdateInformation = () => {
  const navigation = useNavigation();
  const [dobLabel, setDobLabel] = useState("Ngày tháng sinh");

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (event, selectedDate) => {
    setShowPicker(false); // Hide the picker after selecting a time
    setSelectedTime(selectedDate);
  };

  
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <PageHeading title={" Chỉnh sửa thông tin"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <InputField
          label={"Họ và tên"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={"Số điện thoại"}
          icon={
            <Foundation
              name="telephone"
              size={22}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={"Địa chỉ nhà"}
          icon={
            <FontAwesome5
              name="house-user"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        {/* <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Text style={{ color: "#666", marginLeft: 5, marginTop: 5 }}>
              {selectedTime
                ? `${selectedTime.getDate()}/${
                    selectedTime.getMonth() + 1
                  }/${selectedTime.getFullYear()}`
                : dobLabel}
            </Text>
          </TouchableOpacity>
        </View>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={selectedTime || date}
            onChange={handleTimeChange}
          />
        )} */}

        <TouchableOpacity
          onPress={() => navigation.push("profile/change-password")}
        >
          <Text style={styles.forgetPassword}>Đổi mật khẩu?</Text>
        </TouchableOpacity>
        <CustomButton label={"Cập nhật"} onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateInformation;
