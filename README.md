# Davieventos
# DaviEventos - Plataforma de Gestión de Eventos (Frontend)

## Descripción del Proyecto

DaviEventos es una aplicación web para la gestión de eventos y reservas que permite a los usuarios registrarse, iniciar sesión, visualizar eventos disponibles, crear nuevos eventos, y realizar reservas. La plataforma implementa validaciones para controlar la capacidad máxima de asistentes por evento y ofrece una experiencia fluida a través de una interfaz intuitiva.

## Características Principales

### 1. Gestión de Usuarios
- Registro de usuarios con validación de datos
- Inicio de sesión con autenticación JWT
- Perfil de usuario personalizado

### 2. Gestión de Eventos
- Visualización de todos los eventos disponibles
- Creación de eventos personalizados
- Edición y eliminación de eventos
- Filtrado por categorías

### 3. Sistema de Reservas
- Creación de reservas para eventos
- Visualización de reservas realizadas
- Cancelación de reservas
- Validación de capacidad máxima

### 4. Categorización de Eventos
- Creación y gestión de categorías
- Asignación de categorías a eventos
- Visualización de eventos por categoría

## Tecnologías Utilizadas

- **Angular 19.2.1**: Framework para desarrollo frontend
- **TypeScript**: Lenguaje de programación principal
- **Bootstrap 5**: Framework CSS para diseño responsivo
- **JWT**: Para autenticación y autorización
- **RxJS**: Para programación reactiva
- **Angular Forms**: Para validación de formularios
- **Angular Router**: Para navegación entre componentes
- **HttpClient**: Para comunicación con el backend

## Estructura del Proyecto
```
src/
├── app/
│   ├── auth/                      # Autenticación (login y registro)
│   ├── core/                      # Servicios, interceptores y guardias
│   │   ├── guards/                # Protección de rutas
│   │   ├── interceptors/          # Interceptores HTTP
│   │   └── service/               # Servicios de la aplicación
│   ├── features/                  # Módulos de funcionalidad principal
│   │   ├── categories/            # Gestión de categorías
│   │   ├── events/                # Gestión de eventos
│   │   └── reservations/          # Gestión de reservas
│   ├── layouts/                   # Componentes de estructura visual
│   ├── shared/                    # Componentes y modelos compartidos
│   │   ├── components/            # Componentes reutilizables
│   │   └── models/                # Interfaces y modelos de datos
│   └── app.component.*            # Componente raíz
├── assets/                        # Recursos estáticos
├── environments/                  # Configuración de entornos
└── index.html                     # Página principal
```
## Buenas Prácticas Implementadas

### Arquitectura y Diseño
- **Componentes Standalone**: Implementación modular con componentes independientes
- **Lazy Loading**: Carga bajo demanda para optimización de rendimiento
- **Servicios Especializados**: Separación de lógica de negocio y presentación
- **Modelo de Datos**: Interfaces TypeScript para tipado estricto

### Seguridad
- **JWT Interceptor**: Inyección automática de tokens en peticiones
- **Guards**: Protección de rutas para usuarios autenticados
- **Validación de Formularios**: Prevención de datos inválidos
- **Manejo de Errores**: Captura y visualización apropiada de errores

### UI/UX
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Feedback Visual**: Loaders, mensajes de éxito y error
- **Modales de Confirmación**: Para acciones críticas como eliminación
- **Navegación Intuitiva**: Menú contextual y breadcrumbs

## Funcionalidades Destacadas

### Sistema de Autenticación
- Registro con validación de contraseñas
- Login con almacenamiento de token JWT
- Cierre de sesión seguro
- Redirección inteligente basada en estado de autenticación

### Gestión de Eventos
- Vista de detalle con toda la información del evento
- Formulario intuitivo para crear y editar eventos
- Confirmación para eliminación de eventos
- Indicadores visuales de capacidad disponible

### Reservas
- Proceso simplificado de creación de reservas
- Vista consolidada de todas las reservas del usuario
- Indicadores visuales del estado de las reservas
- Confirmación para cancelación de reservas

## Conclusiones y Mejoras Futuras

DaviEventos Frontend proporciona una interfaz moderna y funcional para la gestión de eventos, implementando los requisitos especificados con un enfoque en la experiencia de usuario, seguridad y buenas prácticas de desarrollo.

### Posibles Mejoras Futuras
- Implementación de pruebas unitarias con Jest o Jasmine
- Adaptación para PWA (Progressive Web App)
- Integración con notificaciones push
- Optimización de rendimiento para carga inicial

---

**Desarrollado por:** José Daniel García Arias  
**Versión:** 1.0.0  
**Fecha:** Abril 2024



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
