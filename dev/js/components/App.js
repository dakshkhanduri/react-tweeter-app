import React from 'react';
import FeedList from '../containers/twitter-feed-list';
import TweetForm from '../containers/twitter-tweet-form';
require('../../scss/style.scss');

const App = () => (
	<div id="wrapper">
		<TweetForm />
		<hr />
		<FeedList />
	</div>
);

export default App;
