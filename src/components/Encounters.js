import React, { useContext } from 'react';
import _ from 'lodash';
import { Segment, Divider, Header, Table, Icon } from 'semantic-ui-react';
import { ReportContext } from '../providers/ReportProvider';
import EncounterRow from './EncounterRow';

const Encounters = () => {
	const { report } = useContext(ReportContext);

	const encounterRows = (chunkedEncounters) => {
		return (chunkedEncounters.map((rowData, index) => <EncounterRow key={index} encounters={rowData} />));
	}
	return (
		<div>
			<Divider horizontal section>
				<Header as='h4'>
					<Icon name='trophy'size='mini' />
					Encounters
				</Header>
			</Divider>
			<Header attached='top'>{ report.raid.name }</Header>
			<Segment attached>
				<Table attached basic='very'>
					<Table.Body>
						{ encounterRows(_.chunk(report.raid.encounters, 3)) }
					</Table.Body>
				</Table>
			</Segment>
		</div>
	)
}

export default Encounters;