import React, { Component } from 'react';
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

class SortByScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { itemSelected: '' };
	}

	render() {
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
						<Title style={{ color: '#2077be' }}>Sort by</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ListItem
						onPress={() => this.setState({ itemSelected: 'Highest Price' })}
						selected={this.state.itemSelected === 'Highest Price'}
					>
						<Left>
							<Text>Highest Price</Text>
						</Left>
						<Right>
							<Radio selected={this.state.itemSelected === 'Highest Price'} />
						</Right>
					</ListItem>

					<ListItem 
						onPress={() => this.setState({ itemSelected: 'Lowest Price' })}
						selected={this.state.itemSelected === 'Lowest Price'}
					>
						<Left>
							<Text>Lowest Price</Text>
						</Left>
						<Right>
							<Radio selected={this.state.itemSelected === 'Lowest Price'} />
						</Right>
					</ListItem>

					<ListItem 
						onPress={() => this.setState({ itemSelected: 'Newest' })}
						selected={this.state.itemSelected === 'Newest'}
					>
						<Left>
							<Text>Newest</Text>
						</Left>
						<Right>
							<Radio selected={this.state.itemSelected === 'Newest'} />
						</Right>
					</ListItem>
				</Content>
				<SortByScreenFooter />
			</Container>
		);
	}
}

export default SortByScreen;
