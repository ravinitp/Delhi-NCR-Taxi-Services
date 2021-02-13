FROM google/dart-runtime
RUN mkdir /pub-cache

ENV PUB_CACHE=/.pub-cache \
    PATH="${PATH}:/.pub-cache/bin"

RUN dart pub global activate webdev 
ADD . /app/
WORKDIR /app
RUN dart pub get
RUN webdev --version
# ENV PORT=8080
# RUN echo $PORT
ENTRYPOINT ["webdev" ,"serve","--hostname","0.0.0.0"]
# ENTRYPOINT ["/bin/sh" ,"-C" ,"webdev serve  --hostname 0.0.0.0"]
