export const thumbnailMouseEnter = (user,pos) => {
    return {
        type: 'USER_MOUSE_IN',
        payload: Object.assign(user,pos)
    }
};