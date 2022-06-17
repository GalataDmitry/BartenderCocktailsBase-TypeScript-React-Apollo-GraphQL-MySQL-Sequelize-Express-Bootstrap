import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './styles/index.css'

const client = new ApolloClient({
    uri: 'http://localhost:5050/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render
(<ApolloProvider client={client}>
    <App/>
</ApolloProvider>)