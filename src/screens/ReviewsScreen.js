import React, { Component } from 'react';
import { View } from 'react-native';
import { 
	Container, 
	Content, 
	Header, 
	Left, 
	Right, 
	Button, 
	Icon, 
	Body, 
	Title,
	Text 
} from 'native-base';
import { connect } from 'react-redux';
import ReviewsList from '../components/ReviewsList';
import WriteAReviewModal from '../components/WriteAReviewModal';
import { resetReviewForm } from '../actions/';

class ReviewsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			modalVisible: false
		};
	}

	onDecline() {
		this.setState({ modalVisible: false });
		this.props.resetReviewForm();
	}

	render() {
		const { addReviewButtonContainerStyle } = styles;
		return (
			<Container>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.goBack()}
						>
							<Icon name='arrow-back' />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: '#2077be' }}>Reviews</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ReviewsList />
					<WriteAReviewModal 
						modalVisible={this.state.modalVisible} 
						onDecline={this.onDecline.bind(this)}
					/>
				</Content>
				<View style={addReviewButtonContainerStyle}>
					<Button full onPress={() => this.setState({ modalVisible: true })}>
						<Text>Write a review</Text>
					</Button>
				</View>
			</Container>
		);
	}
}

const styles = {
	addReviewButtonContainerStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		left: 0
	}
};

export default connect(null, { resetReviewForm })(ReviewsScreen);
