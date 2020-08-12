/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import _ from 'lodash'
import { Segment, Divider, Header, Table, Icon } from 'semantic-ui-react'
import EncounterRow from './EncounterRow'

const Encounters = ({handleEncounterSelected, encounters}) => {

  const encounterRows = (chunkedEncounters) =>
    chunkedEncounters.map((rowData, index) => (
      <EncounterRow key={index} encounters={rowData} />
    ))

  return (
    <div>
      <Divider horizontal section>
        <Header as="h4">
          <Icon name="trophy" size="mini" />
          Encounters
        </Header>
      </Divider>
      {encounters.length === 0 && (
        <Segment attached placeholder>
          <Header icon>
            <Icon name="trophy" size="mini" />
            No Encounters Found
          </Header>
        </Segment>
      )}
      {encounters.length > 0 && (
        <Segment attached textAlign="center">
          <Table attached basic="very">
            <Table.Body>{encounterRows(_.chunk(encounters, 3))}</Table.Body>
          </Table>
        </Segment>
      )}
    </div>
  )
}

export default Encounters
