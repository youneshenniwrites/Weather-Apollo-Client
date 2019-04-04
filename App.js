import React from 'react'
import { View, Alert, Keyboard } from 'react-native'

// Apollo Client dependencies
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import SearchBar from './src/components/SearchBar'
import WeatherData from './src/components/WeatherData'

// Instantiate an Apollo Client to fetch API data
const client = new ApolloClient({
  // Server side endpoint
  uri: "http://localhost:4000/"
})

class App extends React.Component {
  state = {
    city: undefined,
    cityLocation: 44418, // Default location is London
  }

  // Get the city WOEID
  getCityCoordinates = async () => {
    try {
      const city = await fetch(`https://www.metaweather.com/api/location/search/?query=${this.state.city}`)
      const jsonCity = await city.json()
      const woeid = await jsonCity[0]['woeid']
      this.setState({ cityLocation: woeid })
      Keyboard.dismiss()
    } catch {
      Alert.alert('Make sure to type a proper city name!')
    }
  }

  // Get city name from user input
  onChangeText = (input) => {
    const city = this.cityNameFormatted(input)
    this.setState({ city: city })
  }

  // Format city name for the API query. Example: 'New York ' ===> 'new+york'
  cityNameFormatted = (input) => {
    const queryCity = input.trim().split(' ').join('+')
    queryCity.trim()
    return queryCity.toLowerCase()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Pass city and location to Search component */}
        <SearchBar
          location={this.getCityCoordinates}
          city={this.onChangeText}
        />
        {/* Component to query data based on location using Apollo GraphQL */}
        <WeatherData
          city={this.state.cityLocation}
        />
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

