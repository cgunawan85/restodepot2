import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

class CategoryButton extends Component {
	render() {
		const { children, style, onPress, category } = this.props;
		const { linearGradientStyle, containerStyle, textStyle } = styles;
		return (
			<TouchableOpacity 
				onPress={onPress} 
				style={[containerStyle, style]}
				onPress={() => this.props.navigation.navigate('CategoriesStack', { category: category })}
			>
				<LinearGradient 
					style={linearGradientStyle}
					colors={this.props.buttonColors}
				>
					<Text style={textStyle}>{children}</Text>
				</LinearGradient>
			</TouchableOpacity>
		);
	}
}

const styles = {
	linearGradientStyle: {
		padding: 10
	},
	containerStyle: {
		backgroundColor: 'blue',
		width: '49%',
		marginBottom: 15,
		marginRight: 2,
		borderRadius: 8
	},
	textStyle: {
		color: 'white',
		textAlign: 'center'
	}
};

export default withNavigation(CategoryButton);
