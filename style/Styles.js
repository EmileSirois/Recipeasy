import { StyleSheet } from "react-native";

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
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
  },
  durationPicker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
