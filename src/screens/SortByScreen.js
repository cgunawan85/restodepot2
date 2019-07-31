import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { 
	Container, 
	Header, 
	Left, 
	Button, 
	Icon, 
	Right, 
	Body, 
	Content,
	Title,
	Text,
	Radio,
	ListItem
} from 'native-base';

import SortByScreenFooter from '../components/SortByScreenFooter';
import { fetchSearchResults } from '../actions';

class SortByScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { itemSelected: null };
	}

	onFilterResults(query, sort) {
		this.props.fetchSearchResults(query, sort);
		this.props.navigation.navigate('SearchResultsScreen');
	}

	render() {
		const query = this.props.navigation.getParam('query');
		return (
			<Container>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack(null)}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: Platform.OS === 'ios' ? '#2077be' : 'white' }}>Sort by</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ListItem
						onPress={() => this.setState({ itemSelected: 3 })}
						selected={this.state.itemSelected === 3}
					>
						<Left>
							<Text>Highest Price</Text>
						</Left>
						<Right>
							<Radio selected={this.state.itemSelected === 3} />
						</Right>
					</ListItem>

					<ListItem 
						onPress={() => this.setState({ itemSelected: 2 })}
						selected={this.state.itemSelected === 2}
					>
						<Left>
							<Text>Lowest Price</Text>
						</Left>
						<Right>
							<Radio selected={this.state.itemSelected === 2} />
						</Right>
					</ListItem>

					<ListItem 
						onPress={() => this.setState({ itemSelected: 1 })}
						selected={this.state.itemSelected === 1}
					>
						<Left>
							<Text>Newest</Text>
						</Left>
						<Right>
							<Radio selected={this.state.itemSelected === 1} />
						</Right>
					</ListItem>
				</Content>
				<SortByScreenFooter 
					itemSelected={this.state.itemSelected} 
					onFilterResults={this.onFilterResults.bind(this)}
					sort={this.state.itemSelected}
					query={query}
				/>
			</Container>
		);
	}
}

export default connect(null, { fetchSearchResults })(SortByScreen);
