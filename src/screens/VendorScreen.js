import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { 
	Card, 
	Container, 
	Content,
	H2,
	Text,
	Icon,
	Button,
} from 'native-base';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ProductList from '../components/ProductList';
import Seperator from '../components/common/Seperator';
import { LOADING_IMAGE } from '../images/';
import { fetchVendor } from '../actions/';

class VendorScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
			title: 'Vendor Information',
			headerTitleStyle: {
				color: '#2077be'
			},
			headerLeft: (
				<Button
					transparent
					onPress={() => {
						navigation.goBack(null);
					}}
				>
					<Icon name='arrow-back' type='Ionicons' />
				</Button>
			)
	});

	constructor(props) {
		super(props);
		const vendorId = this.props.navigation.getParam('vendorId');
		this.props.fetchVendor(vendorId);
	}

	/*
	componentDidMount() {
		const vendorId = this.props.navigation.getParam('vendorId');
		this.props.fetchVendor(vendorId);
	}
	*/

	render() {
		const { 
			linearGradientStyle, 
			vendorLogoStyle, 
			vendorNameTitleContainerStyle,
			vendorNameTitleTextStyle,
			joinDateTextStyle,
			messageVendorButtonStyle,
			descriptionTextStyle,
			vendorInfoSectionStyle,
			vendorInfoSectionItemStyle,
			vendorInfoTitleStyle,
			vendorInfoContentStyle,
			titleStyle
		} = styles;

		return (
			<Container>
				<Content style={{ flex: 1 }}>
					<LinearGradient style={linearGradientStyle} colors={['#2980b9', '#2c3e50']} />
					<Image 
						source={{ uri: `https://s3-ap-southeast-1.amazonaws.com/restodepotbucket/${this.props.vendor.logo}` }} 
						style={vendorLogoStyle}
						defaultSource={LOADING_IMAGE} 
					/>
					<Card transparent>
						<View style={vendorNameTitleContainerStyle}>
							<H2 style={vendorNameTitleTextStyle}>{this.props.vendor.company_name}</H2>
							<Text style={joinDateTextStyle}>{`Joined on ${this.props.vendor.company_dt_created}`}</Text>
						</View>
						<Button bordered style={messageVendorButtonStyle}>
							<Text>Message Vendor</Text>
						</Button>
						<Seperator />
						<Text style={descriptionTextStyle}>{this.props.vendor.description}</Text>
					</Card>
					<Seperator />
					<Card transparent style={vendorInfoSectionStyle}>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='basket' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Products</Text>
							<Text style={vendorInfoContentStyle}>{this.props.vendor.total_product}</Text>
						</View>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='layers' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Transactions</Text>
							<Text style={vendorInfoContentStyle}>1000</Text>
						</View>
						<View style={vendorInfoSectionItemStyle}>
							<Icon 
								name='badge' 
								type='SimpleLineIcons' 
								style={{ fontSize: 18 }} 
							/>
							<Text style={vendorInfoTitleStyle}>Rating</Text>
							<Text style={vendorInfoContentStyle}>{`${Math.round(this.props.vendor.rating_average)}%`}</Text>
						</View>
					</Card>
					<Seperator />
					<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
						<H2 style={titleStyle}>Products</H2>
						<View style={{ justifyContent: 'center', paddingRight: 10, paddingTop: 5 }}>
							<Button transparent>
								<Text style={{ color: 'tomato' }}>View all</Text>
							</Button>
						</View>
					</View>
					{/*<ProductList products={products} />*/}
				</Content>
			</Container>
		);
	}
}

const styles = {
	linearGradientStyle: {
		height: Dimensions.get('window').height / 3,
	},
	vendorLogoStyle: {
		position: 'absolute',
		marginTop: Dimensions.get('window').height / 4,
		alignSelf: 'center',
		width: 140,	
		height: 140
	},
	vendorNameTitleContainerStyle: {
		paddingTop: '20%',
		paddingBottom: '5%'
	},
	vendorNameTitleTextStyle: {
		textAlign: 'center'
	},
	joinDateTextStyle: {
		color: 'gray', 
		fontSize: 12, 
		textAlign: 'center'
	},
	messageVendorButtonStyle: {
		alignSelf: 'center',
		marginBottom: 20
	},
	descriptionTextStyle: {
		fontSize: 14, 
		textAlign: 'center',
		paddingVertical: 15,
		paddingHorizontal: 15
	},
	vendorInfoSectionStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	vendorInfoSectionItemStyle: {
		alignItems: 'center',
		paddingVertical: 20
	},
	vendorInfoTitleStyle: {
		color: '#444444', 
		fontSize: 14
	},
	vendorInfoContentStyle: {
		fontWeight: '600', 
		fontSize: 14
	},
	titleStyle: {
		paddingTop: 20,
		paddingBottom: 15,
		paddingLeft: 7,
		fontSize: 24,
		fontWeight: 'bold'
	}	
};

const mapStateToProps = state => {
	return {
		vendor: state.vendor.vendor,
		loading: state.vendor.loading
	};
};

export default connect(mapStateToProps, { fetchVendor })(VendorScreen);
