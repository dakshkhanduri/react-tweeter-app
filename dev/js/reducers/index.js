import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import TweetsReducer from './reducer-tweets';
import ProfileHover from './reducer-profile-hover';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    user: UserReducer,
    tweets: TweetsReducer,
    profileHover: ProfileHover
});

export default allReducers
