const muebles = [
  {
    id: 1,
    nombre: "Estante Modular Copenhague",
    precio: 899.00,
    puntuacion: 4.5,
    imagen: "https://www.ikea.com/us/es/images/products/kallax-estanteria-efecto-de-roble-tenido-en-blanco__0459248_pe606048_s5.jpg?f=xl", 
    descripcion: "Estante modular de diseño moderno, ideal para cualquier salón o estudio."
  },
  {
    id: 2,
    nombre: "Mesa Comedor Terra",
    precio: 1450.00,
    puntuacion: 3,
    imagen: "https://www.ikea.com/us/es/images/products/nordviken-mesa-extensible-tenido-al-estilo-antiguo__0832852_pe777856_s5.jpg?f=xl",
    descripcion: "Mesa de comedor robusta y elegante con acabado en madera clara, perfecta para reuniones familiares y cenas con amigos."
  },
  {
    id: 3,
    nombre: "Silla Estocolmo",
    precio: 189.95,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/groensta-silla-interior-exterior-blanco__1243689_pe920720_s5.jpg?f=xl",
    descripcion: "Silla de estilo nórdico, ligera y funcional, ideal para comedores o espacios de trabajo. Disponible en varios colores."
  },
  {
    id: 4,
    nombre: "Mesa Auxiliar Órbita",
    precio: 329.50,
    puntuacion: 2.5,
    imagen: "https://www.ikea.com/us/es/images/products/gladom-mesa-con-bandeja-negro__0567223_pe664991_s5.jpg?f=xl", 
    descripcion: "Mesa auxiliar compacta y versátil, con diseño minimalista, perfecta para colocar junto al sofá o como mesita de noche."
  },
  {
    id: 5,
    nombre: "Sillón Lounge Oslo",
    precio: 785.00,
    puntuacion: 4.5,
    imagen: "https://www.ikea.com/us/es/images/products/soederhamn-sillon-viarp-beige__0802651_pe768532_s5.jpg?f=xl", 
    descripcion: "Sillón de diseño escandinavo, tapizado en tela suave y con patas de metal. Ofrece gran confort para momentos de relax."
  },
  {
    id: 6,
    nombre: "Silla Ergonómica Kross",
    precio: 420.00,
    imagen: "https://www.ikea.com/us/es/images/products/markus-silla-de-trabajo-vissle-gris-oscuro__0724714_pe734597_s5.jpg?f=xl",
    descripcion: "Silla de oficina ergonómica, diseñada para ofrecer máximo soporte y comodidad durante largas horas de trabajo."
  },
  {
    id: 7,
    nombre: "Butaca Múnich",
    precio: 565.95,
    puntuacion: 3,
    imagen: "https://www.ikea.com/us/es/images/products/poaeng-sillon-respaldo-bajo-natural-beige-katorp-natural-beige__1315067_pe940386_s5.jpg?f=xl", 
    descripcion: "Butaca elegante y compacta, ideal para crear un rincón de lectura o añadir un toque sofisticado a cualquier estancia."
  },
  {
    id: 8,
    nombre: "Sillón Reclinable Nube",
    precio: 1150.00,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/dyvlinge-silla-giratoria-kelinge-negro__1205899_pe907271_s5.jpg?f=xl",
    descripcion: "Sillón reclinable motorizado, suave y acolchado, ideal para leer, ver televisión o simplemente descansar."
  },
  {
    id: 9,
    nombre: "Sillón Lounge Eclipse",
    precio: 760.00,
    puntuacion: 2,
    imagen: "https://www.ikea.com/us/es/images/products/soederhamn-modulo-seccional-1-plaza-kelinge-gris-turquesa__1213738_pe911244_s5.jpg?f=xl",
    descripcion: "Sillón de diseño contemporáneo en tono oscuro, con una estructura robusta y cojines cómodos, perfecto para exteriores o interiores modernos."
  },
  {
    id: 10,
    nombre: "Sillón Individual Nórdico",
    precio: 985.00,
    puntuacion: 5,
    imagen: "https://www.ikea.com/us/es/images/products/aeleby-sillon-giratorio-gunnared-gris-intermedio-gris-oscuro__1214818_pe911748_s5.jpg?f=xl", 
    descripcion: "Sillón individual con base giratoria y diseño inspirado en el estilo nórdico, que combina funcionalidad y estética. Ideal para relajarse."
  },
  {
    id: 11,
    nombre: "Loveseat Viena",
    precio: 1950.00,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/finnala-sofa-cama-grann-bomstad-marron-dorado__0817318_pe773963_s5.jpg?f=xl", 
    descripcion: "Sofá de dos plazas compacto y elegante, ideal para espacios pequeños o como complemento en un salón más grande. Tapizado en color neutro."
  },
  {
    id: 12,
    nombre: "Tumbona Zen",
    precio: 695.00,
    puntuacion: 4.3,
    imagen: "https://www.ikea.com/us/es/images/products/naemmaroe-tumbona-exterior-tenido-en-marron-claro__1138752_pe880052_s5.jpg?f=xl", 
    descripcion: "Tumbona de madera confortable, perfecta para disfrutar del sol en el jardín o la piscina. Diseño ergonómico para una relajación óptima."
  },
  {
  id: 13,
    nombre: "Mesa de noche Jaellet",
    precio: 695.00,
    puntuacion: 3.4,
    imagen: "https://www.ikea.com/us/es/images/products/grafjaellet-mesita-de-noche-antracita__1327638_pe944536_s5.jpg?f=xl", 
    descripcion: "Mesita de noche cuenta con almacenamiento abierto en dos niveles y un amplio espacio de almacenamiento oculto detrás de la puerta."
  },
  {
  id: 14,
    nombre: "Cama con Almacenamiento Nordli",
    precio: 899.00,
    puntuacion: 4.5,
    imagen: "https://www.ikea.com/us/es/images/products/nordli-base-cama-almacenamiento-cabecera-antracita__1151020_pe884726_s5.jpg?f=xl", 
    descripcion: "Cama con mucho espacio en los cajones para guardar ropa y edredones"
  },
  {
  id: 15,
    nombre: "Comoda Storemolla",
    precio: 599.99,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/storemolla-gavetero-de-8-cajones-marron-grisaceo-tenido__1256217_pe924947_s5.jpg?f=xl", 
    descripcion: "Comoda amplia y resistente de madera maciza, cuenta con sistema de seguridad de anclaje y desbloqueo que reduce el riesgo de vuelco."
  },
  {
  id: 16,
    nombre: "Escritorio Tonstad",
    precio: 299.99,
    puntuacion: 2.5,
    imagen: "https://www.ikea.com/us/es/images/products/tonstad-escritorio-chapa-de-roble__1243902_pe921029_s5.jpg?f=xl", 
    descripcion: "Escritorio de chapa de roble es perfecto para hacer manualidades o para comer con alguien."
  },
  
  {
  id: 17,
    nombre: "Sofá Modular Finnala",
    precio: 1699.00,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/finnala-modulo-seccional-4-plazas-gunnared-gris-intermedio__0514362_pe639437_s5.jpg?f=xl", 
    descripcion: "Sofá modular. Diseño cuidado y confort duradero incluidos."
  },
  {
  id: 18,
    nombre: "Mueble de Oficina Galant",
    precio: 899.98,
    puntuacion: 3,
    imagen: "https://www.ikea.com/us/es/images/products/galant-combinacion-almacenaje-carpetas-chapa-fresno-tenida-en-negro__0722608_pe733659_s5.jpg?f=xl", 
    descripcion: "Mueble de oficina con un bonito acabado en madera y organizador de cables te permite ocultar tus cosas del trabajo."
  },
  {
  id: 19,
    nombre: "Armario Pax",
    precio: 1225.00,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/pax-storklinta-combinacion-de-armario-gris-oscuro-marron-oscuro-efecto-roble-tenido__1365061_pe956166_s5.jpg?f=xl", 
    descripcion: "Una solución básica y sencilla para empezar, con espacio de sobra para introducir mejoras."
  },
  {
  id: 20,
    nombre: "Sillon retro Eken",
    precio:299.00,
    puntuacion: 3.4,
    imagen: "https://www.ikea.com/us/es/images/products/ekenaeset-sillon-kilanda-beige-claro__1109687_pe870153_s5.jpg?f=xl", 
    descripcion: "Sillón con un aire retro que se inspira en el diseño escandinavo de los años cincuenta. Su diseño clásico queda bien en cualquier lugar."
  },
  {
  id: 21,
    nombre: "Sillon Djurm",
    precio: 399.00,
    puntuacion: 4,
    imagen: "https://www.ikea.com/us/es/images/products/stockholm-2025-sillon-djurmo-gris-blanco__1362740_pe955313_s5.jpg?f=xl", 
    descripcion: "Sillón con un un estilo amplio y elegante."
  },
  {
  id: 22,
    nombre: "Lampara Ensand",
    precio: 79.99,
    puntuacion: 4.2,
    imagen: "https://www.ikea.com/us/es/images/products/oekensand-lampara-de-piso-haya-blanco__1187892_pe899535_s5.jpg?f=xl", 
    descripcion: " Lámpara de piso, la pantalla blanca se extiende a modo de faldón plisado hasta las tres patas esbeltas de haya maciza. "
  },
  {
  id: 23,
    nombre: "Lampara Vind",
    precio: 179.99,
    puntuacion: 4.5,
    imagen: "https://www.ikea.com/us/es/images/products/uppvind-lampara-de-piso-enchapado-en-laton-blanco__0957412_pe804984_s5.jpg?f=xl", 
    descripcion: "Con forma de horquilla coronada con una pantalla delgada y ovalada, esta resistente lámpara de piso llama la atención y proyecta una luz suave"
  },
  {
  id: 24,
    nombre: "Estanteria Lustigt",
    precio: 15.99,
    puntuacion: 3,
    imagen: "https://www.ikea.com/us/es/images/products/lustigt-estante-de-pared__0710227_pe727416_s5.jpg?f=xl", 
    descripcion: "Este estante de pared tiene espacio para objetos grandes y pequeños, ya que los estantes se pueden mover lateralmente. "
  }
];

export default muebles;