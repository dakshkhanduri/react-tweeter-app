import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TwitterProfileFlyout extends Component {

	render() {
		const showFlyout = {
			display: 'block',
			top: this.props.user.x,
			left: this.props.user.y
		};

		const hideFlyout = {
			display: 'none'
		};

		if (!this.props.user) {
			return (<div style={hideFlyout}></div>)
		}
		else {
			return (
				<div style={showFlyout} className="profile-flyout">
					<div><img src={this.props.user.thumbnail} title={this.props.user.userid}/><span>{this.props.user.first}</span> <span>{this.props.user.last}</span></div>
					<div>{this.props.user.description}</div>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.profileHover
	};
}

export default connect(mapStateToProps)(TwitterProfileFlyout);