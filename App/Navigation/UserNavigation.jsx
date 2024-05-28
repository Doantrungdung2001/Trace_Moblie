import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Proflie from "../Screens/ProfileUserScreen/Profile/Profile";
import UpdateInformation from "../Screens/ProfileUserScreen/UpdateInformation/UpdateInformation";
import ChangePassword from "../Screens/ProfileUserScreen/ChangePassword/ChangePassword";
import ProfileInformation from "../Screens/ProfileUserScreen/ProfileInformation/ProfileInformation";
import Points from "../Screens/ProfileUserScreen/Points/Points";
import HistoryQRScan from "../Screens/ProfileUserScreen/HistoryQRScan/HistoryQRScan";
import Login from "../Screens/AuthScreen/Login/Login";
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="proflie" component={Proflie} />
      <Stack.Screen name="profile/info-view" component={ProfileInformation} />
      <Stack.Screen name="profile/update-info" component={UpdateInformation} />
      <Stack.Screen name="profile/change-password" component={ChangePassword} />
      <Stack.Screen name="profile/points" component={Points} />
      <Stack.Screen name="profile/history-qr-scan" component={HistoryQRScan} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
