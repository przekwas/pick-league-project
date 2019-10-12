import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Header: React.FC<HeaderProps> = props => {
	return (
		<Container className="py-5 text-white">
			<Row className="justify-content-around">
				<Col md={12}>
					<h1 className="display-4 text-center mb-5">Sponsors</h1>
				</Col>
				<Col xs={4} md={2}>
					<img src="images/stapp-logo-transparent.png" className="img-fluid" />
				</Col>
				<Col xs={4} md={2} className="d-flex justify-content-center">
					<img src="images/creed-logo-transparent.png" className="img-fluid" />
				</Col>
				<Col xs={4} md={2}>
					<img src="images/nfl-logo-transparent.png" className="img-fluid" />
				</Col>
				<Col xs={4} md={2} className="d-flex justify-content-center align-items-center my-5">
					<img src="images/google-logo-transparent.png" className="img-fluid" />
				</Col>
                <Col xs={4} md={2} className="d-flex justify-content-center align-items-center my-5">
					<img src="images/usa-logo-transparent.png" className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
};

interface HeaderProps {}

export default Header;
