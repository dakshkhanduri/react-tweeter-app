import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TwitterProfileFlyout from './twitter-profile-flyout'
import {thumbnailMouseEnter} from '../actions/action-profile-mousein'
import {thumbnailMouseExit} from '../actions/action-profile-mouseout'

class TwitterFeedList extends Component {
	constructor(props) {
		super(props);
		this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
	}
	mouseEnterHandler(event,tweet) {
		this.props.thumbnailMouseEnter(tweet,{x: event.screenX,y: event.screenY});
	}

	mouseLeaveHandler() {
		this.props.thumbnailMouseExit();
	}

	renderList() {
		return this.props.tweets.map((tweet, key) => {
			return (
				<li>
					<div>
						<img src={tweet.thumbnail} title={tweet.userid}  onMouseEnter={(event) => {this.mouseEnterHandler(event,tweet)}} onMouseLeave={() => {this.mouseLeaveHandler(false)}}/>
						<span>{tweet.first}</span> <span>{tweet.last}</span>
					</div>
					<div>
						<span>{tweet.tweetText}</span>
					</div>
				</li>
			);
		});
	}

	render() {
		console.log("Rendering");
		return (
			<div>
				<ul className="feed-list">
					{this.renderList()}
				</ul>
				<TwitterProfileFlyout />
			</div>
		);	
	}
}

function mapStateToProps(state) {
	return {
		tweets: state.tweets
	};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
    	thumbnailMouseEnter: thumbnailMouseEnter,
    	thumbnailMouseExit: thumbnailMouseExit
    }, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TwitterFeedList);