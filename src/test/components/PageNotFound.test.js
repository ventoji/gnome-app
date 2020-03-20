import React from 'react';
import {shallow} from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test('should correctly render PageNotFound ', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();

});