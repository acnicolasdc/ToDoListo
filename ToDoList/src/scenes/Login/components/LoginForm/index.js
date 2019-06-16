import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import Text from 'ToDoList/src/components/TextGlobal';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 0,
			password: '',
			response: '',
			isFetching: false
		};
		this.singUp = this.singUp.bind(this);
		this.login = this.login.bind(this);
	}
	async singUp() {
		try {
			await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
			this.setState({
				response: 'Cuenta creada'
			});
			setTimeout(() => {
				this.props.navigation.navigate('General');
			}, 1500);
		} catch (error) {
			this.setState({
				response: error.toString()
			});
		}
	}
	async login() {
		this.setState({
			isFetching: true
		});
		try {
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
			this.setState({
				isFetching: true,
				response: 'Bienvenido a TodoListo'
			});
			setTimeout(() => {
				this.props.navigation.navigate('General');
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
				<Text text="Correo" />
				<Input
					placeholder=""
					value={this.state.email}
					autoCorrect={false}
					onChangeText={(email) => this.setState({ email })}
				/>
				<Text text="Contraseña" />
				<Input
					placeholder=""
					autoCorrect={false}
					secureTextEntry={true}
					value={this.state.password}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Submit onPress={this.login}>
					{this.state.isFetching ? (
						<ActivityIndicator size="large" color="#FFF" />
					) : (
						<Text text="Sing in" color="#FFF" />
					)}
				</Submit>
			</Form>
		);
	}
}

const Form = styled.View`
	flex-direction: column;
	width: 100%;
	height: auto;
`;
const Input = styled.TextInput`
	width: 100%;
	height: 50px;
	margin-top: 10px;
	border-radius: 5px;
	background-color: #f9f9f9;
	font-size: 15px;
	padding-left: 10px;
`;
const Submit = styled.TouchableOpacity`
	width: 100%;
	height: 60px;
	margin-top: 20px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: #f73e81;
`;
// const mapStateToProps = state => {
// 	return{
// 	  dataTask: state.task,
// 	}
//   }
// const mapDispatchToProps = dispatch => {
//   return {
//     create_task: (data) => dispatch(create_task(data)),
//     close_modal: () => dispatch(close_modal()),
//   }
// }

export default connect(null, null)(LoginForm);
