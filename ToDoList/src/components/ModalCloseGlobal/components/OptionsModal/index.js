import React, { Component } from 'react';
import styled from 'styled-components';
import Text from 'ToDoList/src/components/TextGlobal';
import Title from 'ToDoList/src/components/TitleGlobal';
import { connect } from 'react-redux';
import { close_modal_close } from 'ToDoList/src/actions/modalActions';
import * as firebase from 'firebase';

class OptionsModal extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}
	closeModal() {
		this.props.close_modal_close();
	}
	async logout() {
		try {
			await firebase.auth().signOut();

			setTimeout(() => {
				this.props.close_modal_close();
				this.props.navigation.navigate('AuthScreen');
			}, 1500);
		} catch (error) {
			this.setState({
				response: error.toString()
			});
		}
	}
	render() {
		return (
			<Form>
				<Div height="auto">
					<Title text="¿Quieres cerrar sesion?" size="20px" />
				</Div>
				<Div flexFlow="row" justify="center" align="center" height="auto" marginTop="15px">
					<Div width="50%" height="auto" paddingRight="5px">
						<Submit onPress={() => this.closeModal()} backgroundColor="#F9F9F9">
							<Text text="No" color="#CCC" />
						</Submit>
					</Div>

					<Div width="50%" height="auto" paddingBottom="5px">
						<Submit onPress={this.logout}>
							<Text text="Si" color="#FFF" />
						</Submit>
					</Div>
				</Div>
			</Form>
		);
	}
}

const Form = styled.View`
	padding: 10px 20px 10px 20px;
	flex-direction: column;
	width: 100%;
	height: auto;
	background-color: #fff;
	border-radius: 15px;
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
	margin-top: ${(props) => (!!props.marginTop ? props.marginTop : 0)};
	margin-left: ${(props) => (!!props.marginLeft ? props.marginLeft : 0)};
	margin-bottom: ${(props) => (!!props.marginBottom ? props.marginBottom : 0)};
	margin-right: ${(props) => (!!props.marginRight ? props.marginRight : 0)};
`;
const Submit = styled.TouchableOpacity`
	width: 100%;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: ${(props) => (!!props.backgroundColor ? props.backgroundColor : '#f73e81')};
`;
const mapStateToProps = (state) => {
	return {
		dataTask: state.task,
		modal: state.modalHandle
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		close_modal_close: () => dispatch(close_modal_close())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsModal);
