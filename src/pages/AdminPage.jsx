import React, { useState, useEffect } from "react";
import { auth, dbs } from "../utils/firebase";

function AdminPage() {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Obtener información del usuario actual al cargar la página
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // El usuario está autenticado
        setUser(user);

        // Obtener y establecer la información del usuario desde la base de datos
        const userRef = dbs.ref(`users/${user.uid}`);
        userRef.on("value", (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setFirstName(userData.firstName || "");
            setLastName(userData.lastName || "");
            setPhoneNumber(userData.phoneNumber || "");
          }
        });
      } else {
        // El usuario no está autenticado
        setUser(null);
      }
    });

    return () => {
      // Limpiar el listener de cambios en la base de datos al desmontar el componente
      unsubscribe();
    };
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    const userRef = db.ref(`users/${user.uid}`);
    userRef.update({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    });

    if (password) {
      // Cambiar la contraseña del usuario
      user.updatePassword(password)
        .then(() => {
          console.log("Contraseña actualizada exitosamente");
        })
        .catch((error) => {
          console.log("Error al actualizar la contraseña:", error.message);
        });
    }

    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    // Restaurar los valores originales de la información del usuario
    setFirstName(user.displayName || "");
    setLastName("");
    setPhoneNumber("");
    setPassword("");
  };

  if (!user) {
    // El usuario no está autenticado
    return <div>No se ha iniciado sesión.</div>;
  }

  return (
    <div>
      <h2>Información del usuario</h2>
      {!editing ? (
        <div>
          <p>Nombre: {firstName}</p>
          <p>Apellido: {lastName}</p>
          <p>Número de teléfono: {phoneNumber}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      ) : (
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={firstName}
          />
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={lastName}
          />
          <label htmlFor="phoneNumber">Número de teléfono:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={phoneNumber}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nueva contraseña"
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;