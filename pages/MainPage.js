import { Text, Button, TextInput, View } from "react-native";
import { useMemo, useState } from "react";
import { styles } from "../style/Styles.js";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import ToastManager, { Toast } from "toastify-react-native";
import Field from "../components/Field.js";

export default function MainPage({ navigation, route }) {
  const { mode, recipe } = route.params;

  let options = ["Breakfast", "Lunch", "Dinner"].map((l, index) => ({
    id: index + 1,
    label: l,
    value: index + 1,
  }));

  const isEdit = mode === "edit";

  const [form, setForm] = useState({
    name: "",
    category: 0,
    durationHours: 0,
    durationMinutes: 0,
    description: "",
    ...recipe,
  });

  function handleDelete() {
    navigation.navigate("ListPage");
  }

  function handleSave() {
    // check si les données sont valides
    let errorString = "";

    if (form.category === 0) {
      errorString += "Catégorie non séléctionnée \n";
      console.log("pas de categorie");
    }
    if (!form.name) {
      errorString += "Nom requis \n";
    }
    if (form.durationHours === 0 && form.durationMinutes === 0) {
      errorString += "Durée suppérieur à 0 requise \n";
    }
    if (!form.description) {
      errorString += "Description Requise \n";
    }

    if (errorString) {
      Toast.error(errorString);
    } else {
      Toast.success("Enrigestrement valide");
      const updated = {
        ...recipe,
        ...form,
      };
      navigation.navigate("ListPage", { updatedRecipe: updated });
    }
  }

  return (
    <View name="MainView" style={[styles.centerBox, styles.recipeContainer]}>
      <RadioGroup
        containerStyle={{ flex: 1, justifyContent: "space-between" }}
        name="MealTypeGroup"
        radioButtons={options}
        layout="row"
        onPress={(selected) => setForm({ ...form, category: selected })}
        selectedId={form.category}
      />

      <View name="NameInputView" style={{ flex: 1 }}>
        <Field
          placeholder="Name"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </View>

      <View name="DurationView" style={[styles.durationPicker]}>
        <Text style={{ flex: 1 }}>Duration</Text>

        <Picker
          value={form.durationHours}
          onValueChange={(selected) =>
            setForm({ ...form, durationHours: selected })
          }
          name="DurationHoursPicker"
          style={{ flex: 3 }}
        >
          {Array.from({ length: 13 }, (_, i) => {
            return <Picker.Item key={i} label={`${i}h`} value={i} />;
          })}
        </Picker>

        <Text style={{ flex: 1 }}>:</Text>

        <Picker
          value={form.durationMinutes}
          onValueChange={(selected) =>
            setForm({ ...form, durationMinutes: selected })
          }
          name="DurationMinutesPicker"
          style={{ flex: 3 }}
        >
          {Array.from({ length: 60 }, (_, i) => {
            return <Picker.Item key={i} label={`${i}min`} value={i} />;
          })}
        </Picker>
      </View>

      <View name="DescriptionView" style={{ flex: 10 }}>
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          textAlignVertical="top"
          placeholder="Description"
          multiline={true}
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />
      </View>

      {!isEdit && (
        <Button
          name="SaveButton"
          color="#2C2C2C"
          title="Save"
          onPress={handleSave}
        />
      )}
      {isEdit && (
        <Button
          name="DeleteButton"
          color="#2C2C2C"
          title="Delete"
          onPress={handleDelete}
        />
      )}
      <ToastManager />
    </View>
  );
}
