/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Divider, Header, Icon, CardGroup, Segment } from 'semantic-ui-react'
import ParticipantCard from './ParticipantCard'

const Participants = ({
  participants,
  selectedParticipants,
  handleParticipantsSelected,
}) => {
  const cards = participants.map((participant) => (
    <ParticipantCard
      participant={participant}
      selectedParticipants={selectedParticipants}
      setSelectedParticipant={(raider) => handleParticipantsSelected(raider)}
    />
  ))

  return (
    <div>
      <Divider horizontal section>
        <Header as="h4">
          <Icon name="user outline" size="mini" />
          Participants
        </Header>
      </Divider>
      {participants.length === 0 && (
        <Segment stacked placeholder>
          <Header icon>
            <Icon name="user outline" />
            No Participants Found
          </Header>
        </Segment>
      )}
      {participants.length > 0 && (
        <Segment stacked>
          <CardGroup itemsPerRow={5}>{cards}</CardGroup>
        </Segment>
      )}
    </div>
  )
}

export default Participants
