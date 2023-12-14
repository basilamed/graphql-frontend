import { useState, ErrorBoundary } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import GetRecipes from './Components/GetRecipes';
import AddRecipe from './Components/AddRecipe';
import UpdateRecipe from './Components/UpdateRecipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
      }
      if (networkError) {
        console.log('networkError', networkError);
      }
    }),
    new HttpLink({
      uri: 'https://localhost:7085/graphql',
      credentials: 'same-origin',
    }),
  ]),
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/update/:id" element={<ApolloProvider client={client}><UpdateRecipe /></ApolloProvider>} />
          <Route path="/" element={<ApolloProvider client={client}><GetRecipes /><AddRecipe /></ApolloProvider>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
