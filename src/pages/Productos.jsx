import React, { useState, useMemo } from "react";
import ProductGrid from "../components/ProductGrid.jsx";
import SearchBar from "../components/SearchBar";
import { useProductos } from "../hooks/useProducto";
import { deleteProducto } from "../services/productosService";

/**
 * Componente de la página de productos.
 * Renderiza el componente ProductGrid que muestra todos los productos disponibles.
 *
 * @returns {JSX.Element} Página de productos con cuadrícula de todos los productos
 */
export default function Productos() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: muebles, loading, error, recargarProductos } = useProductos();

  const handleEliminar = async (id) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este producto?")
    ) {
      try {
        await deleteProducto(id);
        recargarProductos();
      } catch (err) {
        alert(err.message);
      }
    }
  };

  // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredMuebles = useMemo(() => {
    if (!muebles) return [];
    if (!searchTerm) {
      return muebles; // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return muebles.filter((mueble) =>
      mueble.nombre.toLowerCase().includes(lowerCaseSearchTerm),
    );
  }, [searchTerm, muebles]);

  if (loading)
    return <div className="text-center p-10">Cargando productos...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;

  return (
    <>
      <main className="Productos">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar muebles por nombre..."
        />
        {filteredMuebles.length > 0 ? (
          <ProductGrid muebles={filteredMuebles} onEliminar={handleEliminar} />
        ) : (
          <p className="col-span-full text-center text-gray-500 p-4">
            No se encontraron muebles con el término "{searchTerm}".
          </p>
        )}
      </main>
    </>
  );
}
