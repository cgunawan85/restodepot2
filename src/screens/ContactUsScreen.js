import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import { 
	Container, 
	Content, 
	H1, 
	H3, 
	Icon, 
	Form, 
	Item, 
	Label, 
	Input, 
	Button, 
	Text
} from 'native-base';
import { ABOUT_US_COVER_IMAGE } from '../images/';
import Seperator from '../components/common/Seperator';

//LINKING NEEDS TO BE TESTED ON DEVICE, DOES NOT WORK IN SIMULATOR

class ContactUsScreen extends Component {
	static navigationOptions = {
		title: 'Contact Us',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	render() {
		const { coverImageStyle } = styles;

		return (
			<Container>
				<Content>
					<Image 
						source={ABOUT_US_COVER_IMAGE} 
						style={coverImageStyle} 
					/>
					<View style={{ paddingVertical: 20, paddingLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
						<H1 style={{ fontWeight: '600' }}>A problem with your order?</H1>
						<Text style={{ color: '#444444' }}>We are here to help you</Text>
					</View>
					<Seperator />
					<TouchableOpacity onPress={() => Linking.openURL('tel://+62818678200')}>
						<View 
							style={{ 
								flexDirection: 'row', 
								paddingVertical: 10, 
								paddingLeft: 10,
								justifyContent: 'space-between',
							}}
						>
							<View 
								style={{ 
									flexDirection: 'row', 
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Icon 
									name='phone' 
									type='SimpleLineIcons' 
									style={{ fontSize: 17, color: '#444444' }} 
								/>
								<H3 style={{ color: '#444444' }}>+62818 678 200</H3>
							</View>

							<View style={{ marginRight: 10 }}>
								<Text style={{ color: '#444444' }}>Monday-Friday</Text>
								<Text style={{ color: '#444444' }}>8AM - 8PM (WIB)</Text>
							</View>
						</View>
					</TouchableOpacity>
					<Seperator />
					<View>
						<View 
							style={{ 
								paddingVertical: 20, 
								justifyContent: 'center', 
								alignItems: 'center' 
							}}
						>
							<H1 style={{ fontWeight: '600' }}>Feedback?</H1>
							<Text style={{ color: '#444444' }}>We need your help to improve our app</Text>
						</View>
						<Form>
							<Item stackedLabel>
								<Label>Name</Label>
								<Input 
									onChangeText={() => console.log('test')}
									autoCapitalize='none'
								/>
							</Item>
							<Item stackedLabel>
								<Label>Email</Label>
								<Input 
									onChangeText={() => console.log('test')}
									autoCapitalize='none'
								/>
							</Item>
							<Item stackedLabel>
								<Label>Message</Label>
								<Input 
									onChangeText={() => console.log('test')}
									autoCapitalize='none'
									rowSpan={5}
								/>
							</Item>
						</Form>
						<View style={{ paddingTop: 40 }}>
							<Button full>
								<Text>Submit</Text>
							</Button>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

const styles = {
	coverImageStyle: {
		height: 250,
		width: null,
		flex: 1
	}
};

export default ContactUsScreen;
