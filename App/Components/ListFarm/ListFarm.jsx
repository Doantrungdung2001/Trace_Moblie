import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Heading from "../Heading/Heading";
import styles from "./ListFarm.Styles";
import useListFarm from "./useListFarm";

export default Album = () => {
  const navigation = useNavigation();
  const { allFarm, isSuccessAllFarm, isLoadingAllFarm } = useListFarm();
  // const [results, setResults] = useState(allFarm);
  return (
    <View style={styles.containerFarm}>
      <View>
        <Heading text={"Danh sách nông trại"} />
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 30 }}
          onPress={() => {
            navigation.push("service/list-farm-detail");
          }}
        >
          <Text style={{ color: "green" }}>Tất cả nông trại</Text>
        </TouchableOpacity>
      </View>
      {isSuccessAllFarm && (
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={allFarm.slice(0, 6)}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            ItemSeparatorComponent={() => {
              return <View style={styles.separator} />;
            }}
            renderItem={(post) => {
              const item = post.item;
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() =>
                    navigation.push("detail-farm", { farmInfo: item })
                  }
                >
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.avatar }}
                    />
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.count}>{item.district}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </SafeAreaView>
      )}
    </View>
  );
};
