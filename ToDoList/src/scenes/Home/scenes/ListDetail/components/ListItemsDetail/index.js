import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Item from './components/Item';
import { connect } from 'react-redux';

class ListItemDetail extends Component {
	renderItem = ({ item }) => <Item task={item.name} date={item.date} id={item.key} check={item.check} />;
	render() {
		const array = this.props.task.data;
		return (
			<FlatList
				contentContainerStyle={{ padding: 20 }}
				initialNumToRender={5}
				data={array}
				keyExtractor={(item) => item.key}
				renderItem={this.renderItem}
				removeClippedSubviews={true}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		task: state.task
	};
};

export default connect(mapStateToProps, null)(ListItemDetail);
