import React from 'react'
import { useLocation } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

const Analyze = () => {
  const location = useLocation()

  const encountersMapped = location.state.encounters.map((e) => (
    <div>
      {e.name}
      <br />
    </div>
  ))

  return (
    <Grid style={{ marginTop: '2em' }}>
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>{encountersMapped}</Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Analyze
