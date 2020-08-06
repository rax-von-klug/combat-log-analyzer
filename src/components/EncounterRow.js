import React from 'react';
import { Table } from 'semantic-ui-react';
import EncounterColumn from './EncounterColumn';

const EncounterRow = ({ encounters }) => {
	const encounterColumns = encounters.map((encounter, index) => <EncounterColumn key={index} encounter={encounter} />);

	return (
		<Table.Row>
			{ encounterColumns }
		</Table.Row>
	)
}

export default EncounterRow;