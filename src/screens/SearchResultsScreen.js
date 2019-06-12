import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	Container, 
	Header, 
	Left, 
	Button, 
	Icon, 
	Body, 
	Title, 
	Right, 
	Content, 
	Spinner 
} from 'native-base';
import ProductList from '../components/ProductList';
import FilterBar from '../components/common/FilterBar';
import { fetchSearchResults } from '../actions';

class SearchResultsScreen extends Component {
	componentDidMount() {
		const query = this.props.navigation.getParam('query');
		this.props.fetchSearchResults(query);
	}

	renderLoadingOrContent() {
		if (this.props.loading) {
			return <Spinner size='small' />;
		}
		return <ProductList products={this.props.searchResults} />;
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
						<Title style={{ color: '#2077be' }}>Search Results</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					{this.renderLoadingOrContent()}
				</Content>
				<FilterBar />
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchResults: state.home.search_results,
		loading: state.home.loading
	};
};

export default connect(mapStateToProps, { fetchSearchResults })(SearchResultsScreen);
