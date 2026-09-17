import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function Field({ props }) {
  return (
    <TextInput
      style={[styles.textInput, props.style]}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

function LoginPage({ props }) {
  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Field props={{ placeholder: "Username" }} />
      <Field props={{ placeholder: "Password", secureTextEntry: true }} />
      <Button name="CreateAccountButton" color="black" title="Create Account" />

      <View
        name="SignUpLinkView"
        style={{ alignItems: "center", marginTop: 10 }}
      >
        <Text
          name="SignUpLink"
          style={{
            color: "blue",
            textDecorationLine: "underline",
            fontSize: 12,
          }}
        >
          Sign up!
        </Text>
      </View>
    </View>
  );
}

function SignUpPage({ props }) {
  return (
    <View name="SignUpView" style={[styles.formContainer, styles.centerBox]}>
      <Field props={{ placeholder: "Username" }} />
      <Field props={{ placeholder: "Password", secureTextEntry: true }} />
      <Field
        props={{ placeholder: "Password Confirmation", secureTextEntry: true }}
      />
      <Button name="CreateAccountButton" color="black" title="Create Account" />
    </View>
  );
}

function MainPage({ props }) {
  return (
    <View name="MainView" style={[styles.centerBox, styles.recipeContainer]}>
      <RadioGroup
        containerStyle={{ flex: 1, justifyContent: "space-between" }}
        name="MealTypeGroup"
        radioButtons={props.options}
        layout="row"
      />

      <View name="NameInputView" style={{ flex: 1 }}>
        <Field props={{ placeholder: "Name" }} />
      </View>

      <View name="DurationView" style={[styles.durationPicker]}>
        <Text>Duration</Text>

        <Picker name="DurationHoursPicker" style={{ width: "30%" }}>
          <Picker.Item label="0h" value="1" />
          <Picker.Item label="1h" value="2" />
        </Picker>

        <Text>:</Text>

        <Picker name="DurationMinutesPicker" style={{ width: "30%" }}>
          <Picker.Item label="0min" value="1" />
          <Picker.Item label="1min" value="2" />
        </Picker>
      </View>

      <View name="DescriptionView" style={{ flex: 10 }}>
        <TextInput
          style={[styles.textInput, { height: "100%" }]}
          textAlignVertical="top"
          placeholder="Description"
          multiline={true}
        />
      </View>

      <Button name="SaveButton" color="black" title="Save" />
    </View>
  );
}

export default function App() {
  const options = [
    {
      id: "1",
      label: "Breakfast",
      value: "1",
    },
    {
      id: "2",
      label: "Lunch",
      value: "2",
    },
    {
      id: "3",
      label: "Dinner",
      value: "3",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.screen]}>
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        <MainPage props={{ options }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centerBox: {
    flex: 1,
    maxWidth: 600,
  },
  formContainer: {
    maxHeight: "60%",
    gap: 20,
    padding: 20,
  },
  recipeContainer: {
    maxHeight: "90%",
    gap: 15,
    padding: 15,
    width: "100%",
  },
  textInput: {
    height: 40,
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
