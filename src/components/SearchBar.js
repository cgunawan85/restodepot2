import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Item, Icon, Input, Text, Button, Spinner } from 'native-base';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchText: '' };
	}

	renderLoading() {
		if (this.props.productSuggestionsLoading) {
			return (
				<View>
					<Spinner size='small' />
				</View>
			);
		}
		return <Text>Search</Text>;
	}

	render() {
		return (
			<Header 
				transparent 
				searchBar 
				rounded
			>	
				<Item>
					<Icon name="ios-search" />
					<Input
						autoCorrect={false}
						autoCapitalize='none' 
						placeholder="What do you need?" 
						onChangeText={(text) => {
							this.props.onSearchChangeText(text);
							this.setState({ searchText: text });
						}}
						value={this.state.searchText}
					/>
					<Icon 
						onPress={() => {
							this.props.onSearchCloseIconPress();
							this.setState({ searchText: '' });
						}} 
						name="close-circle" 
					/>
				</Item>
				<Button style={{ width: '25%' }} transparent>
					{this.renderLoading()}
				</Button>
			</Header>
        );
    }
}

export default SearchBar;
