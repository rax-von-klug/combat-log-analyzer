import React from 'react'
import { Grid } from 'semantic-ui-react'

import { ReportProvider } from '../providers/ReportProvider'
import ReportCodeEntry from './ReportCodeEntry'
import AnalysisSelection from './AnalysisSelection'

const Home = () => (
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
)

export default Home
