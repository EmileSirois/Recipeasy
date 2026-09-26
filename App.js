import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./style/Styles.js";
import { Button } from "react-native";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import MainPage from "./pages/MainPage.js";
import ListPage from "./pages/ListPage.js";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F5F5F5", // gris presque blanc pour le fond des écrans
    card: "#2C2C2C", // fond de l'entête (header/tab bar)
    text: "#FFFFFF", // texte clair pour contraster avec l'entête foncée
    border: "#2C2C2C", // pour que la bordure de l'entête matche
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator style={[styles.screen]} initialRouteName="LoginPage">
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen
              name="ListPage"
              component={ListPage}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Button
                    title="Log out"
                    color="#77716C"
                    onPress={() => navigation.navigate("LoginPage")}
                  />
                ),
                headerBackVisible: false,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
