import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';

const noBorder = {
	borderTop: 0
}

const EncounterColumn = ({ encounter }) => (<Table.Cell style={ noBorder }><Checkbox label={ encounter.name } /></Table.Cell>);

export default EncounterColumn;