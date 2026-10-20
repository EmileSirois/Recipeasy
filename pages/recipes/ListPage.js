import { Text, Button, View, FlatList, StyleSheet, Pressable } from "react-native";
import { styles, customTheme } from "../../style/Styles.js";
import { useState, useEffect } from "react";
import RecipeService from "../../services/recipes.js";
import auth from '../../services/auth.js';
import User from "../../models/user.js";

const Item = ({id, category, name, duration_hours, duration_minutes, description, onPress }) => (
  <Pressable style={({ pressed }) => [
      styles.item,
      pressed && ItemStyles.itemPressed,
    ]} 
    onPress = {onPress}>

    <View style={{flex: 1, flexDirection: "row", gap: 10, alignItems: "center"}}>
      <Text style={ItemStyles.category}>{category}</Text>
      <Text style={ItemStyles.title}>{name}</Text>
    </View>

    <View style={{flex: 1, flexDirection: "row", gap: 10, alignItems: "center"}}>
      <Text style={ItemStyles.duration}>{duration_hours}h {duration_minutes}min</Text>
      <Text 
        style={ItemStyles.description} 
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {description}
      </Text>
    </View>
  </Pressable>
);

const Separator = () => <View style={styles.separator} />;

const emptyListMessage = () => (
  <View style={styles.container}>
    <Text style={ItemStyles.emptyListMessage}>No recipes available.</Text>
  </View>
);

export default function ListPage({ navigation, route }) {
  const [recipes, setRecipes] = useState([]); 
  const currentUser = new User(auth.currentUser);
  const userId = currentUser.id;

  useEffect(() => {
    const fetchRecipes = async () => {
      if (userId) {
        const recipesList = await RecipeService.getAll(userId);
        setRecipes(recipesList);
      }
    };

    fetchRecipes();
  }, [route.params?.userId]);

  function handleAdd() {
    navigation.navigate("FormPage");
  }

  function handleListPress(id) {
    let recipe = recipes.find((recipe) => recipe.id === id);
    navigation.navigate("FormPage", { recipe });
  }

  return (
    <View name="LoginView" style={[styles.listContainer, styles.centerBox]}>
      <FlatList
        style={{flex: 1}}
        data={recipes}
        renderItem={({item}) => <Item {...item} onPress={() => handleListPress(item.id)} />}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={emptyListMessage}
      />
      
      <Pressable
        onPress={() => handleAdd()}
        accessibilityRole="button"
        style={[
          styles.button,
          styles.addButton
        ]}>
        <Text style={styles.saveText}>Add</Text>
      </Pressable>
    </View>
  );
}

const ItemStyles = StyleSheet.create({
  title: {
    fontSize:20,
  },
  category: {
    fontSize:16,
    fontWeight: "bold",
  },
  duration: {
    fontSize:14,
    color: "#666",
  },
  description: {
    fontSize:12,
    color: "#888",
  },
  item: { 
    padding: 16, 
    backgroundColor: "white" 
  },
  itemPressed: { 
    opacity: 0.5
  },
  emptyListMessage: {
    fontSize: 16,
    color: customTheme.colors.card,
  },
});