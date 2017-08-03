export default function (state = null, action) {
    switch (action.type) {
        case 'USER_MOUSE_IN':
            return action.payload;
            break;
        case 'USER_MOUSE_OUT':
        	return false;
        	break;
        default:
        	return false;	    
    }
    return state;
}
