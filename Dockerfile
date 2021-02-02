FROM google/dart

WORKDIR /app

ADD pubspec.* /app/
RUN  pub get
ADD . /app
RUN  pub get --offline
RUN flutter build web
CMD []
EXPOSE 8080
ENTRYPOINT ["/usr/bin/webdev", "serve"]