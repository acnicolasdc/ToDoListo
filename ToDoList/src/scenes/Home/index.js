import React, { Component } from 'react';
import WelcomeHome from './components/WelcomeHome';
import OptionsHome from './components/OptionsHome';
import SummaryListHome from './components/SummaryListHome';
import styled from 'styled-components';
import Modal from 'ToDoList/src/components/ModalCreateGlobal';
import ModalClose from 'ToDoList/src/components/ModalCloseGlobal';
import { ImageBackground } from 'react-native';
export default class Home extends Component {
	render() {
		return (
			<ImageBackground source={require('ToDoList/assets/images/wallpaper.png')} style={{ flex: 1 }}>
				<Container>
					<Div height="30px" align="flex-end">
						<OptionsHome navigation={this.props.navigation} />
					</Div>
					<Div height="20%">
						<WelcomeHome />
					</Div>
					<Div height="80%" paddingLeft="10px" paddingRight="10px" justify="flex-start">
						<SummaryListHome navigation={this.props.navigation} />
					</Div>
					<Modal />
					<ModalClose navigation={this.props.navigation} />
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
