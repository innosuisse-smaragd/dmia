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

To run the frontend project, open a terminal window at the root of the project and run the command bellow
```
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```
Once the command executed, you can access the app on [localhost:8081](http://localhost:8081)

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

## Deploy to Tomcat
As requested, the app needs to be deployed on a tomcat server. To do so, follow these steps:

Copy the war file and paste it in the tomcat webapps/dmia folder.

The app is deployed on tomcat and can be accessed by navigating to your_tomcat_host/dmia. For example if the tomcat server runs on localhost:8080, the app is accessible at localhost:8080/dmia
