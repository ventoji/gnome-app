import  PopulationList  from '../../components/PopulationList';
import { shallow } from 'enzyme';
import React from 'react';
import gnomes from '../fixtures/gnomes';


let wrapper;

describe(`The Gnome Filter Component`, () => {

    describe(`The display Element`, () => {

        beforeEach(() => {
            wrapper = shallow(<PopulationList gnomes={gnomes} />);
          });

          it(`Should render component properly`, () => {
            expect(wrapper).toMatchSnapshot();
        }); 

    });
});