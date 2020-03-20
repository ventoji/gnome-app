export default (state=[], action) => {

    switch (action.type){

        case 'ADD_GNOMES':
            return  action.gnomes;

        default:
            return state;

    }
};