import React, { Component } from 'react';
import Modal from 'react-native-modal';
import Options from './components/OptionsModal';
import styled from 'styled-components';
import { connect } from 'react-redux';

class ModalCloseGlobal extends Component {
	render() {
		return (
			<Modal isVisible={this.props.modal.closeSession} hideModalContentWhileAnimating={true}>
				<Container>
					<Options navigation={this.props.navigation} />
				</Container>
			</Modal>
		);
	}
}

const Container = styled.TouchableOpacity`
	width: 100%;
	height: auto;
	background-color: #fff;
	border-radius: 15px;
`;
const mapStateToProps = (state) => {
	return {
		modal: state.modalHandle
	};
};

export default connect(mapStateToProps, null)(ModalCloseGlobal);
