import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';
import Moment from 'react-moment';

import { LOADING_IMAGE } from '../images/';

class ReviewsListItem extends Component {
	render() {
		const { comments, author_firstname, author_lastname, dt_created, rating } = this.props.review;
		return (
			<ListItem avatar>
				<Left>
					<Thumbnail small source={LOADING_IMAGE} />
				</Left>

				<Body>
					<Text style={{ fontSize: 12 }}>{`${author_firstname} ${author_lastname} says:`}</Text>
					<Text note>{comments}</Text>
				</Body>

				<Right>
					<Moment
						style={{ fontSize: 12, color: 'gray' }}
						element={Text}
						format="DD MMM YYYY"
					>
						{dt_created}
					</Moment>
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
