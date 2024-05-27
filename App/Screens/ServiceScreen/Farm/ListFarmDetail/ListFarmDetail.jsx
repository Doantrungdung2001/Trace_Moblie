import {
  FlatList,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import CardFarm from "../../../../Components/CardFarm/CardFarm";
import useListFarm from "../../../../Components/ListFarm/useListFarm";
import PageHeading from "../../../../Components/PageHeading/PageHeading";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./ListFarmDetail.Styles";
import Heading from "../../../../Components/Heading/Heading";

const ListFarmDetail = () => {
  const { allFarm, isSuccessAllFarm, isLoadingAllFarm } = useListFarm();
  const param = useRoute().params;
  const navigation = useNavigation();

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredFarms, setFilteredFarms] = useState([]);

  const handleFilterPress = (index) => {
    setSelectedFilter(index);
  };

  useEffect(() => {
    if (searchText) {
      const filtered = allFarm.filter(
        (farm) =>
          farm.name.toLowerCase().includes(searchText.toLowerCase()) ||
          farm.district.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredFarms(filtered);
    } else {
      setFilteredFarms(allFarm);
    }
  }, [searchText, allFarm]);

  return (
    <ScrollView>
      <View style={{marginTop: 20}}>
        <Heading text={"Danh sách nông trại"} />
      </View>

      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Nhập tên nông trại, địa chỉ, ..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
          <AntDesign name="search1" size={28} color="white" />
        </TouchableOpacity>
      </View>
      {/* Filter */}
      {/* <View style={{ margin: 5 }}>
        <Text style={styles.filterTitle}>Lọc</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 10,
            marginBottom: 10,
          }}
        >
          {dataFilter.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                handleFilterPress(index);
              }}
              style={[
                styles.filterContainer,
                selectedFilter === index && { backgroundColor: COLORS.primary },
              ]}
              key={index}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View> */}
      {isSuccessAllFarm && (
        <View style={styles.container}>
          <FlatList
            style={{ margin: 10 }}
            data={filteredFarms}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CardFarm farm={item} key={index} />
            )}
          />
        </View>
      )}
      {isLoadingAllFarm && <ActivityIndicator size="large" color="#00ff00" />}
    </ScrollView>
  );
};

export default ListFarmDetail;
