import {setTextFilter} from '../../actions/filter'

test('should generate set text filter object with text valye ', () => {
    const text = 'text';
    const action =  setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });

});
