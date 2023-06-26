import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useHistory, Link } from "react-router-dom";

// Components
import { InfoStwardCorp } from "../components/InfoStwardCorp";

// Css
import '../Css/Sing.css';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setError(null);

      // Redirigir al usuario al menú después de iniciar sesión correctamente
      history.push("/Menu");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = () => {
    history.push("/Signup");
  };

  return (
    <>
      <div className="sing barcoFondo">
        <InfoStwardCorp />
        <div className="contenidoPrincipal flexCenterColumn">
          <h1 id="tituloScroll">Bienvenido👋</h1>
          <p className="subTitulo gris">Sistema de gestión de usuarios de Stward Oil</p>
          {error && <p className="mensajeAlerta">Error al iniciar sesión...</p> }
          {error && console.log}
          <form onSubmit={handleSubmit} style={{padding: '2% 0', width: '100%'}} className="flexCenterColumn">
            <div className="divInputs">
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="i.e. donovan.clarck20@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="divInputs">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="**********"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="divRecordar">
              <input type="checkbox" name="recordar" id="recordar" />
              <label htmlFor="recordar">Recordar Sesión</label>
            </div>
            <button type="submit" className="bottomPrimario iniciarSesion" style={{margin: '5% 0'}}>Iniciar sesión</button>
          </form>
          <div style={{textAlign: 'center'}}>
            <p>¿No tienes una cuenta? <Link to={"./Singup"} className="linkTo">Crea una cuenta</Link></p>
            <p>¿Problemas al iniciar sesión? <Link to={"./Singup"} className="linkTo">Recupere la cuenta</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;