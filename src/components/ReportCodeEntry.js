import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { gql, useLazyQuery } from '@apollo/client'
import {
  Card,
  Input,
  Message,
  Segment,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import { ReportContext } from '../providers/ReportProvider'

const GET_REPORTDATA = gql`
  query GetReportData($code: String!) {
    reportData {
      report(code: $code) {
        code
        masterData {
          actors(type: "Player") {
            id
            gameID
            name
            subType
          }
        }
        fights(killType: Encounters) {
          id
          name
          startTime
          endTime
        }
        startTime
        endTime
      }
    }
  }
`

const ReportCodeEntry = () => {
  const [input, setInput] = useState('')
  const [hasError, setHasError] = useState(false)
  const { updateReport } = useContext(ReportContext)
  const [getReportData, { loading }] = useLazyQuery(GET_REPORTDATA, {
    onCompleted: ({
      code,
      reportData: {
        report: {
          fights,
          masterData: { actors },
        },
      },
    }) => {
      const report = {
        code,
        fights,
        friendlies: _.filter(actors, (actor) => actor.subType !== 'Unknown'),
      }

      updateReport(report)
    },
  })

  const handleOnClick = () => {
    const regex = RegExp(
      '^(?<url>https://classic.warcraftlogs.com/reports/){0,1}(?<code>[a-zA-Z0-9]{16}[#]{0,1}[a-zA-Z0-9#=&-/]{0,})$',
    )
    const matches = regex.exec(input)

    if (!matches) {
      setHasError(true)
      return
    }

    const reportCode = matches.groups.code
    setHasError(false)

    getReportData({ variables: { code: reportCode } })
  }

  return (
    <Segment basic>
      {loading && (
        <Dimmer active inverted>
          <Loader indeterminate>Fetching WarcraftLog Report</Loader>
        </Dimmer>
      )}
      <Card centered fluid raised color="green">
        <Card.Content>
          <Card.Header textAlign="center">
            Enter the Classic WarcraftLogs url or report code you wish to
            analyze.
          </Card.Header>
          <Card.Description textAlign="center">
            <Input
              style={{ width: '75%' }}
              action={{ icon: 'search', onClick: handleOnClick }}
              onChange={(e, data) => {
                setInput(data.value)
              }}
              error={hasError}
              placeholder="https://classic.warcraftlogs.com/reports/<report code>"
            />
            <Message negative compact hidden={!hasError}>
              WarcraftLog url or report code is invalid
            </Message>
          </Card.Description>
        </Card.Content>
      </Card>
    </Segment>
  )
}

export default ReportCodeEntry
