import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Singin from './pages/Singin';
import Singup from './pages/Singup';
//import Home from './Home';
//import Profile from './Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Singin} />
        <Route exact path="/Singup" component={Singup} />
      </Switch>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);