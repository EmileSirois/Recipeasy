import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles, customTheme } from "./style/Styles.js";
import { Button } from "react-native";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import FormPage from "./pages/FormPage.js";
import ListPage from "./pages/ListPage.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator style={[styles.screen]} initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="FormPage" component={FormPage} />
        <Stack.Screen
          name="ListPage"
          component={ListPage}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Log out"
                color={customTheme.colors.background}
                onPress={() => navigation.popTo("LoginPage")} //si le premier screen de la stack est tjrs login, poptotop?
              />
            ),
            headerBackVisible: false, //potentiellement redondant si la stack est bien fait
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
