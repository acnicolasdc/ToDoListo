import React from 'react';
import styled from 'styled-components';
const TitleGlobalGlobal = (props) => (
	<Title size={props.size ? props.size : '30px'} color={props.color ? props.color : 'black'}>
		{(text = !!props.text ? props.text : '')}
	</Title>
);
const Title = styled.Text`
	font-size: ${(props) => props.size};
	color: ${(props) => props.color};
`;
export default TitleGlobalGlobal;
