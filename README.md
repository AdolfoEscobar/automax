# Automax

Este repositorio contiene una aplicación web simple para la gestión de renta de vehículos, desarrollada utilizando Node.js y Docker.

## Descripción

Automax es una plataforma web que ofrece servicios de renta de vehículos de alta gama en la ciudad de Chihuahua. La aplicación permite a los usuarios explorar los vehículos disponibles, enviar consultas a través de un formulario de contacto y recibir confirmación de la renta.

## Link Docker
Docker Hub: [adolfoescobar/automax:](https://hub.docker.com/r/adolfoescobar/automax) Aquí puedes encontrar la imagen de Docker para la aplicación Automax.

## Características

- Visualización de vehículos disponibles.
- Formulario de contacto para enviar consultas.
- Almacenamiento de datos de consulta en un archivo de texto en el servidor.

## Instalación y Uso

### Requisitos previos
- Docker instalado en tu máquina.

### Instrucciones

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/adolfoescobar/automax.git
   
2. Accede al directorio del proyecto:
   ```bash
   cd automax

3. Haz pull de la imagen de Docker:
   ```bash
   sudo docker pull adolfoescobar/automax

4. Corre la imagen de Docker/Corre la aplicacion con node donde tengas clonado el repositorio:
   ```bash
   sudo docker run -d --name automax_container -p 8888:8888 adolfoescobar/automax:etiqueta
   node app.js
   
5. Accede al puerto del servidor:
   ```bash
   http://localhost:8888
   
5. Verifica los datos desde la imagen de docker:
   ```bash
   http://localhost:8888/formulario_data.txt

## Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una rama para tu contribución.
Realiza tus cambios y asegúrate de que las pruebas pasen.
Haz un pull request a la rama principal del repositorio original.


