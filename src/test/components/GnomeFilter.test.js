import React from 'react';
import { shallow } from 'enzyme';
// import {GnomeFilterContainer} from '../../container/GnomeFilterContainer';
import GnomeFilter from '../../components/GnomeFilter';

let setTextFilter, wrapper;
const filters = {
    text: ''
};

beforeEach(() => {
  setTextFilter = jest.fn();

  wrapper = shallow(
    <GnomeFilter {...filters}    />
  );
});

test('should render GnomeFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });