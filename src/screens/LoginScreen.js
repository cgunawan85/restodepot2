import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Button, Spinner } from 'native-base';
import CredentialForm from '../components/CredentialForm';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginScreen extends Component {
	static navigationOptions = {
		title: 'Login',
		headerTitleStyle: {
			color: '#2077be',
		},
	};

	onEmailChanged(text) {
		this.props.emailChanged(text);
	}

	onPasswordChanged(text) {
		this.props.passwordChanged(text);
	}

	onLoginButtonPress() {
		this.props.loginUser({ email: this.props.email, password: this.props.password });
	}

	onRegisterButtonPress() {
		this.props.navigation.navigate('RegisterScreen');
	}

	renderLoginButtonOrSpinner() {
		if (this.props.loading) {
			return <Spinner />;
		}
		return ( 
			<Button
				block
				onPress={this.onLoginButtonPress.bind(this)}
			>
				<Text style={{ color: 'white' }}>Login</Text>
			</Button>
		);
	}

	render() {
		const { textStyle, registerTextStyle } = styles;
		return (
			<Container>
				<Content>
						<CredentialForm 
							onEmailChanged={this.onEmailChanged.bind(this)}
							onPasswordChanged={this.onPasswordChanged.bind(this)}
						/>
						{this.renderLoginButtonOrSpinner()}
						<Text style={textStyle}>Don't have an account yet?</Text>
						<Text 
							style={registerTextStyle}
							onPress={this.onRegisterButtonPress.bind(this)}
						>
							Register here
						</Text>
				</Content>
			</Container>
		);
	}
}

const styles = {
	buttonTextStyle: {
		color: 'white'
	},
	textStyle: {
		alignSelf: 'center',
		paddingTop: 20,
		paddingBottom: 20
	},
	registerTextStyle: {
		textAlign: 'center',
		color: 'blue'
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		loading: state.auth.loading,
		error: state.auth.error,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
