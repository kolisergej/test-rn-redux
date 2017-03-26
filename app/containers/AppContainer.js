import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import ApplicationTabs from '../components/ApplicationTabs';
import Detail from './Detail';
import {
	Animated,
	StyleSheet,
	View,
	NavigationExperimental
} from 'react-native';

const {
	Card: NavigationCard,
	Transitioner: NavigationTransitioner
} = NavigationExperimental;

const {
	PagerStyleInterpolator: NavigationPagerStyleInterpolator
} = NavigationCard;

class AppContainer extends Component {
	constructor(props) {
		super(props);
		this._render = this._render.bind(this);
    this._renderScene = this._renderScene.bind(this);
	}

  render() {
  	return (
  		<NavigationTransitioner
	  		navigationState={this.props.navigationState}
	  		render={this._render} />
	  );
  }
	
	_render(transitionProps) {
		console.log(this.props);
		const scenes = transitionProps.scenes.map( scene => {
  		const sceneProps = {
  			...transitionProps, 
  			...this.props,
  			scene,
  		}
  		return this._renderScene(sceneProps);
  	});
  	return (
  		<View style={{flex: 1}} >
  			{scenes}
  		</View>
  	);
	}
	
	_renderScene(sceneProps) {
		return <SceneContainer {...sceneProps} key={sceneProps.scene.key} />
	}
}

class SceneContainer extends Component {
	render() {
		const style = [
			styles.scene,
			NavigationPagerStyleInterpolator.forHorizontal(this.props),
		];
		const Scene = this.props.scene.route.key === 'ApplicationTabs' ? ApplicationTabs : Detail;		
		return (
			<Animated.View style={style}>
				<Scene {...this.props} style={style} />
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		position: 'absolute',
		bottom: 0,
		top: 0,
		left: 0,
		right: 0
	}
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
	return {
		navigationState: state.navigationState
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);