import React from 'react';
import {shallow} from 'enzyme';
import InfoApp from '../../components/InfoApp';

test('should correctly render infoApp component ', () => {
    const wrapper = shallow(<InfoApp />);
    expect(wrapper).toMatchSnapshot();

});