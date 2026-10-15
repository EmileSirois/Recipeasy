import Recipe from '../models/recipe.js'
import { MARTHA_URL, MARTHA_AUTH } from "../config/config.js";

export class RecipeService {
    async getAll(userId) {

        const response = await fetch(`${MARTHA_URL}/select-recipes/execute`, {
            method: 'POST',
            body: JSON.stringify({ id: userId }),
            headers: {
                'auth': MARTHA_AUTH
            }
        }).then((r) => r.json())

        if (!response.success) {
            return []
        }

        return response.data.map((recipe) => new Recipe(recipe))
    }

    async insert(recipe, userId) {
        recipe = {...recipe, user_id: userId} // TODO: replace with current user id
        const response = await fetch(`${MARTHA_URL}/insert-recipe/execute`, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'auth': MARTHA_AUTH
            }
        }).then((r) => r.json())

        console.log("insert response", response);

        if (!response.success) {
            return false
        }
        else {
            return true
        }
    }

    async delete(recipeId, userId) {
        const response = await fetch(`${MARTHA_URL}/delete-recipe/execute`, {
            method: 'POST',
            body: JSON.stringify({ id: recipeId, user_id: userId }),
            headers: {
                'auth': MARTHA_AUTH
            }
        }).then((r) => r.json())

        if (!response.success) {
            return false
        }
        else {
            return true
        }
    }
}

const service = new RecipeService();
export default service;