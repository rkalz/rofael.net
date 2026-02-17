FROM nginx:alpine

COPY . /usr/share/nginx/html

# Override the server_name to accept any host
RUN sed -i 's/server_name  localhost;/server_name  _;/g' /etc/nginx/conf.d/default.conf

# Hash static assets
RUN cd /usr/share/nginx/html && \
    HASH=$(sha256sum styles.css | cut -c1-8) && \
    mv styles.css styles.$HASH.css && \
    find . -type f -name "*.html" -exec \
    sed -i "s/styles.css/styles.$HASH.css/g" {} +

EXPOSE 80
