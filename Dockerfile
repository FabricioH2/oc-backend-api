# Usa la imagen ligera de Node.js basada en Alpine
FROM node:18-alpine

# Crea un directorio de trabajo y establece permisos
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Instala dependencias y limpia el cache para mantener la imagen pequeña
COPY package*.json ./
RUN npm install --production
RUN npm cache clean --force

# Copia el código fuente
COPY src/ ./src/

# EXPOSE (Documentación)
EXPOSE 3000

# Seguridad: Corre como un usuario no-root
RUN adduser -D appuser
USER appuser

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]