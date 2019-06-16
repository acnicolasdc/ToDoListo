import React, { PureComponent } from 'react';
import Title from 'ToDoList/src/components/TitleGlobal';
import styled from 'styled-components';
export default class InformationList extends PureComponent {
	render() {
		return (
			<Div>
				<Title text="Finaliza tus actividades" color="#000" />
				<Title text="y crea mas!" color="#000" size="25px" />
			</Div>
		);
	}
}
const Div = styled.View`
	width: 100%;
	height: 100px;
	flex-flow: column;
	background-color: #f9f9f9;
	padding: 0px 20px 0px 20px;
	border-bottom-right-radius: 50px;
`;
