import React from 'react';
import LandingPage from './landingpage';
import About from './about';
import FindEvent from './findevent';
import TrackEvent from './trackevent';
import CreateEvent from './createevent';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/about' component={About} />
        <Route path='/findevent' component={FindEvent} />
        <Route path='/trackevent' component={TrackEvent} />
        <Route path='/createevent' component={CreateEvent} />
    </Switch>
)

export default Main;