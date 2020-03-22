import { mapStateToProps } from '../../container/GnomeFilterContainer';
import  GnomeFilter  from '../../components/GnomeFilter';
import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

let wrapper, tree, setTextFilter;

describe(`The Gnome Filter Component`, () => {

    describe(`The Container Element`, () => {

        describe(`mapStateToProps`, () => {
            it("should map the state to props correctly", () => {
       
                const state = {
                    filters: 'Tobus'
                };
                const componentState = mapStateToProps(state);
                expect(componentState).toEqual({
                    state: 'Tobus'});

            });

        });

    });

    describe(`The display element`, () => {

        beforeEach(() => {
            setTextFilter = jest.fn();
            wrapper = shallow( <GnomeFilter  />);
             tree = renderer
            .create(<GnomeFilter  />)
            .toJSON(); 
        });
       

        it('Should render component properly', () => {
            expect(tree).toMatchSnapshot();
        });

        it('Should render component properly with all data correctly', () => {
             wrapper.setProps({
                filters: 'Tobus'
            });
            expect(wrapper).toMatchSnapshot(); 
        });

        it('Should handle text change on input  ', () => {
             const value='Tobus';
            wrapper.setProps({
                setTextFilter:  setTextFilter
            });
            wrapper.find('input').simulate('change', {
                target: {value}
            });
            expect(setTextFilter).toHaveBeenLastCalledWith(value); 
        
        });
    });


});