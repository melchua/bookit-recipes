import { types, flow, applySnapshot } from "mobx-state-tree";
import axios from 'axios';

export const Recipe = types 
    .model("Recipe", {
        id: types.optional(types.number, () => Math.random()),
        label: types.string,
        image: types.maybe(types.string),
        url: types.string,
        // ingredients: types.array(),
        read: false
    })
    .actions(self => ({
        toggle() {
            self.read = !self.read;
        }
    }));

export const recipeStore = types 
    .model("recipeStore", {
        recipes: types.array(Recipe),
        // currentRecipe: types.number // or can we use the id from the Recipe above?
    })
    .actions(self => ({
        load: flow(function* load(searchTerms, maxResults) {

            // search terms:
            // number of results
            // search query string
            const edamamId = '61ca0b40';
            const edamamKey = 'ba35bb3c71bca265a527193f29da4501';
            try {
                const edamamRecipes = yield axios.get(`https://api.edamam.com/search?q=${searchTerms}&app_id=${edamamId}&app_key=${edamamKey}&from=0&to=${maxResults}`);        
                const eRecipes = edamamRecipes.data.hits;

                const formattedRecipes = eRecipes.map((hits) => {
                    return {
                        label: hits.recipe.label,
                        image: hits.recipe.image,
                        url: hits.recipe.url,
                        // ingredients: data.recipe.ingredients
                    }
                });
                applySnapshot(self.recipes, formattedRecipes);
            } catch (e) {
                console.log(e.message);
            }
        }),
    }));
