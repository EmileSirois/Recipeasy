import Recipe from '../models/recipe.js'
import { MARTHA_URL, MARTHA_AUTH } from "../config/config.js";

export class RecipeService {
    async getAll(userId) {
        let response

        try{
            response = await fetch(`${MARTHA_URL}/select-recipes/execute`, {
            method: 'POST',
            body: JSON.stringify({ id: userId }),
            headers: {
                'auth': MARTHA_AUTH
            }
        })
        } catch(e) {
            throw new Error("Impossible de joindre le serveur")
        }

        if (!response.ok) {
            throw new Error(`Erreur serveur (${response.status})`);
        }

        response = await response.json(); 
    
        if (!response.success) {
            return []
        }

        return response.data.map((recipe) => new Recipe(recipe))
    }

    async insert(recipe, userId) {
        recipe = {...recipe, user_id: userId} // TODO: replace with current user id
        let response

        try{
            response = await fetch(`${MARTHA_URL}/insert-recipe/execute`, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'auth': MARTHA_AUTH
            }
            })
        } catch(e) {
            throw new Error("Impossible de joindre le serveur")
        }

        if (!response.ok) {
            throw new Error(`Erreur serveur (${response.status})`);
        }

        response = await response.json(); 

        if (!response.success) {
            return false
        }
        else {
            return true
        }
    }

    async delete(recipeId, userId) {
        let response

        try{
            response = await fetch(`${MARTHA_URL}/delete-recipe/execute`, {
            method: 'POST',
            body: JSON.stringify({ id: recipeId, user_id: userId }),
            headers: {
                'auth': MARTHA_AUTH
            }
            })
        } catch(e) {
            throw new Error("Impossible de joindre le serveur")
        }

        if (!response.ok) {
            throw new Error(`Erreur serveur (${response.status})`);
        }

        response = await response.json(); 

        if (!response.success) {
            return false
        }
        else {
            return true
        }
    }

    async update(recipe) {
        let response

        try{
            response = await fetch(`${MARTHA_URL}/update-recipe/execute`, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'auth': MARTHA_AUTH
            }
            })
        } catch(e) {
            throw new Error("Impossible de joindre le serveur")
        }

        if (!response.ok) {
            throw new Error(`Erreur serveur (${response.status})`);
        }

        response = await response.json(); 

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