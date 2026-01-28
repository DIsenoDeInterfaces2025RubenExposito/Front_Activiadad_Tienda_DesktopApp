import ProductCard from "./ProductCard";

export default {
  title: "Components/ProductCard/Autodocumentacion",
  component: ProductCard,
  tags: ["autodocs"],
  argTypes: {
    precio: { control: "number" },
    puntuacion: { control: { type: "number", min: 1, max: 5 } },
  },
};

/**
 * Historia por defecto del componente ProductCard.
 * Muestra un producto (Estante Modular).
 */
export const Default = {
  args: {
    nombre: "Estante Modular Copenhague",
    precio: 899.0,
    puntuacion: 4.5,
    imagen:
      "https://www.ikea.com/us/es/images/products/kallax-estanteria-efecto-de-roble-tenido-en-blanco__0459248_pe606048_s5.jpg?f=xl",
    descripcion:
      "Estante modular de diseño moderno, ideal para cualquier salón o estudio.",
  },
};