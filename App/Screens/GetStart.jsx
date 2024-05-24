import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { COLORS, images } from "../Constants";
import { useNavigation } from "@react-navigation/native";
const GetStart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {" Chào mừng bạn đến với dịch vụ \n Trồng rau hộ !"}
        </Text>
        <Image source={images.getstart} style={styles.image} />
        <Text style={styles.desc}>
          {"Chào mừng bạn đến với dịch vụ \n Trồng rau hộ"}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.login]} onPress={() => navigation.push("Login")}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.register]} onPress={() => navigation.push("Register")}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: COLORS.green,
    fontWeight: "bold",
    fontFamily: "RobotoCondensed-Bold",
  },
  image: {
    width: 500,
    height: 200,
    marginTop: 39,
  },
  desc: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    marginTop: 30,
    color: COLORS.black,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-around",
  },
  button: {
    width: "48%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  login: {
    backgroundColor: COLORS.green,
    shadowColor: COLORS.green,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
  },
  register: {
    backgroundColor: "#DB4437",
    shadowColor: "#DB4437",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
  },
});
