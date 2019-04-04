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

* You should be able to enter a city name and get the weather forecast for the upcoming days.

<img width="798" alt="Demo" src="https://user-images.githubusercontent.com/26605247/55568296-5ab17180-56f7-11e9-9dd5-d9330e02d3d8.png">

