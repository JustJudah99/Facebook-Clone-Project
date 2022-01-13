import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UIContextProvider } from './context/UIContext'
import { UserContextProvider } from './context/UserContext'
import './index.css'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/'
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContextProvider>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </UserContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
