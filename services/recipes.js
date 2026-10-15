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
}

const service = new RecipeService();
export default service;