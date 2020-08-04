import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import logo from '../assets/header_icon.png';

const TopNav = () => (
	<Menu fixed='top' inverted>
		<Container>
			<Menu.Item header>
				<Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
				Combat Log Analyzer
			</Menu.Item>
		</Container>
	</Menu>
);

export default TopNav;