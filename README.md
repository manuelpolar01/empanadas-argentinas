// mockProducts.js
const products = [
  {
    id: 1,
    price: 200,
    description: "Empanada de pollo clásica, jugosa y sabor tradicional.",
    image: "https://example.com/images/empanada-pollo-1.jpg",
    category: "pollo"
  },
  {
    id: 2,
    price: 220,
    description: "Empanada de carne cortada a cuchillo con especias argentinas.",
    image: "https://example.com/images/empanada-carne-1.jpg",
    category: "carne"
  },
  {
    id: 3,
    price: 180,
    description: "Empanada de verduras frescas: espinaca, zanahoria y cebolla.",
    image: "https://example.com/images/empanada-verdura-1.jpg",
    category: "verduras"
  },
  {
    id: 4,
    price: 210,
    description: "Empanada de pollo con queso, cremosa y deliciosa.",
    image: "https://example.com/images/empanada-pollo-2.jpg",
    category: "pollo"
  },
  {
    id: 5,
    price: 230,
    description: "Empanada de carne picante con un toque de ají.",
    image: "https://example.com/images/empanada-carne-2.jpg",
    category: "carne"
  },
  {
    id: 6,
    price: 190,
    description: "Empanada de verduras con queso y condimentos suaves.",
    image: "https://example.com/images/empanada-verdura-2.jpg",
    category: "verduras"
  },
  {
    id: 7,
    price: 200,
    description: "Empanada de pollo al curry suave, sabor exótico.",
    image: "https://example.com/images/empanada-pollo-3.jpg",
    category: "pollo"
  },
  {
    id: 8,
    price: 225,
    description: "Empanada de carne con aceitunas y huevo duro.",
    image: "https://example.com/images/empanada-carne-3.jpg",
    category: "carne"
  },
  {
    id: 9,
    price: 185,
    description: "Empanada de verduras al horno con especias mediterráneas.",
    image: "https://example.com/images/empanada-verdura-3.jpg",
    category: "verduras"
  }
];

export default products;
empanadas -argentinas/
├─ frontend/
│  ├─ public/                   # Archivos públicos (index.html, favicon)
│  ├─ src/
│  │  ├─ assets/                # Imágenes, iconos, fuentes
│  │  ├─ components/            # Componentes reutilizables
│  │  │   ├─ Navbar.jsx
│  │  │   ├─ Footer.jsx
│  │  │   ├─ CartWidget.jsx
│  │  │   └─ ...otros
│  │  ├─ pages/                 # Páginas principales
│  │  │   ├─ Home.jsx
│  │  │   ├─ Categories.jsx
│  │  │   ├─ AboutUs.jsx
│  │  │   ├─ Contact.jsx
│  │  │   └─ Cart.jsx
│  │  ├─ context/               # Context API o estado global (carrito, usuario)
│  │  │   └─ CartContext.jsx
│  │  ├─ services/              # Llamadas a API (fetch/axios)
│  │  │   └─ api.js
│  │  ├─ App.jsx
│  │  └─ index.jsx
│  ├─ package.json
│  └─ Dockerfile
│
├─ backend/
│  ├─ src/
│  │  ├─ controllers/           # Lógica de rutas
│  │  │   └─ productsController.js
│  │  ├─ routes/                # Endpoints
│  │  │   └─ api.js
│  │  ├─ models/                # Modelos de base de datos
│  │  │   └─ product.js
│  │  ├─ app.js
│  │  └─ server.js
│  ├─ package.json
│  └─ Dockerfile
│
├─ docker-compose.yml           # Levantar frontend + backend juntos
└─ .gitignore
te

frontend/App.jsx → React

backend/app.js + server.js → Node/Express

docker-compose.yml → levanta ambos juntos.
