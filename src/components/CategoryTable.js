import React, { Component } from 'react';
import { View } from 'react-native';
import CategoryButton from './CategoryButton';

class CategoryTable extends Component {
	render() {
		const { containerStyle } = styles;
		return (
			<View style={containerStyle}>
				<CategoryButton 
					buttonColors={['#1488CC', '#2B32B2']}
					category='Food & Beverages'
				>
					Food & Beverages
				</CategoryButton>
				<CategoryButton 
					buttonColors={['#1488CC', '#2B32B2']}
					category='Equipment'
				>
					Equipment
				</CategoryButton>
				<CategoryButton 
					buttonColors={['#1488CC', '#2B32B2']}
					category='Cleaning Supplies'
				>
					Cleaning Supplies
				</CategoryButton>
				<CategoryButton 
					buttonColors={['#1488CC', '#2B32B2']}
					category='Coffee'
				>
					Coffee
				</CategoryButton>
				<CategoryButton 
					buttonColors={['#1488CC', '#2B32B2']}
					category='Disposables'
				>
					Disposables
				</CategoryButton>
				<CategoryButton 
					buttonColors={['#1488CC', '#2B32B2']}
					category='Test Category'
				>
					Test Category
				</CategoryButton>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		paddingRight: 5,
		paddingLeft: 5,
		paddingBottom: 10
	},
};

export default CategoryTable;
