import createReducer from '../lib/createReducer';
import * as types from '../actions/types'

export const searchedRecipes = function(state, action) {
	if (state == undefined) {
		return 0;
	}
	if (action.type == types.SET_SEARCHED_RECIPES) {
		let newState = {};
		action.recipes.forEach( (recipe) => {
			newState[recipe.img_url] = recipe;
		});
		return newState;
	}
	return state;
};

export const recipeCount = function(state, action) {
	if (state == undefined) {
		return 0;
	}
	if (action.type == types.SET_SEARCHED_RECIPES) {
		return action.recipes.length;
	}
	return state;
}

// export const recipeCount = createReducer(0, {
// 	[types.ADD_RECIPE](state, action) {
// 		return state + 10;
// 	}
// });