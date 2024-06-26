# Dmia

## Installation
Here is a step by step guide on how to install and run the project:

### Install Node.js and npm
You need to have Node.js and npm installed on your computer before installing project dependencies. Here is a guide on how to do it:
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Install jdk and maven
You need to have java and maven installed on your computer before installing project dependencies. Here is a guide on how to do it:
- https://www.oracle.com/java/technologies/downloads/
- https://maven.apache.org/install.html

### Install project dependencies
To install project dependencies, open a terminal window at the root of the project and run the command bellow
```
mvn clean install
```

## Run the project (local)

### Run the backend
To run the backend project, open a terminal window at the root of the project and run the command bellow
```
mvn spring-boot:run -D spring-boot.run.profiles=dev,mock-rest-client
```
Once the command executed, you can access the app on [localhost:8081](http://localhost:8081)

The rest end point are accessible through this endpoint [http://localhost:8081/swagger-ui/index.html](http://localhost:8081/swagger-ui/index.html)

### Run the frontend
To run the frontend project, open a terminal window at the folder 'src/main/js' of the project and run the command bellow
```
npm install
npm run dev
```
Once the command executed, you can access the app on [localhost:5173](http://localhost:5173)


## Testing user
The user details for testing are :
- Alex Müller
- 25.08.1973

## Build the project
We use maven to build the application, so you will need to install it before being able to build it.

Here are the commands you need to run in order to build the project.

Build the application from the project root
```
mvn clean install
```

After the command executed, the app 'dmia-X-X-X-SHAPSHOT.war' is built and can be found in the target/ folder.

## Docker
A docker container for the project can be created by running the following command from the root of the project :
```
.\mvnw spring-boot:build-image
```

This will create a container named dmia. This container should use port 8081. To run it you can use the following command

```
docker run -it -p 8081:8081 dmia:0.0.1-SNAPSHOT
```

## Deploy to Tomcat (local)
As requested, the app needs to be deployed on a tomcat server. To do so, follow these steps:

### Deploy from the command line
Before deploying, set the tags </home> of the pom.xml with the absolute path to your local tomcat installation.

```
mvn cargo:deploy
```

### Deploy manually
From you file explorer, navigate to the target folder and copy the 'dmia-X-X-X-SHAPSHOT.war' file.

Paste it at the root of the tomcat/webapps folder.

The app is deployed on tomcat and can be accessed by navigating to your_tomcat_host/dmia. For example if the tomcat server runs on localhost:8080, the app is accessible at localhost:8080/dmia

## Posting tasks

Tasks can be posted to the application by using the endpoint /api/v1/tasks

In order to be accepted by the server, the posted task need to have the same data structure as defined here: https://smaragd-6dd61.web.app/Task-GENERATED_BY_SERVER.json.html
