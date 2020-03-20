import filtersReducer from '../../reducer/filter';

test('should set text filter', () => {

    const text= 'Malbin';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined,action);
    expect(state.text).toEqual(text);
});