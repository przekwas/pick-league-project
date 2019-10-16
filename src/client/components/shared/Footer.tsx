import * as React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Footer: React.FC<FooterProps> = props => {
	return (
		<Container className="pt-5">
			<Row>
				<Col md={12}>
					<Jumbotron fluid className="bg-primary text-white text-center">
						<Container fluid>
							<h1 className="display-4">Scott Stapp Memorial Pick'em</h1>
							<p className="lead">
								Coded by Luke Przekwas
							</p>
							<div className="border-bottom border-white mb-3"></div>
							<p className="lead">
								<a className="btn btn-link text-white p-1" href="https://github.com/przekwas" target="_blank" rel="norefferer">GitHub</a>
								<a className="btn btn-link text-white p-1" href="https://github.com/przekwas" target="_blank" rel="norefferer">Linkedin</a>
								<a className="btn btn-link text-white p-1" href="https://github.com/przekwas" target="_blank" rel="norefferer">Instagram</a>
							</p>
						</Container>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);
};

interface FooterProps {}

export default Footer;
