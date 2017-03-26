import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{marginTop: 20}}>
				<Text>
				  About
				</Text>
			</View>
		);
	}
}