import * as React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Header: React.FC<HeaderProps> = props => {
	return (
		<Container className="pt-5">
			<Row>
				<Col md={12}>
					<Jumbotron fluid className="bg-primary text-white">
						<Container fluid>
							<h1 className="display-3">Scott Stapp Memorial Pick'em</h1>
							<p className="lead">
								The web's leading NFL Pick League. Focused on the <strong>God</strong> himself, Scott Stapp of Creed. Let's go.
							</p>
						</Container>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);
};

interface HeaderProps {}

export default Header;
