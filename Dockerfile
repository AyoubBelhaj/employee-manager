# Use Node image for building Angular app
FROM node:14 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

# Use Nginx to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]