import React from 'react'
import { View } from 'react-native'

// Apollo Client dependencies
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import SearchBar from './src/components/SearchBar'
import WeatherData from './src/components/WeatherData'

// Instantiate an Apollo Client with our server-side endpoint
const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchBar />
        <WeatherData />
      </View>
    )
  }
}

// Decorate our App with the Apollo Provider component
const AppWrapped = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default AppWrapped

