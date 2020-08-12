/* eslint-disable react/prop-types */
import React from 'react'
import _ from 'lodash'
import { Card, Image, Label } from 'semantic-ui-react'
import {
  druid,
  hunter,
  warlock,
  paladin,
  priest,
  rogue,
  warrior,
  mage,
} from '../assets'

const IMAGES = {
  druid,
  hunter,
  warlock,
  paladin,
  priest,
  rogue,
  warrior,
  mage,
}

const ParticipantCard = ({
  participant,
  selectedParticipants,
  setSelectedParticipant,
}) => {
  const ratingColor = (score) => {
    if (score === 100) return { color: 'pink' }

    if (_.inRange(score, 95, 99) || score === 99) return { color: 'orange' }

    if (_.inRange(score, 75, 94) || score === 94) return { color: 'purple' }

    if (_.inRange(score, 50, 74) || score === 74) return { color: 'blue' }

    if (_.inRange(score, 25, 49) || score === 49) return { color: 'green' }

    return { color: 'grey' }
  }

  return (
    <Card
      raised
      link
      {...(_.includes(selectedParticipants, participant.id)
        ? { color: 'red' }
        : {})}
      onClick={() => setSelectedParticipant(participant.id)}
    >
      <Card.Content>
        <Image
          src={IMAGES[_.toLower(participant.class)]}
          style={{ backgroundColor: 'black' }}
          circular
          size="mini"
          avatar
          floated="right"
        />
        <Card.Content>{participant.name}</Card.Content>
        <Card.Meta>
          <Label size="tiny" {...ratingColor(participant.score)}>
            Rating <Label.Detail>{participant.score}</Label.Detail>
          </Label>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default ParticipantCard
