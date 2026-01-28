import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProductos } from "../hooks/useProducto";

/**
 * Componente de la página principal (Home).
 * Muestra una sección hero con título, subtítulo e imagen,
 * seguida de dos secciones de productos: productos destacados y novedades.
 *
 * @returns {JSX.Element} Página principal con hero y secciones de productos
 */
export default function Home() {
  const { data: muebles, loading, error } = useProductos();

  // Selecciona primeros 4 productos como destacados
  const featuredProducts = muebles.slice(0, 4);
  //const newProducts = muebles.slice(20, 24);
  const newProducts = muebles.slice(-4);

  if (loading)
    return <div className="text-center p-10">Cargando productos...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">El Espacio que Imaginas.</h1>
          <p className="hero-subtitle">
            Piezas atemporales y funcionales, diseñadas para elevar tu día a
            día.
          </p>
          <Link to="/Productos" className="hero-btn">
            Saber mas
          </Link>
        </div>
        <figure className="hero-image-container">
          <img
            src="https://imgs.search.brave.com/IhTdoi6V4_iL8WXk01yWIH3oBnKFYIiePJwIR3O8VVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/ODI4NjA3Ny9lcy9m/b3RvL3NhbCVDMyVC/M24tZGUtbHVqby1w/b3ItbGEtbm9jaGUt/Y29uLXNvZiVDMyVB/MS1sJUMzJUExbXBh/cmEtZGUtcGllLXkt/c3VlbG8tZGUtcGFy/cXVldC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WFlEcnp1/MTV5RGY4bk9fWXJl/Zy0xQ2RubWUzUU1E/bnNkV01RVzBDTEo0/Zz0"
            alt="Imagen de un salón"
            className="hero-image"
          />
        </figure>
      </section>

      {/* Seccion productos mas buscados */}
      <section className="featured-section">
        <h2 className="featured-title">Nuestros productos más buscados</h2>
        <p className="featured-subtitle">
          Buenos para el entorno, Buenos para ti
        </p>

        <div className="product-grid">
          {featuredProducts.map((mueble) => (
            <Link key={mueble.id} to={`/Productos/${mueble.id}`}>
              <ProductCard
                nombre={mueble.nombre}
                precio={mueble.precio}
                imagen={mueble.imagen}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Seccion Novedades */}
      <section className="new-section">
        <h2 className="featured-title">Novedades</h2>

        <div className="product-grid">
          {newProducts.map((mueble) => (
            <Link key={mueble.id} to={`/Productos/${mueble.id}`}>
              <ProductCard
                nombre={mueble.nombre}
                precio={mueble.precio}
                imagen={mueble.imagen}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
