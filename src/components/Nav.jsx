import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

/**
 * Componente de navegación responsive.
 * En desktop muestra los enlaces horizontalmente.
 * En móvil muestra un menú hamburguesa que se puede abrir/cerrar.
 *
 * @returns {JSX.Element} Navegación responsive con menú desktop y hamburguesa
 */
export default function BurgerNav() {
  const [open, setOpen] = useState(false);
  const { userLogged, login, logout } = useContext(UserContext);

  return (
    <nav className="main-nav">
      {/* Desktop Menu */}
      <div className="nav-desktop">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Productos" className="nav-link">
          Productos
        </NavLink>
        <NavLink to="/Administracion" className="nav-link">
          Administracion
        </NavLink>
        <button
          onClick={userLogged ? logout : login}
          className={`nav-auth-btn ${userLogged ? "btn-logout" : "btn-login"}`}
        >
          {userLogged ? "Logout" : "Login"}
        </button>
      </div>

      {/* Mobile Menu (Burger) */}
      {/* <button onClick={() => setOpen(!open)}> ☰ </button> */}
      <nav className="burger-nav-container">
        <button className="burger-btn" onClick={() => setOpen(!open)}>
          <span className="burger-icon">{open ? "✕" : "☰"}</span>
        </button>

        {/* Menú controlado por el estado */}
        <nav className={`burger-menu ${open ? "burger-menu--open" : ""}`}>
          <NavLink
            to="/"
            className="burger-link"
            onClick={() => setOpen(false)}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/Productos"
            className="burger-link"
            onClick={() => setOpen(false)}
          >
            Productos
          </NavLink>
          <NavLink
            to="/Administracion"
            className="burger-link"
            onClick={() => setOpen(false)}
          >
            Administracion
          </NavLink>
          <button
            onClick={() => {
              userLogged ? logout() : login();
              setOpen(false);
            }}
            className={`burger-auth-btn ${
              userLogged ? "btn-logout" : "btn-login"
            }`}
          >
            {userLogged ? "Logout" : "Login"}
          </button>
        </nav>
      </nav>
    </nav>
  );
}
