# DevStream MVP

Aplicación web para gestionar y visualizar una colección de videos académicos categorizados en Frontend, Backend y DevOps con búsqueda integrada.

## Características

- **Visualización de videos**: Galería de videos con detalles
- **Búsqueda**: Filtra videos por título, descripción o categoría
- **Agregar videos**: Modal para añadir nuevos videos a la colección
- **Responsive**: Diseño adaptable a diferentes pantallas

## Tecnologías

**Backend:**

- Node.js + Express
- MongoDB (modelos)
- Middleware de logging

**Frontend:**

- React 18
- Vite
- CSS personalizado

## Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

## Instalación y ejecución

### Backend

```bash
cd backend
npm install
npm start
```

Servidor ejecutándose en `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación disponible en `http://localhost:5173`

## Estructura del proyecto

```
├── backend/          # Servidor Express
│   ├── controllers/  # Lógica de negocio
│   ├── models/       # Esquemas de datos
│   ├── routes/       # Rutas API
│   └── config/       # Configuración
├── frontend/         # Aplicación React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── hooks/       # Custom hooks
│   │   ├── services/    # Servicios API
│   │   └── styles/      # Estilos CSS
```

## Scripts disponibles

**Backend:**

- `npm start` - Inicia el servidor

**Frontend:**

- `npm run dev` - Desarrollo con HMR
- `npm run build` - Compilación para producción
- `npm run preview` - Vista previa de producción
