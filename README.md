# App usuarios Expo

Es un proyecto desarrollado en Expo React Native que se conecta a la api rest jsonplaceholder para obtener la respuesta de un listado de usuarios.

## Resolución de los problemas técnicos en el desarrollo de la app de usuarios.

1. Primer problema técnico resuelto

El primer requerimiento desarrollado es un manejador de estado global para que cuando se obtenga la respuesta de la petición get a la API REST jsonplaceholder, la información del listado de usuarios se guarde en memoria y pueda ser compartida la información del estado por las distintas pantallas de la app(inicio, detalle, búsqueda). Eso evita ser llamadas innecesarias a la API Rest y optimizar los recursos de la app.

2. Segundo problema técnico resuelto

El segundo requerimiento desarrollado es que cuando la aplicación se ejecuta en la pantalla de inicio, llega a la línea donde se intenta acceder a una propiedad de un objeto undefined. Se lanza un error. Como hemos integrado Sentry, este error se captura y se reporta automáticamente al proyecto en Sentry.


## Empezar

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar la app

   ```bash
    npx expo start
   ```

## Librerias configuradas en la app.

- [Expo](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [@sentry/react-native](https://docs.sentry.io/platforms/react-native/manual-setup/expo/#manual-install)
- [expo-router](https://docs.expo.dev/router/installation/#quick-start)

## Pantallas de la app

1. Inicio listado de usuarios

![Alt text](https://github.com/elagosq/app-users/blob/main/pantallas/inicio.png "Home")

2. Detalle de usuario seleccionado

![Alt text](https://github.com/elagosq/app-users/blob/main/pantallas/detalle.png "Detalle")

3. Pantalla para realizar una búsqueda de un usuario por su nombre

![Alt text](https://github.com/elagosq/app-users/blob/main/pantallas/search.png "Buscar")

