import React, { PureComponent } from 'react';
import Title from 'ToDoList/src/components/TitleGlobal';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
import { ImageBackground } from 'react-native';
export default class Login extends PureComponent {
	render() {
		return (
			<ImageBackground source={require('ToDoList/assets/images/wallpaper.png')} style={{ flex: 1 }}>
				<Container>
					<Div height="30%">
						<Title text="Bienvenido" size="40px" />
					</Div>
					<Div height="70%">
						<LoginForm navigation={this.props.navigation} />
					</Div>
				</Container>
			</ImageBackground>
		);
	}
}

const Container = styled.View`
	flex: 1;
	width: 100%;
	padding: 0px 20px 0px 20px;
`;
const Div = styled.View`
	width: ${(props) => (!!props.width ? props.width : '100%')};
	height: ${(props) => (!!props.height ? props.height : '100%')};
	padding-top: ${(props) => (!!props.paddingTop ? props.paddingTop : 0)};
	padding-left: ${(props) => (!!props.paddingLeft ? props.paddingLeft : 0)};
	padding-bottom: ${(props) => (!!props.paddingBottom ? props.paddingBottom : 0)};
	padding-right: ${(props) => (!!props.paddingRight ? props.paddingRight : 0)};
	flex-flow: ${(props) => (!!props.flexFlow ? props.flexFlow : 'column')};
	justify-content: ${(props) => (!!props.justify ? props.justify : 'center')};
	align-items: ${(props) => (!!props.align ? props.align : 'flex-start')};
`;
