// src/App.jsx
import React from "react";
import "./theme/styles/index.css";
import ProductGrid from "./components/ProductGrid.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import Administracion from "./pages/Administracion.jsx";
import { UserProvider, UserContext } from "./context/UserContext.jsx";
import { useContext } from "react";

/**
 * Componente para proteger rutas privadas.
 * Si el usuario no está logueado, redirige a la página principal.
 */
const PrivateRoute = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  if (!userLogged) return <Navigate to="/" replace />;
  return children;
};

/**
 * Componente principal de la aplicación.
 * Define la estructura global que incluye el Header, el área de contenido principal con rutas
 * y el Footer. Maneja la navegación de la aplicación utilizando React Router.
 *
 * @returns {JSX.Element} Aplicación con Header, Rutas y Footer.
 */
function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Inicio" element={<Navigate to="/" />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Productos/:id" element={<DetalleProducto />} />
            <Route path="/Administracion" element={
              <PrivateRoute>
                <Administracion />
              </PrivateRoute>
            }
            />
            <Route
              path="*"
              element={
                <div className="not-found">
                  <h1>404 - Página no encontrada</h1>
                  <p>La ruta que buscas no existe.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
