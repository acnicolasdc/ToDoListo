import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Title from 'ToDoList/src/components/TitleGlobal';
import P from 'ToDoList/src/components/TextGlobal';
import { connect } from 'react-redux';
class WelcomeHome extends PureComponent {
	render() {
		return (
			<Container>
				<Title text="Hello, Usuario" />
				<P text={'Bienvenido a ToDoListo'} />
			</Container>
		);
	}
}
const Container = styled.View`
	flex: 1;
	flex-flow: column;
	justify-content: center;
	align-items: flex-start;
`;
const mapStateToProps = (state) => {
	return {
		dataTask: state.task
	};
};

export default connect(mapStateToProps, null)(WelcomeHome);
