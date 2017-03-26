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
	constructor(props) {
		super(props);
		this.state = {searching: false, ingredientsInput: ''};
	}

	searchPressed() {
		this.setState({searching: true});
		this.props.fetchRecipes(this.state.ingredientsInput).then( () => {
			this.setState({searching: false});
		});
	}

	recipes() {
		return Object.keys(this.props.searchedRecipes).map((recipe) => this.props.searchedRecipes[recipe]);
	}

	render() {
		return (
			<View style={styles.scene}>
				<View style={styles.searchSection}>
					<TextInput style={styles.searchInput}
						returnKeyType='search'
						placeholder='Ingredients'
						onChangeText={ (ingredients) => this.setState({ingredientsInput: ingredients}) }
						value={this.state.ingredientsInput}
					/>
					<TouchableHighlight style={styles.searchButton} onPress={ () => this.searchPressed() }>
						<Text>Fetch recipes</Text>
					</TouchableHighlight>
				</View>
				<ScrollView style={styles.scrollSection}>
					{!this.state.searching && this.recipes().map((recipe) => {
						return <TouchableHighlight key={recipe.href} 
							onPress={ () => this.props.navigate({ key: 'Detail', href: recipe.href })}> 
							<View>
								<Image source={{uri: recipe.thumbnail}} style={styles.resultImage}/>
								<Text style={styles.resultText}>{recipe.title}</Text>
							</View>
						</TouchableHighlight>
					})}
					{this.state.searching ? <Text>Searching...</Text> : null}
				</ScrollView>
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
		searchedRecipes: state.searchedRecipes
	};
}

export default connect(mapStateToProps)(Home);