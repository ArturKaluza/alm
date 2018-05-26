import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AGD from '../components/AGD/AGD';
import HomePage from '../components/HomePage/HomePage';
import Navigation from '../components/Nav/Navigation';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import RTV from '../components/RTV/RTV';
import Others from '../components/Others/Others';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/agd" component={AGD} />
          <Route path="/rtv" component={RTV} />
          <Route path="/others" component={Others} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;