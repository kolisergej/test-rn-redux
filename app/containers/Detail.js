import React, {Component} from 'react';
import {
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class Detail extends Component {
	recipe() {
		return this.props.searchedRecipes[this.props.navigationParams.href] || null;
	}

	render() {
		const recipe = this.recipe();
		if (!recipe) {
			return null;
		}
		return (
			<View style={{marginTop: 20}}>
				<TouchableHighlight style={{ paddingVertical: 20, backgroundColor: '#222' } } onPress={ () => {
					this.props.navigateBack()
				}}>
					<Text style={{color: 'red'}}>
					  Go Back
					</Text>
				</TouchableHighlight>
				<View>
					<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
					<Text style={styles.resultText}>{recipe.title}</Text>
				</View>			
				<Text style={{fontSize: 21}}>{recipe.ingredients}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	scene: {
		marginTop: 20,
		flex: 1
	},
	searchButton: {
		flex: 0.3
	},
	searchSection: {
		 height: 30,
		 borderBottomColor: '#000',
		 borderBottomWidth: 1,
		 padding: 5,
		 flexDirection: 'row'
	},
	scrollSection: {
		flex: 0.8
	},
	resultImage: {
		height: 160
	},
	resultText: {
		backgroundColor: '#000',
		color: '#FFF',
		height: 20,
	}, 
	searchInput: {
		flex: 0.7
	}
});

function mapStateToProps(state) {
	return {
		navigationParams: state.navigationParams,
		searchedRecipes: state.searchedRecipes
	};
}

export default connect(mapStateToProps)(Detail);