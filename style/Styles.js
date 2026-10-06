import { StyleSheet } from "react-native";
import { DefaultTheme } from "@react-navigation/native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centerBox: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    gap: 20,
    padding: 50,
    width: "100%",
  },
  recipeContainer: {
    flex: 1,
    gap: 15,
    padding: 15,
    width: "100%",
  },
  durationPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F5F5F5", // gris presque blanc pour le fond des écrans
    card: "#2C2C2C", // fond de l'entête (header/tab bar)
    text: "#FFFFFF", // texte clair pour contraster avec l'entête foncée
    border: "#2C2C2C", // pour que la bordure de l'entête matche
  },
};