import { useState } from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import GetRecipes from './Components/GetRecipes'
import AddRecipe from './Components/AddRecipe'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors)
      }
      if (networkError) {
        console.log('networkError', networkError)
      }
    }),
    new HttpLink({
      uri: 'https://localhost:7085/graphql',
      credentials: 'same-origin'
    })
  ])
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApolloProvider client={client}>
      <GetRecipes />
      <AddRecipe />
      </ApolloProvider>
    </>
  )
}

export default App
