import * as React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaUserEdit, FaPray, FaMoneyBill } from 'react-icons/fa';

const InstructionCards: React.FC<InstructionCardsProps> = props => {
	return (
		<Container className="py-md-5">
			<Row className="justify-content-center py-md-5">
				<Col md={4}>
					<Card className="shadow my-2 py-4">
						<CardBody className="text-center">
							<CardTitle>
								<FaUserEdit size="5em" />
							</CardTitle>
							<CardText className="h4 font-weight-bold">Login or Register.</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="shadow my-2 py-4">
						<CardBody className="text-center">
							<CardTitle>
								<FaPray size="5em" />
							</CardTitle>
							<CardText className="h4 font-weight-bold">Make your pick.</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="shadow my-2 py-4">
						<CardBody className="text-center">
							<CardTitle>
								<FaMoneyBill size="5em" />
							</CardTitle>
							<CardText className="h4 font-weight-bold">Win.</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

interface InstructionCardsProps {}

export default InstructionCards;
