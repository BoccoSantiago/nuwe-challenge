# Repte #3 - Login & Sign Up
En este proyecto creamos en REACT una página de login y una de registro teniendo en cuenta la gestión de errores y las restricciones que hay de acceso al iniciar sesión.
## Instalación
* Será necesario tener instalado NodeJS en nuestro sistema, en caso de no tenerlo descargado dirigirse a: https://nodejs.org/es/download/ 
* Clonar el repositorio https://github.com/BoccoSantiago/nuwe-challenge.git a un repositorio local.
* Abrir el repositorio con un editor de texto.
* Acceder a la carpeta repte-3.
* Escribir en la terminal $npm install para instalar los paquetes de node.
* Luego de la instalación, en la terminal, escribir $npm start para iniciar la app
El proyecto contiene 2 paginas web, estas paginas se encuentran linkeadas entre si mediante React Router.
La página principal es la del login donde tendremos que ingresar nuestro nombre de usuario y contraseña, aquí solo validaremos que los inputs no esten vacíos:
![login](https://user-images.githubusercontent.com/104364320/179394988-761e28a6-c2cf-4a8e-b9cf-f2431851ed93.JPG)
En caso de no estar registrados, nos podremos dirigir a la pagina de registro:
![register](https://user-images.githubusercontent.com/104364320/179395019-1ccffcd6-f256-4cc9-bec6-b8b60395e96c.JPG)
En esta página deberemos completar los datos para el registro, aquí es donde realizaremos la validación de datos más importante:
* No puedo enviar el formulario si existe algún input vacío.
* El email debe tener el formato correcto sino es necesario mostrar un popup de error.
* La contraseña debe cumplir:
Mínimo 6 caracteres.
Utilizar al menos una mayúscula.
Utilizar al menos una minúscula.
Contener algún carácter especial: . | , | * | + | -
* No se puede enviar el formulario si las contraseñas no coinciden (debe salir un mensaje de error).

* El username no puede contener espacios ni puntos.

Finalmente realizamos un deploy de la app: https://boccosantiago.github.io/login-signup/
