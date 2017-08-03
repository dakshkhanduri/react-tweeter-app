export const postTweet = (tweet) => {
    return {
        type: 'TWEET_POST',
        payload: tweet
    }
};