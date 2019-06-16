import React from 'react';
import styled from 'styled-components';
const TextGlobal = (props) => (
	<P size={props.size ? props.size : '18px'} color={props.color ? props.color : 'black'}>
		{(text = !!props.text ? props.text : '')}
	</P>
);
const P = styled.Text`
	font-size: ${(props) => props.size};
	color: ${(props) => props.color};
`;
export default TextGlobal;
