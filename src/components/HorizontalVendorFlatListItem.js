import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Card, Thumbnail, Text, Button } from 'native-base';
import { withNavigation } from 'react-navigation';
import { 
	LOADING_IMAGE, 
	BRONZE_BADGE, 
	SILVER_BADGE, 
	GOLD_BADGE, 
	DIAMOND_BADGE 
} from '../images/';

class HorizontalVendorFlatListItem extends Component {
	onMoreInfoButtonPress() {
		this.props.navigation.navigate('VendorScreen', { vendor: this.props.vendor });
	}

	renderRatingWithBadge() {
		const { rating } = this.props.vendor;
		let badge;

		if (rating > 95) {
			badge = DIAMOND_BADGE;
		} else if (rating > 85) {
			badge = GOLD_BADGE;
		} else if (rating > 75) {
			badge = SILVER_BADGE;
		} else if (rating < 75) {
			badge = BRONZE_BADGE;
		}

		return (
			<View style={{ flexDirection: 'row' }}>
				<View style={{ paddingHorizontal: 3 }}>
					<Image style={{ height: 13, width: 9 }} source={badge} />
				</View>
				<Text style={{ fontSize: 12 }}>{`${rating}%`}</Text>
			</View>
		);
	}

	render() {
		const { logo, name } = this.props.vendor;
		const { 
			cardStyle, 
			contentContainerStyle, 
			logoContainerStyle, 
			textContainerStyle, 
			vendorNameTextStyle, 
			buttonContainerStyle 
		} = styles;
		
		return (
			<Card button style={cardStyle}>
				<View style={contentContainerStyle}>
					<View style={logoContainerStyle}>
						<Thumbnail 
							large 
							square 
							source={{ uri: logo }} 
							defaultSource={LOADING_IMAGE}
						/>
					</View>
					<View style={textContainerStyle}>
						<Text numberOfLines={1} style={vendorNameTextStyle}>{name}</Text>
						{this.renderRatingWithBadge()}
					</View>
					<View style={buttonContainerStyle}>
						<Button 
							small 
							bordered 
							onPress={() => this.onMoreInfoButtonPress()}
						>
							<Text>More Info</Text>
						</Button>
					</View>
				</View>
			</Card>
		);
	}
}

const styles = {
	cardStyle: {
		width: 160, 
		justifyContent: 'space-around'
	},
	contentContainerStyle: {
		padding: 10, 
		alignItems: 'center'
	},
	logoContainerStyle: {
		paddingBottom: 10
	},
	textContainerStyle: {
		paddingBottom: 10, 
		alignItems: 'center'
	},
	vendorNameTextStyle: {
		fontSize: 14, 
		fontWeight: '600', 
		color: '#444444'
	},
	buttonContainerStyle: {
		flex: 1
	}
};

export default withNavigation(HorizontalVendorFlatListItem);
