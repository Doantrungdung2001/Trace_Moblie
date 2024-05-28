import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ListFarmDetail from "../Screens/ServiceScreen/Farm/ListFarmDetail/ListFarmDetail";
import DetailFarm from "../Screens/ServiceScreen/Farm/DetailFarm/DetailFarm";
import Points from "../Screens/ProfileUserScreen/Points/Points";
import HistoryQRScan from "../Screens/ProfileUserScreen/HistoryQRScan/HistoryQRScan";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />

      {/* service */}
      <Stack.Screen name="service/list-farm-detail" component={ListFarmDetail} />
      <Stack.Screen name="detail-farm" component={DetailFarm} />

      <Stack.Screen name="service/points" component={Points} />
      <Stack.Screen name="service/history-qr-scan" component={HistoryQRScan} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
