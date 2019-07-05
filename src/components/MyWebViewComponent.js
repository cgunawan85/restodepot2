import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWebViewComponent extends Component {
	render() {
		return (
			<WebView 
				source={{ uri: this.props.url }} 
				onShouldStartLoadWithRequest={(request) => {
					if (request.url.startsWith('http://dev.restodepot.id/profile-orders')) {
						return false;
					}
					return true;
				}}
			/>
		);
	}
}

export default MyWebViewComponent;
