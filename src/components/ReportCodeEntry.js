import React, { useState, useContext } from 'react'
import useAxios from 'axios-hooks'
import {
  Card,
  Input,
  Message,
  Segment,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import { ReportContext } from '../providers/ReportProvider'

const ReportCodeEntry = () => {
  const [logCode, setLogCode] = useState('')
  const [hasError, setHasError] = useState(false)
  const { updateReport } = useContext(ReportContext)

  const [{ loading }, executeGet] = useAxios(
    {
      url:
        'https://run.mocky.io/v3/a1d9c4bb-a5b5-493e-aff4-d945754e0218?mock-delay=10s',
      method: 'GET',
    },
    { manual: true },
  )

  const handleOnClick = async () => {
    const regex = RegExp(
      '^(?<url>https://classic.warcraftlogs.com/reports/){0,1}(?<code>[a-zA-Z0-9]{16}[#]{0,1}[a-zA-Z0-9#=&-/]{0,})$',
    )
    const matches = regex.exec(logCode)

    if (!matches) {
      setHasError(true)
      return
    }

    const reportCode = matches[1]
    setHasError(false)
    const { data: report } = await executeGet({ data: reportCode })
    updateReport(report)
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
                setLogCode(data.value)
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
