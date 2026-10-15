import Recipe from '../models/recipe.js'

export class RecipeService {

    
async getAll(userId) {
    const AUTH = btoa("emile:0E69cf2f61802212af$8ad173");

    const response = await fetch("http://martha.jh.shawinigan.info/queries/select-recipes/execute", {
        method: 'POST',
        body: JSON.stringify({ id: userId }),
        headers: {
            'auth': `${AUTH}`
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