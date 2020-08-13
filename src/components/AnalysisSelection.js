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

  const handleEncountersSelected = (encounter) => {
    console.log('SELECT ENCOUNTER', encounter)
    console.log('SELECTED ENCOUNTERS', selected.encounters)
    if (_.includes(selected.encounters, encounter)) {
      setSelection({
        encounters: _.filter(
          selected.encounters,
          (x) => x.boss !== encounter.boss,
        ),
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
        participants: _.filter(
          selected.participants,
          (x) => x.guid !== raider.guid,
        ),
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
        encounters={report.fights}
        selectedEncounters={selected.encounters}
        handleEncountersSelected={handleEncountersSelected}
      />
      <Participants
        participants={report.friendlies}
        selectedParticipants={selected.participants}
        handleParticipantsSelected={handleParticipantsSelected}
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
