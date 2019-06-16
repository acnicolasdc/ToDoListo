import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/Entypo';
import P from 'ToDoList/src/components/TextGlobal';

export default class Item extends PureComponent {
	render() {
		return (
			<Button>
				<Div width="10%">
					<Icon name={'circle'} size={15} style={{ color: '#FFF' }} />
				</Div>
				<Div width="90%">
					<P text={this.props.task} color="#FFF" />
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
