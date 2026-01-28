import { useState } from "react";
import { useCreateProducto } from "../hooks/useCreateRoductos";
import { useNavigate } from "react-router-dom";

/**
 * Componente de Administración que contiene un formulario controlado para añadir productos.
 * Realiza validaciones en los campos y muestra mensajes de error si los datos no son válidos.
 *
 * @returns {JSX.Element} Página de administración con formulario.
 */
export default function Administracion() {
  const navigate = useNavigate();
  const { addProducto, loading, error: apiError } = useCreateProducto();

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    puntuacion: "",
    imagen: "",
    descripcion: "",
  });

  const [error, setError] = useState({
    nombre: "",
    precio: "",
    puntuacion: "",
    imagen: "",
    descripcion: "",
  });

  /**
   * Manejador del envío del formulario.
   * Realiza las validaciones y, si son correctas, envía el producto a la API.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (form.nombre.trim().length < 5) {
      newError.nombre =
        "El nombre del producto debe tener al menos 5 caracteres";
    }
    const precioNum = parseFloat(form.precio);
    if (isNaN(precioNum) || precioNum <= 0) {
      newError.precio = "El precio debe ser un número mayor que 0";
    }
    const puntuacionNum = parseFloat(form.puntuacion);
    if (isNaN(puntuacionNum) || puntuacionNum < 1 || puntuacionNum > 5) {
      newError.puntuacion = "La puntuación debe ser un número entre 1 y 5";
    }
    if (
      form.imagen.trim() !== "" &&
      !form.imagen.startsWith("http" || "https")
    ) {
      newError.imagen =
        "La URL de la imagen debe ser válida (empezar por http o https)";
    }
    if (form.descripcion.trim().length < 20) {
      newError.descripcion = "La descripción debe tener al menos 20 caracteres";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      addProducto(form);
      navigate("/Productos");

    }
  };

  /**
   * Manejador de cambios en los inputs del formulario.
   * Actualiza el estado del formulario y limpia el error del campo que se está editando.
   */
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="admin-container">
      <h1 className="detalle-title">Administración de Productos</h1>

      <div className="form-card">
        <h2 className="brand-name">Añadir Nuevo Producto</h2>

        {apiError && <p className="admin-error-text">{apiError}</p>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="admin-form-group">
            <label htmlFor="nombre" className="admin-label">
              Nombre del Producto:
            </label>
            <input
              id="nombre"
              type="text"
              className="admin-input"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ej. Estante Modular"
            />
            {error.nombre && <p className="admin-error-text">{error.nombre}</p>}
          </div>

          <div className="admin-form-row">
            {/* Precio */}
            <div className="admin-form-col">
              <label htmlFor="precio" className="admin-label">
                Precio (€):
              </label>
              <input
                id="precio"
                type="number"
                step="0.01"
                className="admin-input"
                value={form.precio}
                onChange={handleChange}
                placeholder="0.00"
              />
              {error.precio && (
                <p className="admin-error-text">{error.precio}</p>
              )}
            </div>

            {/* Puntuación */}
            <div className="admin-form-col">
              <label htmlFor="puntuacion" className="admin-label">
                Puntuación (1-5):
              </label>
              <input
                id="puntuacion"
                type="number"
                min="1"
                max="5"
                className="admin-input"
                value={form.puntuacion}
                onChange={handleChange}
                placeholder="4.5"
              />
              {error.puntuacion && (
                <p className="admin-error-text">{error.puntuacion}</p>
              )}
            </div>
          </div>

          {/* Imagen URL */}
          <div className="admin-form-group">
            <label htmlFor="imagen" className="admin-label">
              URL de la Imagen:
            </label>
            <input
              id="imagen"
              type="url"
              className="admin-input"
              value={form.imagen}
              onChange={handleChange}
              placeholder="https://example.com/imagen.jpg"
            />
            {error.imagen && <p className="admin-error-text">{error.imagen}</p>}
          </div>

          {/* Descripción */}
          <div className="admin-form-group" style={{ marginBottom: "30px" }}>
            <label htmlFor="descripcion" className="admin-label">
              Descripción:
            </label>
            <textarea
              id="descripcion"
              className="admin-textarea"
              value={form.descripcion}
              onChange={handleChange}
              placeholder="Describe el producto detalladamente..."
            />
            {error.descripcion && (
              <p className="admin-error-text">{error.descripcion}</p>
            )}
          </div>

          {/* Botón Envío */}
          <button type="submit" className="admin-submit-btn" disabled={loading}>
            {loading ? "Enviando..." : "Añadir Producto"}
          </button>
        </form>
      </div>
    </div>
  );
}
