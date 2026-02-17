FROM nginx:alpine

COPY . /usr/share/nginx/html

# Override the server_name to accept any host
RUN sed -i 's/server_name  localhost;/server_name  _;/g' /etc/nginx/conf.d/default.conf

EXPOSE 80
