/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Segment, Divider, Header, Icon, CardGroup } from 'semantic-ui-react'
import EncounterCard from './EncounterCard'

const Encounters = ({
  encounters,
  selectedEncounters,
  handleEncountersSelected,
}) => {
  const cards = encounters.map((encounter) => (
    <EncounterCard
      encounter={encounter}
      selectedEncounters={selectedEncounters}
      setSelectedEncounters={(boss) => handleEncountersSelected(boss)}
    />
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
        <Segment stacked placeholder>
          <Header icon>
            <Icon name="trophy" size="mini" />
            No Encounters Found
          </Header>
        </Segment>
      )}
      {encounters.length > 0 && (
        <Segment stacked textAlign="center">
          <CardGroup itemsPerRow={5}>{cards}</CardGroup>
        </Segment>
      )}
    </div>
  )
}

export default Encounters
