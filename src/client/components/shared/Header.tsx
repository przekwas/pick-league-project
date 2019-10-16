import * as React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Header: React.FC<HeaderProps> = props => {
	return (
		<Container className="pt-5">
			<Row>
				<Col md={12}>
					<Jumbotron fluid className="bg-primary text-white text-center">
						<Container fluid>
							<h1 className="display-4">{props.displayText}</h1>
							<p className="lead">{props.leadText}</p>
						</Container>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);
};

interface HeaderProps {
	displayText?: string;
	leadText?: string;
}

export default Header;
