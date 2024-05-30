import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Scan from "../Screens/ScanScreen/Scan/Scan";
import ResultScan from "../Screens/ScanScreen/ResultScan/ResultScan";
import Error from "../Screens/ScanScreen/ResultScan/Error";
const Stack = createNativeStackNavigator();

const ScanNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="scan" component={Scan} />
      <Stack.Screen name="result-scan" component={ResultScan} />
      <Stack.Screen name="error-scan" component={Error} />
    </Stack.Navigator>
  );
};

export default ScanNavigation;
