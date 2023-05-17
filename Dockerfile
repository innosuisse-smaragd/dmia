FROM nginx:1.23.3-alpine

ARG BUILD_VERSION
ARG UI_DIST

# labels
LABEL org.label-schema.vendor="mimacom ag"
LABEL org.label-schema.name="Dmia"
LABEL org.label-schema.version="${BUILD_VERSION}"

RUN echo "---------- BEFORE MKDIR /APP ----------"
RUN mkdir /app
RUN echo "---------- MKDIR /APP DONE ----------"
RUN echo "---------- ECHO UI DIST ----------"
Run echo ${UI_DIST:-dist} 
RUN echo "---------- ECHO UI DIST DONE ----------"
COPY ${UI_DIST:-dist} /app
COPY nginx.conf /etc/nginx/nginx.conf
