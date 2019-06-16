import React from 'react';
import styled from 'styled-components';
import P from 'ToDoList/src/components/TextGlobal';

const EmptyPageGlobal = (props) => (
	<Container align="center">
		<Div height="100%" align="center">
			<Image source={props.src} width={props.width} height={props.height} />
			<P
				text={!!props.text ? props.text : '¡No tienes actividades creadas!'}
				color={!!props.color ? props.color : '#FFF'}
				size={18}
			/>
		</Div>
	</Container>
);
const Container = styled.View`
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
const Image = styled.Image`
	width: ${(props) => (!!props.width ? props.width : '60%')};
	height: ${(props) => (!!props.height ? props.height : '60%')};
	margin-bottom: 10px;
`;
export default EmptyPageGlobal;
