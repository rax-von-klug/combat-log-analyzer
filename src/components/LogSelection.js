import React, { useState } from 'react';
import { Card, Input, Message } from 'semantic-ui-react';

const LogSelection = () => {
	const [logCode, setLogCode] = useState("");
	const [hasError, setHasError] = useState(false);

	const handleOnClick = () => {
		const regex = RegExp('^(https://classic.warcraftlogs.com/reports/){0,1}[a-zA-Z0-9]{16}[#]{0,1}[a-zA-Z0-9#=&-/]{0,}$');
		setHasError(!regex.test(logCode));
	}

	return (
		<Card centered fluid raised color='green'>
			<Card.Content>
				<Card.Header textAlign='center'>Enter the Classic WarcraftLogs url or report code you wish to analyze.</Card.Header>
				<Card.Description textAlign='center'>
					<Input style={{ width: '75%' }} action={{ icon: 'search', onClick: handleOnClick }} 
								onChange={ (e, data) => { setLogCode(data.value) } } error={hasError}
								placeholder='https://classic.warcraftlogs.com/reports/<report code>' />
					<Message negative compact hidden={!hasError}>
						WarcraftLog url or report code is invalid
					</Message>
				</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default LogSelection;