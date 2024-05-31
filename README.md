# Automax

Este repositorio contiene una aplicación web simple para la gestión de renta de vehículos, desarrollada utilizando Node.js y Docker.

## Descripción

Automax es una plataforma web que ofrece servicios de renta de vehículos de alta gama en la ciudad de Chihuahua. La aplicación permite a los usuarios explorar los vehículos disponibles, enviar consultas a través de un formulario de contacto y recibir confirmación de la renta.

## Link Docker
Docker Hub: adolfoescobar/automax: Aquí puedes encontrar la imagen de Docker para la aplicación Automax.

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

3. Construye la imagen de Docker:
   ```bash
   sudo docker build -t adolfoescobar/automax:etiqueta .

4. Construye la imagen de Docker:
   ```bash
   sudo docker run -d --name automax_container -p 8888:8888 adolfoescobar/automax:etiqueta
   
5. Accede al puerto del servidor:
   ```bash
   http://localhost:8888


