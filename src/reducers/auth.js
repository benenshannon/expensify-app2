export default (state = {}, action) => {
    //setting state to an object that is empty when user has logged
    //out, but populated when logged in
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
          return {};
        default:
            return state;
    }

};