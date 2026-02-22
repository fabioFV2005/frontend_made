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

├── 📁 assets/          # Archivos estáticos (Imágenes, fuentes, iconos)

├── 📁 context/         # Estados globales (React Context API)

├── 📁 hooks/           # Custom Hooks globales (useAuth, useFetch)

├── 📁 layout/          # Estructura visual (Navbar, Footer, Sidebars)

├── 📁 pages/           # Vistas principales (Home, Login, Dashboard)

├── 📁 services/        # Cliente API y peticiones (Axios/Fetch)

├── 📁 shared/          # 📦 Núcleo reutilizable de la aplicación

│     ├── 📁 components/  # Componentes UI base (Buttons, Modals, Inputs)

│     ├── 📁 utils/       # Funciones puras (Formateadores, validaciones)

│     └── 📁 constants/   # Enums, rutas y variables constantes

├── 📁 styles/          # Estilos globales y temas (Tailwind/CSS)

├── 📄 App.jsx          # Configuración de rutas y Providers

└── 📄 main.jsx         # Punto de entrada del DOM
