import { addGnomeItem } from '../../actions/gnome';
import { gnomeItem } from '../fixtures/gnomes';

test('should setup add gnome item action ', () => {
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
