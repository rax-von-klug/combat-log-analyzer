import _ from 'lodash';
import React, { useState } from 'react';
import { Header, Table, Segment, Divider, Icon, Image, Grid, Card, Label } from 'semantic-ui-react';
import TopNav from './TopNav';
import ReportCodeEntry from './ReportCodeEntry';
import { ReportProvider } from '../providers/ReportProvider';

import analysis from '../demo/data/analysis.json';
import Encounters from './Encounters';
import { druid, hunter, warlock, paladin, priest, rogue, warrior, mage } from '../assets';

const App = () => {
	const [selected, setSelected] = useState([]);

	const displayClassImage = (participantClass) => { 
		switch (participantClass) {
			case 'druid':
				return <Image src={druid} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'hunter':
				return <Image src={hunter} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'warlock':
				return <Image src={warlock} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'paladin':
				return <Image src={paladin} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'priest':
				return <Image src={priest} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'rogue':
				return <Image src={rogue} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'warrior':
				return <Image src={warrior} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			case 'mage':
				return <Image src={mage} style={{backgroundColor: 'black'}} circular size='mini' avatar floated='right' />
			default:
				return null;
		}
	}

	const handleOnClick = (participantId) => {
		if (_.includes(selected, participantId)) {
			setSelected(_.filter(selected, (id) => id !== participantId ));
		} else {
			setSelected([...selected, participantId])
		}
	}

	const ratingColor = (score) => {
		console.log(score);
		if (score === 100)
			return { color: 'pink' }
		
		if (_.inRange(score, 95, 99))
			return { color: 'orange' }
		
		if (_.inRange(score, 75, 94))
			return { color: 'purple' }

		if (_.inRange(score, 50, 74))
			return { color: 'blue' }
		
		if (_.inRange(score, 25, 49))
			return { color: 'green' }

		if (score < 25)
			return { color: 'grey' }
	}

	const participantCards = (participants) => {
		return (
			participants.map((participant, index) => {
				return (
					<Card key={index} raised link { ...(_.includes(selected, participant.id) ? { color: 'red' } : {}) }
							onClick={() => handleOnClick(participant.id)}>
						<Card.Content>
							{ displayClassImage(_.toLower(participant.class)) }
							<Card.Content>{ participant.name }</Card.Content>
							<Card.Meta><Label size='tiny' { ...ratingColor(participant.score) }>Rating <Label.Detail>{ participant.score }</Label.Detail></Label></Card.Meta>
						</Card.Content>
					</Card>
				)
			})
		);
	}

	return (
		<div>
			<TopNav />
			<Grid style={{ marginTop: '2em' }}>
				<Grid.Row>
					<Grid.Column width={3}></Grid.Column>
					<Grid.Column width={10}>
						<ReportProvider>
							<ReportCodeEntry />
							<Encounters />
							<Divider horizontal section>
								<Header as='h4'>
									<Icon name='user outline' size='mini'/>
									Participants
								</Header>
							</Divider>
							<Header attached='top'>Raid Members</Header>
							<Segment attached>
								<Card.Group itemsPerRow={5}>
									{ participantCards(analysis.raid.participants) }
								</Card.Group>
							</Segment>
						</ReportProvider>
					</Grid.Column>
					<Grid.Column width={3}></Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}

export default App;