import { mapStateToProps } from '../../container/GnomeContainer';
import  Gnome  from '../../components/Gnome';
import renderer from 'react-test-renderer';
import React from 'react';
import { gnomeItem } from '../fixtures/gnomes';

describe(`The Gnome Detail Component`, () => {

    describe(`The Container Element`, () => {

        describe(`mapStateToProps`, () => {
            it(`should map the state to props correctly`, () => {
       
                const appState = {
                    gnome: gnomeItem
                };
                const componentState = mapStateToProps(appState);

                expect(componentState).toEqual(gnomeItem); 

            });

        });

    });

    describe(`The display element`, () => {

        it(`Should display component properly`, () => {
            const tree = renderer.create(
                <Gnome  {...gnomeItem}  />
            );
            expect(tree.toJSON()).toMatchSnapshot(); 

        });
    });


});