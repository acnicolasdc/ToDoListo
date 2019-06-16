import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Plus from 'ToDoList/src/components/MoreItemsGlobal';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class HeaderGlobal extends PureComponent {
	render() {
		return (
			<Header>
				<Div width="50%">
					<Button onPress={() => this.props.navigation.goBack()}>
						<Icon name={'ios-arrow-back'} size={30} style={{ color: '#000' }} />
					</Button>
				</Div>
				<Div width="50%" align="flex-end">
					<Plus color="#F73E81" />
				</Div>
			</Header>
		);
	}
}
const Header = styled.View`
	width: 100%;
	height: 67px;
	flex-flow: row;
	padding: 20px;
	justify-content: center;
	background-color: #f9f9f9;
`;
const Button = styled.TouchableOpacity`
	width: auto;
	height: auto;
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
