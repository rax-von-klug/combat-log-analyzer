import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ApolloProvider } from '@apollo/client'

import TopNav from './TopNav'
import ReportCodeEntry from './ReportCodeEntry'
import { ReportProvider } from '../providers/ReportProvider'
import AnalysisSelection from './AnalysisSelection'
import { useWarcraftLogsClient } from '../hooks/useWarcraftLogsClient'

const App = () => {
  const client = useWarcraftLogsClient()

  return (
    <ApolloProvider client={client}>
      <TopNav />
      <Grid style={{ marginTop: '2em' }}>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10}>
            <ReportProvider>
              <ReportCodeEntry />
              <AnalysisSelection />
            </ReportProvider>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
    </ApolloProvider>
  )
}

export default App
