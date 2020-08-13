/* eslint-disable react/prop-types */
import React from 'react'
import _ from 'lodash'
import { Card, Image, Label } from 'semantic-ui-react'
import ClassIcons from '../assets/class_icons'

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

  const cardProps = {
    raised: true,
    link: true,
    ...(_.includes(selectedParticipants, participant) && {
      color: 'red',
    }),
  }

  return (
    <Card {...cardProps} onClick={() => setSelectedParticipant(participant)}>
      <Card.Content>
        <Image
          src={ClassIcons[_.toLower(participant.type)]}
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
