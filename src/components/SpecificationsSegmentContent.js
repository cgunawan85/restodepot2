import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, StyleProvider, getTheme } from 'native-base';

class SpecificationsSegmentContent extends Component {
	//2077be RestoDepot Blue
	render() {
		const { product } = this.props;
		const { contentContainerStyle, textStyle } = styles;

		return (
			<View>
				<View style={contentContainerStyle}>
					<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
						<Icon 
							name="cube"
							style={{ fontSize: 16 }} 
						/>
					</StyleProvider>
					<Text style={textStyle}>
						{ `${product.length}cm (L) x ${product.width}cm (W) x ${product.height}cm (H)` }
					</Text>
				</View>

				<View style={contentContainerStyle}>
					<StyleProvider style={getTheme({ iconFamily: 'MaterialCommunityIcons' })}>
						<Icon 
							name="weight"
							style={{ fontSize: 16 }} 
						/>
					</StyleProvider>
					<Text style={textStyle}>{ `${product.weight.toLocaleString()} grams` }</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	contentContainerStyle: {
		flexDirection: 'row',
		marginBottom: 5
	},
	textStyle: {
		color: '#444444'
	}
};

export default SpecificationsSegmentContent;
