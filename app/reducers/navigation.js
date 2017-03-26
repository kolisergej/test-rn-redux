import * as types from '../actions/types'
import {
	NavigationExperimental,
	StatusBar
} from 'react-native';

const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils
} = NavigationExperimental;

const allTabs = [
	{key: 'home', index: 0},
	{key: 'about', index: 1},
];

export const tabs = function(state, action) {
	if (state === undefined) {
		return {key: 'home', index: 0, routes: allTabs};
	}
	if (action.type === types.SET_TAB) {
		return Object.assign({}, state, allTabs[action.index]);
	}

	return state;
}

export const navigationState = function(state, action) {
	if (state === undefined) {
		return {index: 0, routes: [
			{key: 'ApplicationTabs'},
			{key: 'Detail'},
		]};
	}
	if (action.type === types.NAVIGATION_FORWARD) {
		return NavigationStateUtils.forward(state);
	}
	if (action.type === types.NAVIGATION_BACK) {
		return NavigationStateUtils.back(state);
	}
	return state;
}

export const navigationParams = function(state, action) {
	if (state === undefined) {
		return {};
	}
	if (action.type === types.NAVIGATION_FORWARD) {
		return action.state;
	}

	return state;
}