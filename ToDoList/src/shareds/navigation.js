import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../scenes/Splash';
import LoginScreen from '../scenes/Login';
import HomeScreen from '../scenes/Home';
import ListDetailScreen from '../scenes/Home/scenes/ListDetail';

const GeneralNavigation = createStackNavigator({
	Home: { screen: HomeScreen, navigationOptions: ({ navigation }) => ({ header: null }) },
	ListDetail: { screen: ListDetailScreen, navigationOptions: ({ navigation }) => ({ header: null }) }
});
const AuthScreenNavigation = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: ({ navigation }) => ({ header: null })
	}
});

const AppNavigator = (login) =>
	createSwitchNavigator(
		{
			Splash: {
				screen: SplashScreen,
				navigationOptions: ({ navigation }) => ({ header: null })
			},
			General: GeneralNavigation,
			AuthScreen: AuthScreenNavigation
		},
		{ initialRouteName: login }
	);

export default AppNavigator;
