# Use an official nginx image from Docker Hub
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy all the files from the current directory (on your host) to /usr/share/nginx/html
COPY ./src /usr/share/nginx/html

# Expose a different port than Jenkins (for example, 8081)
EXPOSE 8081

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
