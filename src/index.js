import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// Importa tus componentes de pantalla aquí
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

// Configura la conexión con Firebase
const firebaseConfig = {
  // Configuración de tu proyecto de Firebase
};

firebase.initializeApp(firebaseConfig);

// Define las rutas y sus componentes asociados
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));