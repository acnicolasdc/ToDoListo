import React, { PureComponent } from 'react';
import HeaderGlobal from 'ToDoList/src/components/HeaderGlobal';
import styled from 'styled-components';
import InformationList from './components/InformationList';
import ListItemDetail from './components/ListItemsDetail';
import EmptyPage from 'ToDoList/src/components/EmptyPageGlobal';
import { connect } from 'react-redux';
import ModalOptionsGlobal from 'ToDoList/src/components/ModalOptionsGlobal';
class ListDetail extends PureComponent {
	render() {
		return (
			<Container>
				<HeaderGlobal navigation={this.props.navigation} />
				<InformationList />
				{this.props.dataTask.data.length !== 0 ? (
					<ListItemDetail />
				) : (
					<Wallpape>
						<EmptyPage
							color="#000"
							src={require('ToDoList/assets/images/nolist.png')}
							width="40%"
							height="40%"
						/>
					</Wallpape>
				)}
				<ModalOptionsGlobal />
			</Container>
		);
	}
}
const Container = styled.View`
	flex: 1;
	width: 100%;
`;
const Wallpape = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
const mapStateToProps = (state) => {
	return {
		dataTask: state.task
	};
};

export default connect(mapStateToProps, null)(ListDetail);
