# Inicializacion del proyecto

1.- ejecuta el siguiente comando 
```
    npm install
```
2.- configura el archivo .env
```
    PORT=****
```
3.- corre el backend (si no lo tienes clona el repositorio, hay un readme para ejecutar el servidor)
```
    git clone https://github.com/fabioFV2005/backend_made
```

4.- corre el frontend
```
    npm run dev
```


# Arquitectura del sistema 
src/
├── assets/             # Archivos estáticos (imágenes, fuentes, svg)
├── components/         # Componentes globales y reutilizables (Botones, Inputs)
├── context/            # Proveedores de estado global (Context API)
├── hooks/              # Custom hooks reutilizables (useAuth, useFetch)
├── layout/             # Componentes de estructura (Navbar, Footer, Sidebar)
├── pages/              # Componentes de vista (Home, Login, Dashboard)
├── services/           # Llamadas a APIs (instancias de Axios, fetch)
├── styles/             # Estilos globales o configuraciones de Tailwind/SASS
├── utils/              # Funciones puras de ayuda (formateo de fechas, validaciones)
├── App.jsx             # Componente raíz y definición de rutas
└── main.jsx            # Punto de entrada de la aplicación
