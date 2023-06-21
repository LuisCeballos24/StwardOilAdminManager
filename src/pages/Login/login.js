import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Usuario autenticado exitosamente
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // Ocurrió un error durante la autenticación
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
  
    return (
      <div className="login-container" style={{ backgroundColor: '#0F172A' }}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    );
  };
  
  export default Login;