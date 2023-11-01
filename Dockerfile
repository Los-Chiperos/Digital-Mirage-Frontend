<<<<<<< HEAD
FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Configurar Nginx para servir la aplicación
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
#copiamos la configuracion de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
=======
FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm cache clean --force  # Limpia la caché de Node Modules
RUN npm install --save @fortawesome/fontawesome-svg-core
RUN npm run build

# Etapa 2: Configurar Nginx para servir la aplicación
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

>>>>>>> 4e4f8973a8cf21cfd2b0a1e6def6d60b4464cc4b
