export default (state=[], action) => {
  
    //console.log(action.gnomes);

    switch (action.type){

        case 'ADD_GNOMES':
            return  action.gnomes;
           // return [...state, action.gnomes];

        default:
            return state;

    }
}