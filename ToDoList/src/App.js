import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import NavigationOptions from './shareds/navigation';
import { createAppContainer } from 'react-navigation';
import styled from 'styled-components';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './shareds/configureStore';
import { loadingSuccess } from './actions/loginActions';
let store = configureStore();
import Firebase from '../lib/firebase';
export default class App extends Component {
	constructor(props) {
		super(props);
		Firebase.init();
		this.state = {
			initialRoute: 'Splash'
		};
	}

	componentDidMount() {
		this.getInitialPage();
	}
	getInitialPage() {
		firebase.auth().onAuthStateChanged((user) => {
			let initialRoute = user ? 'General' : 'AuthScreen';
			this.setState(
				(prevState, nextProps) => ({
					initialRoute: initialRoute
				}),
				() => {
					store.store.dispatch(loadingSuccess(user));
				}
			);
		});
	}
	renderContent() {
		const RootStack = createAppContainer(NavigationOptions(this.state.initialRoute));
		return <RootStack />;
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Provider store={store.store}>
					<PersistGate persistor={store.persistor}>{this.renderContent()}</PersistGate>
				</Provider>
			</SafeAreaView>
		);
	}
}
