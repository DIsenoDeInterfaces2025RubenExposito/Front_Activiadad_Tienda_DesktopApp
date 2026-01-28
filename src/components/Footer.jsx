/**
 * Componente de pie de página de la aplicación.
 * Muestra información de contacto (email y teléfono) y copyright.
 * El diseño es responsive: columna en móvil, fila en desktop.
 *
 * @returns {JSX.Element} Pie de página con información de contacto y copyright
 */
export default function Footer() {
  return (
    <footer className="main-footer">
      <section className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@essen.com</p>
          <p>Teléfono: +34 900 123 456</p>
        </div>
        <div className="footer-section">
          <p>&copy; 2025 Essen. Todos los derechos reservados.</p>
        </div>
      </section>
    </footer>
  );
}
