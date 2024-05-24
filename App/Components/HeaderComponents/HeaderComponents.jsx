import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./Header.Styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
const HeaderComponents = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hà Nội- Hai Bà Trưng</Text>
          <Text style={styles.headerSubtitle}>24 March, 18pm - 19pm</Text>
        </View>

        <View style={styles.body}>
          <Image
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Mr. Cody Fisher</Text>
            <Text style={styles.userRole}>Professor</Text>
          </View>
        </View>
      </View>

      <View style={styles.titleSearch}>
        <Text style={styles.headingText}>Bạn muốn trồng rau gì?</Text>
      </View>
      <TouchableOpacity
        style={styles.searchSectionWrapper}
        onPress={() => navigation.push("search-plants")}
      >
        <View style={styles.searchBar}>
          <AntDesign
            name="search1"
            size={25}
            color="black"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Nhập cây muốn trồng"
            onFocus={() => navigation.push("search-plants")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponents;
