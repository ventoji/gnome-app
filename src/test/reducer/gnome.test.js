import gnomeReducer from '../../reducer/gnome';
import {gnomeItem, gnomeItem2} from '../fixtures/gnomes';


test(' should not modify state for unrecognized action', () => {

        const state = gnomeItem;
    
        const newState = gnomeReducer(state, {
            type:"UNRECOGNIZED_ACTION"
        });
       
        expect(newState).toEqual(state);
});

test('should set one gnome item to state', () => {

    const state = {};

    const newState = gnomeReducer(state,{
        type: 'ADD_GNOME_ITEM',
        ...gnomeItem
    });

    expect(newState).toEqual(gnomeItem);
});

test('should replace the old state to the new state', () => {

    const state = gnomeItem;

    const newState = gnomeReducer(state,{
        type: 'ADD_GNOME_ITEM',
        ...gnomeItem2
    });
    expect(newState).toEqual(gnomeItem2);

});