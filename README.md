# React Native Weather App With Expo, Apollo GraphQL.

This Weather App using React Native and Expo is wrapped with the Apollo GraphQL CLient. 
The Apollo Client is configured to connect with a GraphQL server (link [here](https://github.com/jtaylor1989/GraphQL-Server)) to retrieve weather forecast data.


## App Overview

* Users can type a city name.
* Users can browse weather forecast for the upcoming five days: Temperatures, humidity ..etc.

## Prerequisites

* [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
  * `npm install -g expo-cli`
  
* [Node JS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Configuring the project

* Clone this repo to your local machine.

```
git clone https://github.com/jtaylor1989/Weather-Apollo-Client.git

cd Weather-Apollo-Client
```


## Install client dependencies.

```
yarn

# or

npm install
```

## Run the GraphQL server

Follow the instructions in this [repo](https://github.com/jtaylor1989/GraphQL-Server).

## Connect the React Native app to the GraphQL server.

* Now that your server is up and running, you can start the client.

* Run the following in the terminal under your project directory.

```
expo start --ios

# or

expo start --android
```

