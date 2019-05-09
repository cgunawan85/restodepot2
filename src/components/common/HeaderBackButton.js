import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from 'native-base';
import { resetState } from '../../actions';

class HeaderBackButton extends Component {
	render() {
		return (
			<Button
				transparent
				onPress={() => {
					this.props.resetState(); 
					this.props.navigation.goBack();
				}}
			>
				<Icon name='arrow-back' type='Ionicons' />
			</Button>
		);
	}
}

export default connect(null, { resetState })(HeaderBackButton);
