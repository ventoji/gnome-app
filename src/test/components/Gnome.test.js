import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import GnomeContainer from '../../container/GnomeContainer';
import {gnomeItem} from '../fixtures/gnomes';

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Connected Gnome React-Redux Component', () => {
    let store;
    let component;
    beforeEach(() => {
      store = mockStore({
        gnome: gnomeItem
      });
      component = renderer.create(
        <Provider store={store}>
            <BrowserRouter >
                <GnomeContainer />
            </BrowserRouter>
        </Provider>
      );
    });
    it('should render GnomeContainer properly ', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
  });


/* test('should render Gnome correctly', () => {
    expect(wrapper).toMatchSnapshot();
}); */