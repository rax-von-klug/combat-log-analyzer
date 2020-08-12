import React from 'react'
import {
  Grid,
} from 'semantic-ui-react'
import TopNav from './TopNav'
import ReportCodeEntry from './ReportCodeEntry'
import { ReportProvider } from '../providers/ReportProvider'

import AnalysisSelection from './AnalysisSelection'

const App = () => (
  <div>
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
  </div>
)


export default App