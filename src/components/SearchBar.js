import React, { Component } from 'react';
import { View, Platform, StatusBar } from 'react-native';
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
		return (
			<Text style={{ color: Platform.OS === 'ios' ? 'white' : 'white', fontSize: Platform.OS === 'ios' ? 14 : 12 }}>
				Search
			</Text>
		);
	}

	renderCloseIcon() {
		if (this.state.searchText !== '') {
			return (
				<Icon 
					onPress={() => {
						this.props.onSearchCloseIconPress();
						this.setState({ searchText: '' });
					}} 
					name="close-circle" 
				/>
			);
		}
	}

	render() {
		return (
			<Header 
				transparent 
				searchBar 
				rounded
				style={{ backgroundColor: '#1f77bd', paddingBottom: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}
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
					{this.renderCloseIcon()}
				</Item>
				<Button 
					style={{ width: '25%' }} 
					transparent
					onPress={() => this.props.navigation.navigate(
						'SearchStack', 
						{ 
							query: this.state.searchText 
						}
					)}
				>
					{this.renderLoading()}
				</Button>
			</Header>
        );
    }
}

export default SearchBar;
