import { Text, Button, TextInput, View } from "react-native";
import { styles } from "../style/Styles.js";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import Field from "../components/Field.js";

export default function MainPage() {
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
    <View name="MainView" style={[styles.centerBox, styles.recipeContainer]}>
      <RadioGroup
        containerStyle={{ flex: 1, justifyContent: "space-between" }}
        name="MealTypeGroup"
        radioButtons={options}
        layout="row"
      />

      <View name="NameInputView" style={{ flex: 1 }}>
        <Field placeholder="Name" />
      </View>

      <View name="DurationView" style={[styles.durationPicker]}>
        <Text style={{ flex: 1 }}>Duration</Text>

        <Picker name="DurationHoursPicker" style={{ flex: 3 }}>
          <Picker.Item label="0h" value="1" />
          <Picker.Item label="1h" value="2" />
        </Picker>

        <Text style={{ flex: 1 }}>:</Text>

        <Picker name="DurationMinutesPicker" style={{ flex: 3 }}>
          <Picker.Item label="0min" value="1" />
          <Picker.Item label="1min" value="2" />
        </Picker>
      </View>

      <View name="DescriptionView" style={{ flex: 10 }}>
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          textAlignVertical="top"
          placeholder="Description"
          multiline={true}
        />
      </View>

      <Button name="SaveButton" color="black" title="Save" />
    </View>
  );
}
