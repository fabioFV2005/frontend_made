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
├── 📁 assets/       # Recursos estáticos (Imágenes, fuentes, iconos SVG)
├── 📁 components/   # Componentes atómicos y reutilizables (Botones, Inputs, Cards)
├── 📁 context/      # Estados globales mediante React Context API
├── 📁 hooks/        # Custom Hooks para lógica reutilizable (useAuth, useLocalStorage)
├── 📁 layout/       # Componentes estructurales de la interfaz (Navbar, Sidebar, Footer)
├── 📁 pages/        # Componentes de vista principal (corresponden a las rutas)
├── 📁 services/     # Lógica de comunicación con APIs (Instancias de Axios, servicios)
├── 📁 styles/       # Estilos globales, variables de CSS o configuración de temas
├── 📁 utils/        # Funciones puras de utilidad (Formateadores, validaciones, constantes)
├── 📄 App.jsx       # Componente raíz y configuración de rutas
└── 📄 main.jsx      # Punto de entrada de la aplicación
