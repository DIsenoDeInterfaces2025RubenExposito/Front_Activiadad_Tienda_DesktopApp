import Nav from "./Nav.jsx";

/**
 * Componente de encabezado de la aplicación.
 * Muestra el nombre de la marca "Essen" y el componente de navegación.
 * Utiliza flexbox para alinear el logo a la izquierda y la navegación a la derecha.
 *
 * @returns {JSX.Element} Encabezado con marca y navegación
 */
export default function Header() {
  return (
    <header className="main-header">
      <h1 className="brand-name">Essen</h1>
      <Nav />
    </header>
  );
}
