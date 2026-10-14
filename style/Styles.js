import { StyleSheet } from "react-native";
import { DefaultTheme } from "@react-navigation/native";

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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerBox: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
  },
  formContainer: {
    gap: 20,
    padding: 50,
  },
  recipeContainer: {
    flex: 1,
    gap: 15,
    padding: 15,
  },
  durationPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: customTheme.colors.border,
    marginHorizontal: 16,
  },
  logOutBtn: {
    marginRight: 10, 
    backgroundColor: customTheme.colors.background
  },
  logOutBtnText: {
    color: customTheme.colors.card,
    padding: 10,
    fontWeight: "bold",
  },
  // deleteButton: {
  //   backgroundColor: customTheme.colors.background,
  //   padding: 10,
  //   alignItems: "center",
  //   borderRadius: 3,
  //   borderWidth: 2,
  //   borderColor: "red",
  // },
  // deleteText: {
  //   color: "red",
  //   fontWeight: "bold",
  // },
  button: {
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: customTheme.colors.card,
    borderColor: customTheme.colors.border,
  },
  saveText: {
    color: customTheme.colors.text,
    fontWeight: "600",
  },
  deleteButton: {
    backgroundColor: customTheme.colors.background,
    padding: 10,
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "red",
  },
  deleteText: {
    color: "red",
    fontWeight: "600",
  },
});

