import * as React from 'react';
import Jumbo from '../components/Jumbo';
import { Container, Row, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const Home: React.FC<HomeProps> = props => {
	return (
		<>
			<div className="bg-primary">
				<Container>
					<Row>
						<Jumbo />
					</Row>
				</Container>
			</div>
			<div>
				<Container>
					<Row className="my-3 justify-content-center">
						<Col md={4}>
							<Card className="shadow">
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
									<Button className="shadow-sm" color="primary">
										Button
									</Button>
								</CardBody>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="shadow">
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
									<Button className="shadow-sm" color="primary">
										Button
									</Button>
								</CardBody>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="shadow">
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardSubtitle>Card subtitle</CardSubtitle>
									<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
									<Button className="shadow-sm" color="primary">
										Button
									</Button>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

interface HomeProps {}

export default Home;
