import React from 'react'
import { StyleSheet } from 'react-native'

// Native base imports
import { Container, Header, Item, Input, Button, Text } from 'native-base'

// Expo Icons
import { Ionicons } from '@expo/vector-icons'


const SearchBar = (props) => (
  <Container style={styles.container}>
    <Header style={styles.headerStyle} >
      <Text style={{ fontSize: 28 }}>Weather Forcast</Text>
    </Header>
    <Item full style={{ marginBottom: 15 }}>
      <Ionicons name="ios-search" style={styles.iconStyle} />
      <Input
        placeholder="Enter city name"
        returnKeyType='done'
        onChangeText={props.city} />
      <Ionicons name="md-rainy" style={styles.iconStyle} />
    </Item>
    <Button
      full
      primary
      onPress={props.showCityWeather}>
      <Text>Search</Text>
    </Button>
  </Container>
)

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
  },
  iconStyle: {
    fontSize: 26,
    padding: 5
  }
})
