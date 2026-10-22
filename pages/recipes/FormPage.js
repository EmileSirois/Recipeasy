import { Text, View, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "../../style/Styles.js";
import RadioGroup from "react-native-radio-buttons-group";
import { Picker } from "@react-native-picker/picker";
import ToastManager, { Toast } from "toastify-react-native";
import Field from "../../components/Field.js";
import recipes from "../../services/recipes.js";
import auth from "../../services/auth.js";

export default function FormPage({ navigation, route }) {
  const { recipe = {} } = route.params ?? {};

  let options = ["Breakfast", "Lunch", "Dinner"].map((l, index) => ({
    id: index + 1,
    label: l,
    value: index + 1,
  }));

  const isEmpty = Object.keys(recipe).length === 0; // switch boutons

  const [form, setForm] = useState({
    name: "",
    category: 0,
    duration_hours: 0,
    duration_minutes: 0,
    description: "",
    id: recipe.id ?? null,
    ...recipe,
  });

  async function handleDelete() {
    try{
      const success = await recipes.delete(recipe.id, auth.currentUser.id);
      if (success) {
        navigation.replace("ListPage");
      }
      else{
        Toast.error("Erreur lors de la suppression");
      }
    } catch(e) {
      Toast.error(e.message);
    }
  }

  async function handleSave() {
    const updated = {
      ...recipe,
      ...form,
    };

    updated.user_id = auth.currentUser.id; // TODO: replace with current user id

    try{
      const success = await recipes.update(updated);
      if (success) {
        navigation.replace("ListPage");
      }
      else{
        Toast.error("Erreur lors de la mise à jour");
      }
    } catch(e){
      Toast.error(e.message);
    }
  }

  async function handleAdd(action) {
    // check si les données sont valides
    let errorLog = [];

    if (form.category === 0) {
      errorLog.push("Catégorie non séléctionnée");
    }
    if (!form.name) {
      errorLog.push("Nom requis");
    }
    if (form.duration_hours === 0 && form.duration_minutes === 0) {
      errorLog.push("Durée suppérieur à 0 requise");
    }

    if (errorLog.length > 0) {
      Toast.error(errorLog.join("\n"));
    } else if (action === "add") {
      // Toast.success("Enrigestrement valide");
      const updated = {
        ...recipe,
        ...form,
      };
      
      try{
        const success = await recipes.insert(updated, auth.currentUser.id);
      
        if (success) {
          navigation.replace("ListPage");
        }
        else{
          Toast.error("Erreur lors de l'enregistrement");
        }
      } catch(e){
        Toast.error(e.message);
      }
      
    }
    else if (action === "update") {
      handleSave();
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
        <Text style={{ flex: 2 }}>Duration</Text>

        <Picker
          selectedValue={form.duration_hours}
          onValueChange={(selected) =>
            setForm({ ...form, duration_hours: selected })
          }
          name="duration_hoursPicker"
          style={{ flex: 3 }}
        >
          {Array.from({ length: 13 }, (_, i) => {
            return <Picker.Item key={i} label={`${i}h`} value={i} />;
          })}
        </Picker>

        <Text style={{ flex: 1 }}>:</Text>

        <Picker
          selectedValue={form.duration_minutes}
          onValueChange={(selected) =>
            setForm({ ...form, duration_minutes: selected })
          }
          name="duration_minutesPicker"
          style={{ flex: 3 }}
        >
          {Array.from({ length: 60 }, (_, i) => {
            return <Picker.Item key={i} label={`${i}min`} value={i} />;
          })}
        </Picker>
      </View>

      <View name="DescriptionView" style={{ flex: 10 }}>
        <Field
          style={{ flex: 1 }}
          textAlignVertical="top"
          placeholder="Description"
          multiline={true}
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />
      </View>

      {isEmpty && (
        <Pressable
          onPress={() => handleAdd("add")}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.button,
            styles.saveButton,
            pressed && { opacity: 0.6 },
          ]}>
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      )}
      <View style={{ flex: 1, flexDirection: "row" }} >
        {!isEmpty && (
          <Pressable
            onPress={handleDelete}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.deleteButton,
              pressed && { opacity: 0.6 },
            ]}>
            <Text style={styles.deleteText}>Delete</Text>
          </Pressable>
        )}
        {!isEmpty && (
          <Pressable
            onPress={() => handleAdd("update")}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.button,
              styles.saveButton,
              pressed && { opacity: 0.6 },
            ]}>
            <Text style={styles.saveText}>Save</Text>
          </Pressable>
        )}
      </View>
      <ToastManager />
    </View>
  );
}
