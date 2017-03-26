import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TabBarIOS,
	Text,
	TabBarItemIOS
} from 'react-native';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import About from '../containers/About';

class ApplicationTabs extends Component {
	onPress(tabIndex) {
		this.props.setTab(tabIndex);
	}

	renderScene(component) {
		return (
			<View style={{flex: 1}}>
				{React.createElement(component, this.props)}
			</View>
		);
	}

	render() {
		return (
			<TabBarIOS style={{flex: 1}}>
				<TabBarIOS.Item 
					selected={this.props.tabs.index === 0}
					onPress={ () => this.onPress(0)}
					systemIcon='favorites'>
					{this.renderScene(Home)}
				</TabBarIOS.Item>
				<TabBarIOS.Item
					selected={this.props.tabs.index === 1}
					onPress={ () => this.onPress(1) }
					systemIcon='more'>
					{this.renderScene(About)}
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}

function mapStateToProps(state) {
	return {
		tabs: state.tabs
	}
}

export default connect(mapStateToProps)(ApplicationTabs);