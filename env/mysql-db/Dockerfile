FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=root
COPY ./env/mysql-db/init /docker-entrypoint-initdb.d
EXPOSE 3306
