import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import TabScren from "./App/Navigation/TabScren";
import GetStart from "./App/Screens/GetStart";
import Login from "./App/Screens/AuthScreen/Login/Login";
import Register from "./App/Screens/AuthScreen/Register/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  const [fontLoaded] = useFonts({
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
    ltalic: require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    thin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  const onLayOutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"GetStart"}
        >
          <Stack.Screen name="GetStart" component={GetStart} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />

          {/*Tab*/}
          <Stack.Screen name="Home" component={TabScren} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
