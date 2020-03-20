import gnomeReducer from '../../reducer/gnome';
import {gnomeItem} from '../fixtures/gnomes';

test('should set gnome to state', () => {

    const gnome = gnomeItem;
    const action = {
        type: 'ADD_GNOME_ITEM',
        gnome
    };
    const state = gnomeReducer(undefined,action);
    expect(state).toEqual(gnome);
});