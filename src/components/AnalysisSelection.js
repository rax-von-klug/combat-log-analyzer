import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { Divider, Segment, Button } from 'semantic-ui-react'

import Participants from './Participants'
import Encounters from './Encounters'
import { ReportContext } from '../providers/ReportProvider'

const AnalysisSelection = () => {
  const [selected, setSelection] = useState({
    encounters: [],
    participants: [],
  })
  const { report } = useContext(ReportContext)

  const handleEncounterSelected = (encounter) => {
    if (_.includes(selected.encounters, encounter)) {
      setSelection({
        encounters: _.filter(selected.encounters, (id) => id !== encounter),
        participants: selected.participants,
      })
    } else {
      setSelection({
        encounters: [...selected.encounters, encounter],
        participants: selected.participants,
      })
    }
  }

  const handleParticipantsSelected = (raider) => {
    if (_.includes(selected.participants, raider)) {
      setSelection({
        encounters: selected.encounters,
        participants: _.filter(selected.participants, (id) => id !== raider),
      })
    } else {
      setSelection({
        encounters: selected.encounters,
        participants: [...selected.participants, raider],
      })
    }
  }

  return (
    <div>
      <Encounters
        handleEncounterSelected={handleEncounterSelected}
        encounters={report.raid.encounters}
      />
      <Participants
        handleParticipantsSelected={handleParticipantsSelected}
        participants={report.raid.participants}
        selectedParticipants={selected.participants}
      />
      <Divider />
      <Segment basic textAlign="center">
        <Button animated="fade" primary>
          <Button.Content hidden>
            {`${selected.encounters.length} encounters / ${selected.participants.length} participants`}
          </Button.Content>
          <Button.Content visible>Analyze WarcraftLog Report</Button.Content>
        </Button>
      </Segment>
    </div>
  )
}

export default AnalysisSelection
