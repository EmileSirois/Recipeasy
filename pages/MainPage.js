import { Text, Button, TextInput, View } from "react-native";
import { useMemo, useState } from "react";
import { styles } from "../style/Styles.js";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import ToastManager, { Toast } from "toastify-react-native";
import Field from "../components/Field.js";

export default function MainPage({ navigation, route }) {
  const { mode, recipe } = route.params;

  const options = useMemo(() => [
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
  ]);

  const name = recipe?.name ?? "";
  const [description, setDescription] = useState(recipe?.description ?? "");
  const [hours, setHours] = useState(recipe?.durationHours ?? 0);
  const [minutes, setMinutes] = useState(recipe?.durationMinutes ?? 0);
  const [selectedId, setSelectedId] = useState(
    recipe ? String(recipe.category) : undefined,
  );
  let isEdit = mode === "edit";

  function handleDelete() {
    navigation.replace("ListPage");
  }

  function handleSave() {
    // check si les données sont valides
    let errorString = "";

    if (!selectedId) {
      errorString += "Catégorie non séléctionnée \n";
      console.log("pas de categorie");
    }
    if (!name) {
      errorString += "Nom requis \n";
    }
    if (hours == 0 && minutes == 0) {
      errorString += "Durée suppérieur à 0 requise \n";
    }
    if (!description) {
      errorString += "Description Requise \n";
    }

    if (errorString) {
      Toast.error(errorString);
    } else {
      Toast.success("Enrigestrement valide");
      navigation.navigate("ListPage");
    }
  }

  return (
    <View name="MainView" style={[styles.centerBox, styles.recipeContainer]}>
      <RadioGroup
        containerStyle={{ flex: 1, justifyContent: "space-between" }}
        name="MealTypeGroup"
        radioButtons={options}
        layout="row"
        onPress={setSelectedId}
        selectedId={selectedId}
      />

      <View name="NameInputView" style={{ flex: 1 }}>
        <Field placeholder="Name" value={name} />
      </View>

      <View name="DurationView" style={[styles.durationPicker]}>
        <Text style={{ flex: 1 }}>Duration</Text>

        <Picker
          value={hours}
          onValueChange={setHours}
          name="DurationHoursPicker"
          style={{ flex: 3 }}
        >
          {Array.from({ length: 13 }, (_, i) => {
            return <Picker.Item key={i} label={`${i}h`} value={i} />;
          })}
        </Picker>

        <Text style={{ flex: 1 }}>:</Text>

        <Picker
          value={minutes}
          onValueChange={setMinutes}
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
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {!isEdit && (
        <Button
          name="SaveButton"
          color="black"
          title="Save"
          onPress={handleSave}
        />
      )}
      {isEdit && (
        <Button
          name="DeleteButton"
          color="black"
          title="Delete"
          onPress={handleDelete}
        />
      )}
      <ToastManager />
    </View>
  );
}
