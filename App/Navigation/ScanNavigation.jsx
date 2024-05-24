import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Scan from "../Screens/ScanScreen/Scan/Scan";
import ResultScan from "../Screens/ScanScreen/ResultScan/ResultScan";
const Stack = createStackNavigator();

const ScanNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="scan" component={Scan} />
      <Stack.Screen name="result-scan" component={ResultScan} />
    </Stack.Navigator>
  );
};

export default ScanNavigation;
