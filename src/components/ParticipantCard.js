/* eslint-disable react/prop-types */
import React from 'react'
import _ from 'lodash'
import { Card, Image, Label } from 'semantic-ui-react'
import ClassIcons from '../assets/class_icons'

const CLASS_COLORS = {
  Warrior: 'brown',
  Rogue: 'yellow',
  Mage: 'blue',
  Druid: 'orange',
  Warlock: 'purple',
  Hunter: 'green',
  Paladin: 'pink',
  Priest: 'grey',
}

const ParticipantCard = ({
  participant,
  selectedParticipants,
  setSelectedParticipant,
}) => {
  const cardProps = {
    raised: true,
    link: true,
    ...(_.includes(selectedParticipants, participant) && {
      color: 'red',
    }),
  }

  const imageProps = {
    circular: true,
    style: { backgroundColor: 'black' },
    floatd: 'right',
    size: 'mini',
    src: ClassIcons[_.toLower(participant.subType)],
  }

  return (
    <Card {...cardProps} onClick={() => setSelectedParticipant(participant)}>
      <Card.Content>
        <Image {...imageProps} />
        <Card.Content>{participant.name}</Card.Content>
        <Card.Meta>
          <Label size="tiny" color={CLASS_COLORS[participant.subType]}>
            {participant.subType}
          </Label>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default ParticipantCard
