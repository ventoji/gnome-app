import gnomesReducer from '../../reducer/gnomes';
import gnomes from '../fixtures/gnomes';

test('should set gnomes to state', () => {

    const action = {
        type: 'ADD_GNOMES',
        gnomes
    };
    const state = gnomesReducer(undefined,action);
    expect(state).toEqual(gnomes);
});