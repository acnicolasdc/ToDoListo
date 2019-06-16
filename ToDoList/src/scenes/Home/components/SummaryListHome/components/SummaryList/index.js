import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import Item from './components/Item';
import { connect } from 'react-redux';

class SummaryList extends PureComponent {
	renderItem = ({ item }) => (item.check ? <Item task={item.name} /> : null);
	render() {
		const array = this.props.task.data;
		return (
			<FlatList
				contentContainerStyle={{ padding: 5 }}
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

export default connect(mapStateToProps, null)(SummaryList);
