import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/Entypo';
import P from 'ToDoList/src/components/TextGlobal';
import { connect } from 'react-redux';
import { get_task_id } from 'ToDoList/src/actions/taskActions';
import { open_modal_op } from 'ToDoList/src/actions/modalActions';
class Item extends PureComponent {
	modalOn() {
		this.props.get_task_id({
			key: this.props.id,
			name: this.props.task,
			date: this.props.date,
			check: this.props.check
		});
		this.props.open_modal_op();
	}
	render() {
		return (
			<Button onLongPress={() => this.modalOn()}>
				<Div width="10%">
					{this.props.check ? (
						<Icon name={'check'} size={15} style={{ color: '#F73E81' }} />
					) : (
						<Icon name={'circle'} size={15} style={{ color: '#000' }} />
					)}
				</Div>
				<Div width="60%">
					<P text={this.props.task} color="#AAA3A5" />
				</Div>
				<Div width="30%">
					<P text={this.props.date} size={15} color="#D7D2D4" />
				</Div>
			</Button>
		);
	}
}

const Div = styled.View`
	width: ${(props) => (!!props.width ? props.width : '100%')};
	height: ${(props) => (!!props.height ? props.height : '100%')};
	flex-flow: ${(props) => (!!props.flexFlow ? props.flexFlow : 'column')};
	justify-content: ${(props) => (!!props.justify ? props.justify : 'center')};
	align-items: ${(props) => (!!props.align ? props.align : 'flex-start')};
`;
const Button = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	flex-flow: row;
`;

const mapStateToProps = (state) => {
	return {
		modal: state.modalHandle
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		open_modal_op: () => dispatch(open_modal_op()),
		get_task_id: (data) => dispatch(get_task_id(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
