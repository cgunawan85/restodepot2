import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Item, Icon, Input, Text, Button, Spinner } from 'native-base';

class SearchBar extends Component {
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
						autoCapitalize='none' 
						placeholder="What do you need?" 
						onChangeText={(text) => this.props.onSearchChangeText(text)}
					/>
					<Icon onPress={() => console.log('test')} name="close-circle" />
				</Item>
				<Button style={{ width: '25%' }} transparent>
					{this.renderLoading()}
				</Button>
			</Header>
        );
    }
}

export default SearchBar;
