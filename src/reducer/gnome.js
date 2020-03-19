export default (state={}, action) => {
  
    const {name, thumbnail, age, height, weight, hair_color, professions, friends} = action;
    switch (action.type){

        case 'ADD_GNOME_ITEM':
            return{
                name,
                thumbnail,
                age,
                height,
                weight,
                hair_color,
                professions,
                friends
            };

        default:
            return state;

    }
}