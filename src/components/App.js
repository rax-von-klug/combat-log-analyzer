import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import NavBar from './NavBar'
import Home from './Home'
import Analyze from './Analyze'
import { useWarcraftLogsClient } from '../hooks/useWarcraftLogsClient'

const App = () => {
  const client = useWarcraftLogsClient()

  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/analyze" exact component={Analyze} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
