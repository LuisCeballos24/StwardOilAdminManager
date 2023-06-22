import React, { useState } from 'react';
import { auth, dbs } from '../utils/firebase';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const history = useHistory();

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Usuario registrado exitosamente
        const user = userCredential.user;
        console.log(user);

        // Almacenar datos adicionales en Firebase Realtime Database
        const userRef = dbs.ref(`users/${user.uid}`);
        userRef.set({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
        });

        // Redirigir al usuario a la página de menú después del registro
        history.push('/Singin');
      })
      .catch((error) => {
        // Ocurrió un error durante el registro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="signup-container">
      <h1>Registro</h1>
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
      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSignup}>Registrarse</button>
    </div>
  );
};

export default Signup;