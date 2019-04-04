import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator
} from 'react-native'

import gql from "graphql-tag"
import { Query } from "react-apollo"

import { Card } from 'native-base'

// Query weather data data per location: WOEID
const GET_CITY = gql`
  query City($woeid: Int!){
    getForecast(woeid: $woeid) {
      title
      timezone
      consolidated_weather {
        applicable_date
        weather_state_name
        the_temp
        min_temp
        max_temp
        wind_speed
        humidity
        visibility
        air_pressure
      }
    }
  }
`
// Create an Apollo Query component
const WeatherData = (props) => (
  <Query
    query={GET_CITY}
    variables={{ woeid: props.city }}
  >
    {({ loading, error, data }) => {
      {/* Show activity indicator until data is retrieved */ }
      if (loading) return <ActivityIndicator size="large" color="#69FB" />
      {/* Show error message if there is a problem */ }
      if (error) return (
        <View style={{ alignItems: 'center' }}>
          <Text>Error :(</Text>
        </View>
      )
      {/* Otherwise, show weather data */ }
      return (
        <View style={{ flex: 1 }}>
          {/* City of ... */}
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.textStyle}>
              City of {data.getForecast.title}
            </Text>
          </View>
          {/* List of days with weather forecast */}
          <ScrollView contentContainerStyle={styles.container}>
            {
              data.getForecast.consolidated_weather.map((day, index) => (
                <Card key={index} style={styles.cardStyle}>
                  <Text style={styles.textStyle}>
                    Date: {day.applicable_date}
                  </Text>
                  <Text style={styles.textStyle}>
                    Forecast: {day.weather_state_name}
                  </Text>
                  <Text style={styles.textStyle}>
                    Temperature: {Math.round(day.the_temp)} °C
                  </Text>
                  <Text style={styles.textStyle}>
                    Max: {Math.round(day.max_temp)} °C
                  </Text>
                  <Text style={styles.textStyle}>
                    Min: {Math.round(day.min_temp)} °C
                  </Text>
                  <Text style={styles.textStyle}>
                    Humidity: {day.humidity} %
                  </Text>
                  <Text style={styles.textStyle}>
                    Wind speed: {Math.round(day.wind_speed)} Km/h
                  </Text>
                  <Text style={styles.textStyle}>
                    Visibility: {Math.round(day.visibility)} Km
                  </Text>
                  <Text style={styles.textStyle}>
                    Pressure: {Math.round(day.air_pressure)} mBar
                  </Text>
                </Card>
              ))
            }
          </ScrollView>
        </View>
      )
    }}
  </Query>
)

export default WeatherData

// Get the width of the device
let width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    padding: 5
  },
  cardStyle: {
    backgroundColor: '#69FB',
    padding: 10,
    width: width,
    marginBottom: 20
  },
})
