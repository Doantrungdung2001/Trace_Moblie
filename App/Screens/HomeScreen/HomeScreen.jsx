import { ScrollView, View } from "react-native";
import React from "react";
import ListService from "../../Components/ListSerivce/ListService";
import HeaderComponents from "../../Components/HeaderComponents/HeaderComponents";
import ListHistoryQR from "../../Components/ListHistoryQR/ListHistoryQR";
import ListFarm from "../../Components/ListFarm/ListFarm";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HeaderComponents />
      <ListService />
      <ListHistoryQR />
      <ListFarm />
    </ScrollView>
  );
};

export default HomeScreen;
