import * as types from './types';

export function addRecipe() {
	return {
		type: types.ADD_RECIPE,
	}
}

function headers() {
	return {
		'Accept': 'application/json',
		'Content-type': 'application/json',
		'dataType': 'json',
		'X-Requested-With': 'XMLHttpRequest',
		'X-Mashape-Key': 'qJUsbP6zFGmsh6OqUu4Swdr6H4Lvp1xJ8Ldjsns0FOkN4OP57g'
	}
}

export function fetchRecipes(ingredients) {
	return (dispatch, getState) => {
		const data = {
	    country: 'uk',
	    pretty: '1',
	    encoding: 'json',
	    listing_type: 'buy',
	    action: 'search_listings',
	    page: 1
	  };
	  data['place_name'] = ingredients;
	  const queryString = Object.keys(data)
	    .map((key) => key + '=' + encodeURIComponent(data[key]))
	    .join('&');

		fetch('https://api.nestoria.co.uk/api?' + queryString)
		.then(resp => resp.json())
		.then(json => {
			dispatch(setSearchedRecipes({recipes :json.response.listings}));
		})
		.catch( (err) => {
			console.log(err);
		});
	}
}

export function setSearchedRecipes( { recipes } ) {
	return {
		type: types.SET_SEARCHED_RECIPES,
		recipes
	}

}