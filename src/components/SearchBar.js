import React, { Component } from 'react';
import { Header, Item, Icon, Input, Text, Button } from 'native-base';

class SearchBar extends Component {
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
				</Item>
				<Button transparent>
					<Text>Search</Text>
				</Button>
			</Header>
        );
    }
}

export default SearchBar;
