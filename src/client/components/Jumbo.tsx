import * as React from 'react';
import { Jumbotron, Container, Col } from 'reactstrap';

const Jumbo: React.FC<JumboProps> = props => {
	return (
		<Col md={12}>
			<Jumbotron fluid className="bg-primary text-white">
				<Container fluid>
					<h1 className="display-3">Fluid jumbotro</h1>
					<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
			</Jumbotron>
		</Col>
	);
};

interface JumboProps {}

export default Jumbo;
