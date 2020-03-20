import React from 'react';
import { Router,Route, Switch} from 'react-router-dom'; 
import { createBrowserHistory } from 'history';

import PopulationListContainer from '../container/PopulationListContainer';
import GnomeContainer from '../container/GnomeContainer';
import Header from './Header';
import PageNotFound from './PageNotFound';
import InfoApp from './InfoApp';

export const history = createBrowserHistory();

const App = () => {
    return (
        <Router  history={history}> 
            <div className='page'>
                <Header />
                <main className="main-content">   

                    <Switch>
                    <Route path={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`} component={PopulationListContainer} exact={true} />
                    <Route path={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : ''}/gnome/:id`} component={GnomeContainer}  scrollBehaviour="none" />
                    <Route path={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : ''}/info-app`} component={InfoApp} />
                    <Route  component={PageNotFound} />
                    </Switch>
        
                </main>
            </div>
        </Router>
    );
};

export default App;