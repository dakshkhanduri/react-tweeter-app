import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postTweet} from '../actions/action-post-tweet'

class TweetForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let tweetText = document.getElementById("inputTweet").value;
		let userTweet = Object.assign({},this.props.user[0],{tweetText: tweetText});
		this.props.postTweet(userTweet);
	}

	handleChange(event) {
		//console.log(event.target.value);
	}

	render() {
		return (
			<form onSubmit={(event) => this.handleSubmit(event)}>
		        <label>
		          <textarea id="inputTweet" onKeyPress={(event) => this.handleChange(event)} />
		        </label>
		        <input type="submit" value="Submit" />
		    </form>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
    	postTweet: postTweet
    }, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TweetForm);