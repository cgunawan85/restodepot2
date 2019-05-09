import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Card, Thumbnail, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import { vendors } from '../data/vendorData';
import { LOADING_IMAGE } from '../images/';

class ProductVendor extends Component {
	render() {
		const { cardStyle, vendorNameSectionStyle, vendorLogoContainerStyle } = styles;
		const product = this.props.navigation.getParam('product');
		const vendor = vendors[0];
		
		return (
			<Card 
				transparent
				style={cardStyle}
			>
				<View style={vendorLogoContainerStyle}>
					<View>
						<Thumbnail 
							square
							defaultSource={LOADING_IMAGE}
							source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/coldmoo-f07a2.appspot.com/o/photo1.JPG?alt=media&token=7d9ae1f8-f2b0-4133-b61c-2fd536cdac20' }} 
						/>
					</View>
					<View style={vendorNameSectionStyle}>
						<Text note>Sold By</Text>
						<Text style={{ fontSize: 14 }}>{product.vendor}</Text>
					</View>
					<View style={{ justifyContent: 'center' }}>
						<Button 
							small 
							bordered 
							onPress={() => this.props.navigation.navigate('VendorScreen', { vendor: vendor })}
						>
							<Text>View Vendor</Text>
						</Button>
					</View>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		padding: 5,
		borderWidth: 1,
	},
	vendorLogoContainerStyle: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	},
	vendorNameSectionStyle: {
		justifyContent: 'space-around', 
		flexShrink: 1, 
		paddingHorizontal: 5
	}
};

export default withNavigation(ProductVendor);
