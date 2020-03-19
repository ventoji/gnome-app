import React from 'react';
import { Router,Route, Switch} from 'react-router-dom'; 
import { createBrowserHistory } from 'history';


import PopulationListContainer from '../container/PopulationListContainer';
import GnomeContainer from '../container/GnomeContainer';
import Header from './Header';
import PageNotFound from './PageNotFound';

 export const history = createBrowserHistory();


const App = () => {
    return (
        <Router  history={history}> 
            <div className='page'>
                <Header />
                <main className="main-content">   

                    <Switch>
                    <Route path={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : '/'}`} component={PopulationListContainer} exact={true} />
                    <Route path={`${process.env.SUBDIRECTORY ? process.env.SUBDIRECTORY  : ''}/gnome/:id`} component={GnomeContainer} />
                    <Route  component={PageNotFound} />
                    </Switch>
        
                </main>
            </div>
        </Router>
    );
};

export default App;