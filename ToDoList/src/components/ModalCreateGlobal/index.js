import React, { Component } from 'react';
import Modal from 'react-native-modal';
import Form from './components/ModalForm';
import styled from 'styled-components';
import {connect} from "react-redux";
import {close_modal} from 'ToDoList/src/actions/modalActions';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class ModalCreateGlobal extends Component {
	openModal(){
		this.props.close_modal();
	}
	render() {
		return (		
			<Modal isVisible={this.props.modal.modalOn} hideModalContentWhileAnimating={true}>
				<Button onPress = { ()=>this.openModal() }>
				<Icon name={"ios-close"} size={40} style={{color:'#FFFF'}}/>
				</Button>
				<Container>
					<Form />
				</Container>
			</Modal>		
		);
	}
}
const Button = styled.TouchableOpacity`
    width:70px;
    height:50px;
	position:absolute;
	top:10px;
	right:10px;
	justify-content:center;
	align-items:flex-end;
`;
const Container = styled.TouchableOpacity`
    width:100%;
    height:auto;
    background-color:#FFF;
    border-radius:15px;
`;
const mapStateToProps = state => {
	return{
	  modal: state.modalHandle,
	}
  }
const mapDispatchToProps = dispatch => {
  return {
    close_modal: () => dispatch(close_modal()),
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(ModalCreateGlobal);