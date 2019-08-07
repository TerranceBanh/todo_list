// React Modules
import React from 'react'
import ReactDOM from 'react-dom'

// Apollow Modules
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

// App Component
import App from './App'

// Service Worker
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  uri: "http://localhost:2345"
})

ReactDOM.render(
	<ApolloProvider client={client}>
			<App/>
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
