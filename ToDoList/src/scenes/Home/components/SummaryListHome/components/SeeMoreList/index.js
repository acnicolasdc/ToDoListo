import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import P from 'ToDoList/src/components/TextGlobal';

export default class SeeMoreList extends PureComponent {
	render() {
		return (
			<Button onPress={() => this.props.navigation.navigate('ListDetail')}>
				<Div width="80%">
					<P text="Todas las actividades" color="#FFF" />
				</Div>
				<Div width="20%" align="flex-end">
					<Icon name={'ios-arrow-forward'} size={20} style={{ color: '#FFF' }} />
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
	height: 85%;
	flex-flow: row;
`;
