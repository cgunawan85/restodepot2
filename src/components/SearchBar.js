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
						placeholder="What do you need?" 
						onPress={() => console.log('test')}
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
