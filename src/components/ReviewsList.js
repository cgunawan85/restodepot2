import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ReviewsListItem from './ReviewsListItem';
import { reviews } from '../data/reviewData';

class ReviewsList extends Component {
	renderCardItem(review) {
		return <ReviewsListItem review={review.item} />;
	}

	render() {
		return (
			<View>
				<FlatList 
					data={reviews} //can use SLICE to limit number of items in data set
					renderItem={this.renderCardItem}
					keyExtractor={(review) => review.id.toString()}
				/>
			</View>
		);
	}
}

export default withNavigation(ReviewsList);
