import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TouchableHighlight,
	ScrollView,
	Text,
	TextInput,
	Image
} from 'react-native';
import { connect } from 'react-redux'

class Home extends Component {
	searchPressed() {
		this.props.fetchRecipes('london');
	}

	render() {
		return (
			<View style={{marginTop: 20}}>
				<View>
					<TouchableHighlight onPress={ () => this.searchPressed() }>
						<Text>Fetch recipes</Text>
					</TouchableHighlight>
				</View>
				<ScrollView>
				</ScrollView>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		searchedRecipes: state.searchedRecipes
	};
}

export default connect(mapStateToProps)(Home);