import { useState, useEffect } from 'react';
import { getProductoById } from '../services/productosService';

export const useDetalleProductos = (id, initialData = null) => {
    const [producto, setProducto] = useState(initialData);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Si ya tenemos los datos (pasados por Link), no hace falta llamar a la API
        if (initialData) return;

        const fetchProducto = async () => {
            try {
                setLoading(true);
                const data = await getProductoById(id);
                setProducto(data);
            } catch (err) {
                setError(err.message || "Error al cargar el detalle del producto");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProducto();
        }
    }, [id, initialData]);

    return { producto, loading, error };
};
