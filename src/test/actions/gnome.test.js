import { addGnomeItem } from '../../actions/gnome';

test('should setup add gnome item action ', () => {
    const gnomeItem = {
        name:"Tobus Quickwhistle",
        thumbnail:"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        age:306,
        weight:39.065952,
        height:107.75835,
        weight:39.065952,
        hair_color:"Pink",
        professions:["Metalworker","Woodcarver","Stonecarver"," Tinker","Tailor","Potter"],
        friends:["Cogwitz Chillwidget","Tinadette Chillbuster"]
    };

    const action = addGnomeItem(gnomeItem);
    expect(action).toEqual({
        type: 'ADD_GNOME_ITEM',
        ...gnomeItem
    });

});

test('should setup add gnome item action with default value ', () => {
    const gnomeItem = {};

    const action =  addGnomeItem();
    expect(action).toEqual({
        type: 'ADD_GNOME_ITEM'
    });

});
