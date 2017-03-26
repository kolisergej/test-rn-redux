import * as types from './types';

export function fetchRecipes(ingredients) {
	return (dispatch, getState) => {
		let options = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'dataType': 'json',
			}
		};
		const params = [
			`i=${encodeURIComponent(ingredients)}`,
			'p=1'
		].join('&');
		return fetch(`http://www.recipepuppy.com/api/?${params}`, options)
		.then(resp => resp.json())
		.then(json => {
			dispatch(setSearchedRecipes({recipes: json.results}));
		})
		.catch(err => console.log(err));
	}
}

export function setSearchedRecipes( { recipes } ) {
	return {
		type: types.SET_SEARCHED_RECIPES,
		recipes
	}

}