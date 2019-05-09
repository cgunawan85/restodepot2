import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { Card } from 'native-base';
import { LOADING_IMAGE } from '../images/';

class ProductImage extends Component {
	render() {
		const { photo } = this.props.product;
		const { cardStyle, imageStyle } = styles;
		return (
			<Card style={cardStyle}>
				<Image 
					style={imageStyle} 
					source={{ uri: photo }} 
					resizeMode='cover'
					defaultSource={LOADING_IMAGE}
				/>
			</Card>
		);
	}
}

const screenHeight = Dimensions.get('screen').height;

const styles = {
	cardStyle: {
		height: screenHeight / 2.5,
		padding: 5,
		borderWidth: 1
	},
	imageStyle: {
		flex: 1,
	}
};

export default ProductImage;
