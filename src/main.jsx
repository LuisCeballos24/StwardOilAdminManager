import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Singin from './pages/Singin';
import Singup from './pages/Singup';
import Menu from './pages/Menu';
import AdminPage from './pages/AdminPage';

//import Home from './Home';
//import Profile from './Profile';
import NotFound from './pages/NotFound';

import './main.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Singin} />
        <Route exact path="/Singup" component={Singup} />
        <Route exact path="/Menu" component={Menu} />
        <Route exact path="/AdminPage" component={AdminPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);