import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';

class ReviewsListItem extends Component {
	render() {
		const { profile_pic, author, created_at, rating, review } = this.props.review;
		return (
			<ListItem avatar>
				<Left>
					<Thumbnail small source={{ uri: profile_pic }} />
				</Left>

				<Body>
					<Text>{author}</Text>
					<Text note>{review}</Text>
				</Body>

				<Right>
					<Text note>{created_at}</Text>
					<View style={{ flexDirection: 'row' }}>
						<Icon name='star' style={{ color: '#FFD700', fontSize: 18 }} />
						<Text style={{ color: '#FFD700' }}> {rating}</Text>
					</View>
				</Right>
			</ListItem>
		);
	}
}

export default ReviewsListItem;
