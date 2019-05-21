import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Left, Right, Icon } from 'native-base';

class SearchAutocompleteList extends Component {
	renderListItem(item) {
		return (
			<ListItem onPress={() => console.log(item.name)}>
				<Left>
					<Text>{item.name}</Text>
				</Left>
				<Right>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem>
		);
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.props.productSuggestions}
					renderItem={({ item }) => this.renderListItem(item)}
					keyExtractor={(product) => product.id.toString()}
				/>
			</View>
		);
	}
}

export default SearchAutocompleteList;
