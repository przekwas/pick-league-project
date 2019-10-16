import * as React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaUserEdit, FaPray, FaMoneyBill } from 'react-icons/fa';

const ProfileCards: React.FC<ProfileCardsProps> = props => {
	return (
		<Container className="py-md-5">
			<Row className="justify-content-center py-md-5">
				<Col md={12}>
					<h1 className="display-4 text-center">The Team</h1>
				</Col>
				<Col md={4}>
					<Card className="shadow my-2 py-4">
						<CardImg top width="100%" src="images/avatar-placeholder.png" alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle>Scott Stapp</CardTitle>
							<p className="card-text">
								<small className="text-muted">President</small>
							</p>
							<CardText className="text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium, deserunt odio enim eaque facilis libero molestias repellendus sint debitis a magni ipsam,
								eum corporis laboriosam assumenda possimus in provident.
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="shadow my-2 py-4">
						<CardImg top width="100%" src="images/avatar-placeholder.png" alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle>Josh Voight</CardTitle>
							<p className="card-text">
								<small className="text-muted">CEO</small>
							</p>
							<CardText className="text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium, deserunt odio enim eaque facilis libero molestias repellendus sint debitis a magni ipsam,
								eum corporis laboriosam assumenda possimus in provident.
							</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="shadow my-2 py-4">
						<CardImg top width="100%" src="images/avatar-placeholder.png" alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle>Luke Przekwas</CardTitle>
							<p className="card-text">
								<small className="text-muted">Janitor</small>
							</p>
							<CardText className="text-justify">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium, deserunt odio enim eaque facilis libero molestias repellendus sint debitis a magni ipsam,
								eum corporis laboriosam assumenda possimus in provident.
							</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

interface ProfileCardsProps {}

export default ProfileCards;
