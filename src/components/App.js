import React from 'react';
import { Container } from 'semantic-ui-react';
import TopNav from './TopNav';
import LogSelection from './LogSelection';

const App = () => {
	return (
		<div>
			<TopNav />
			<Container text style={{ marginTop: '7em' }}>
				<LogSelection />
			</Container>
		</div>
	);
}

export default App;