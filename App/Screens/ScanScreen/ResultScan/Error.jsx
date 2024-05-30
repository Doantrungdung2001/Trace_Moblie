import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import PageHeading from "../../../Components/PageHeading/PageHeading";
import React from "react";

const Error = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <PageHeading title={"Kết quả quét mã"} />
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-1024.png",
            }}
            style={styles.avatar}
          />
          <Text style={styles.fake}> Sản phẩm không có trong hệ thống</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Error;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  fake: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    color: "red",
    textAlign: "center",
  },
});
