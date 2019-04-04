/*
Configuring a graphQL server.
For this end we use graphql-yoga, a flexible GraphQL server based on Express.js.
Building a graphql server goes through two major steps.

1 - Schema type definition: typeDefs.
Holds the structure of the query we want to execute and the type of each field.

2 - The resolver is the function that will map the schema
definition to the data source and return a json response
*/

const { GraphQLServer } = require("graphql-yoga")
const fetch = require("node-fetch")

const resolvers = {
  Query: {
    getForecast: async (_, { woeid }) => {
      const response = await fetch(`https://www.metaweather.com/api/location/${woeid}/`)
      return response.json();
    }
  }
}

// The server takes the schema and the resolver as arguments
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})
server.start(() => console.log("Server is running on localhost:4000"))
