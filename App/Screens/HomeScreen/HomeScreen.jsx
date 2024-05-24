import { ScrollView } from "react-native";
import React from "react";
import ListService from "../../Components/ListSerivce/ListService";
import HeaderComponents from "../../Components/HeaderComponents/HeaderComponents";
import ListFarm from "../../Components/ListFarm/ListFarm";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HeaderComponents />
      <ListService />
      <ListFarm />
    </ScrollView>
  );
};

export default HomeScreen;
