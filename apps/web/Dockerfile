# Step 1: Build the frontend (and backend if needed)
FROM node:18-alpine as builder
WORKDIR /app

# Copy the entire project to the builder container
COPY . .

# Install dependencies for the entire Nx workspace
RUN npm install

# Build the frontend using Nx
RUN npx nx run web:build --prod



# Step 2: Serve the built frontend with NGINX
FROM nginx:stable-alpine
ENV PORT 8080
COPY --from=builder /app/dist/apps/web /usr/share/nginx/html/
COPY apps/web/nginx.conf /etc/nginx/conf.d/configfile.template
RUN sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
CMD ["nginx", "-g", "daemon off;"]







#DEVELOPMENT

# FROM docker.io/nginx:stable-alpine
# ENV PORT 8080
# COPY dist/apps/web/* /usr/share/nginx/html/
# COPY apps/web/nginx.conf /etc/nginx/conf.d/configfile.template
# RUN sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
# CMD ["nginx", "-g", "daemon off;"]
