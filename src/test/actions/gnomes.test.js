import { addGnomes } from '../../actions/gnomes';
import gnomes from '../fixtures/gnomes';

test('should setup add gnomes from the server ', () => {
  
    const action =  addGnomes(gnomes);

    expect(action).toEqual({
        type: 'ADD_GNOMES',
       gnomes
    });

});