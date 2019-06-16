import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { connect } from 'react-redux';
import { open_modal_close } from 'ToDoList/src/actions/modalActions';
class OptionsHome extends PureComponent {
	openModal() {
		this.props.open_modal_close();
	}
	render() {
		return (
			<Button onPress={() => this.openModal()}>
				<Icon name={'options'} size={25} style={{ color: 'gray' }} />
			</Button>
		);
	}
}
const Button = styled.TouchableOpacity`
	width: auto;
	height: auto;
	flex-flow: row;
`;
const mapDispatchToProps = (dispatch) => {
	return {
		open_modal_close: () => dispatch(open_modal_close())
	};
};

export default connect(null, mapDispatchToProps)(OptionsHome);
