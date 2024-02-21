# Dmia

## Installation
Here is a step by step guide on how to install and run the project:

### Install Node.js and npm
You need to have Node.js and npm installed on your computer before installing project dependencies. Here is a guide on how to do it:
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Install Turborepo globally
You need to have turborepo installed globally to run the project. In order to do so, run the following command:
```
npm install turbo --global
```

### Install project dependencies
To install project dependencies, open a terminal window at the root of the project and run the command bellow
```
npm install
```

## Run the project
To run the project, open a terminal window at the root of the project and run the command bellow
```
turbo dev
```
Once the command executed, you can access the app on [localhost:5173](http://localhost:5173)

Once you are done running the project, simply press the keys __"ctrl & c"__ to stop the process

## Testing user
The user details for testing are :
- Alex Müller
- 25.08.1973

## Build the project
We use docker to containerize the application so you will need to install it before being able to build it. A guide on how to so can be found at https://www.docker.com/get-started/

Here are the commands you need to run in order to build the project.

From the project root, navigate to the frontend app
```
cd apps/frontend
```

Once you navigated to the root of the frontend app, execute this command:
```
docker build -t dmia-frontend .
```
After the command executed, the app is built. In order to verify that the app exists, you can run the following command:
```
docker images
```
If the build process succeeded, an image with the name dmia-frontend appears in the list of repositories.

## Deploy to Tomcat
As requested, the app needs to be deployed on a tomcat server. To do so, follow these steps:

From the project root, navigate to the frontend app
```
cd apps/frontend
```

Once you navigated to the root of the frontend app, execute this command:
```
npm run build
```

After the command executed, the app is built and can be found in the apps/frontend/dist folder.

Copy the dist folder and paste it in the tomcat webapps folder. Rename the dist folder dmia.

The app is deployed on tomcat and can be accessed by navigating to your_tomcat_host/dmia. For example if the tomcat server runs on localhost:8080, the app is accessible at localhost:8080/dmia
