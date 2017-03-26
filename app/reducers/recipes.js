import createReducer from '../lib/createReducer';
import * as types from '../actions/types'

export const searchedRecipes = function(state, action) {
	if (state === undefined) {
		return {};
	}
	if (action.type === types.SET_SEARCHED_RECIPES) {
		let newState = {};
		action.recipes.forEach( (recipe) => {
			newState[recipe.href] = recipe;
		});
		return newState;
	}
	return state;
};