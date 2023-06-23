import React, { useState } from "react";
import { auth, dbs } from "../utils/firebase";
import { useHistory, Link } from "react-router-dom";

// Components
import { InfoStwardCorp } from "../components/InfoStwardCorp";

//Assets
import { FondoBarco } from "../components/FondoBarco";
import GoogleIcon from "../../public/GoogleIcon.png";

// Css
import "../Css/Sing.css";
import "../Css/Singup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
        history.push("/Singin");
      })
      .catch((error) => {
        // Ocurrió un error durante el registro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <FondoBarco />
      <div className="sing">
        <InfoStwardCorp />
        <div className="contenidoPrincipal">
          <h1>Stward Te Saluda👋</h1>
          <p className="subTitulo gris">
            Sistema de gestión de usuarios de Stward Oil
          </p>
          <form>
            <div className="divInputs2">
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <br />
                <input
                  type="text"
                  id="nombre"
                  placeholder="ej. Luis"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="apellido">Apellido:</label>
                <br />
                <input
                  type="text"
                  id="apellido"
                  placeholder="ej. Rodríguez"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="divInputs2">
              <div>
                <label htmlFor="email">Correo:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ej. luisrodriguez123@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="divInputs2">
              <div>
                <label htmlFor="password2">Repetir Contraseña:</label>
                <input
                  type="password"
                  id="password2"
                  placeholder="***********"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="telefono">Número Telefónico:</label>
                <input
                  type="tel"
                  id="telefono"
                  placeholder="ej. 6200-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={handleSignup}
              className="bottomPrimario iniciarSesion"
            >
              Crear Cuenta
            </button>
          </form>
          <button className="btnGoogle"><img src={GoogleIcon} /><p>Sign up with Google</p></button>
          <div style={{textAlign: 'center', marginTop: '7%'}}>
            <p>¿Ya tiene una cuenta? <Link to={"/"} className="linkTo">Inicie Sesión</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
