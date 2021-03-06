import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/'
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
