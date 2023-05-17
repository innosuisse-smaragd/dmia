FROM nginx:1.23.3-alpine

ARG BUILD_VERSION
ARG UI_DIST

# labels
LABEL org.label-schema.vendor="mimacom ag"
LABEL org.label-schema.name="mima-starter-ui"
LABEL org.label-schema.version="${BUILD_VERSION}"

RUN mkdir /app
Run echo ${UI_DIST:-dist} 
COPY ${UI_DIST:-dist} /app
COPY nginx.conf /etc/nginx/nginx.conf
