/* eslint-disable react/prop-types */
import React from 'react'
import _ from 'lodash'
import { Card, Image } from 'semantic-ui-react'
import BossIcons from '../assets/boss_icons'

const EncounterCard = ({
  encounter,
  selectedEncounters,
  setSelectedEncounters,
}) => {
  const cardProps = {
    raised: true,
    link: true,
    ...(_.includes(selectedEncounters, encounter) && { color: 'red' }),
  }

  const imageProps = {
    circular: true,
    floatd: 'left',
    size: 'mini',
    src: BossIcons[encounter.boss],
  }
  return (
    <Card {...cardProps} onClick={() => setSelectedEncounters(encounter)}>
      <Card.Content>
        <Image {...imageProps} />
        <Card.Content>{encounter.name}</Card.Content>
      </Card.Content>
    </Card>
  )
}

export default EncounterCard
