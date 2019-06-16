import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { create_task } from 'ToDoList/src/actions/taskActions';
import { close_modal_op } from 'ToDoList/src/actions/modalActions';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import OptionsModel from './components/OptionsModal';

class ModalOptionsGlobal extends Component {
	closeModal(){
		this.props.close_modal_op();
	}
	render() {
		return (
			<Modal isVisible={this.props.modal.modalOnOp} hideModalContentWhileAnimating={true}>
				<Button onPress={() => this.closeModal()}>
					<Icon name={'ios-close'} size={40} style={{ color: '#FFFF' }} />
				</Button>
				<OptionsModel/>
			</Modal>
		);
	}
}

const Button = styled.TouchableOpacity`
	width: 70px;
	height: 50px;
	position: absolute;
	top: 10px;
	right: 10px;
	justify-content: center;
	align-items: flex-end;
`;
const mapStateToProps = (state) => {
	return {
		modal: state.modalHandle,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		create_task: (data) => dispatch(create_task(data)),
		close_modal_op: () => dispatch(close_modal_op())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalOptionsGlobal);
