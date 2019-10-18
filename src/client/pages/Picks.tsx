import * as React from 'react';
import { useState } from 'react';
import Header from '../components/shared/Header';
import { IWeeklyGames } from '../utils/types/interfaces';
import { Container, Row, Col } from 'reactstrap';
import PickButton from '../components/picks/PickButton';

const TEST_DATA: IWeeklyGames[] = [
	{
		home: {
			selected: false,
			weekid: 1,
			teamid: 1,
			name: 'Green Bay Packers'
		},
		away: {
			selected: false,
			weekid: 1,
			teamid: 2,
			name: 'Buffalo Bills'
		}
	},
	{
		home: {
			selected: false,
			weekid: 1,
			teamid: 3,
			name: 'Miami Dolphins'
		},
		away: {
			selected: false,
			weekid: 1,
			teamid: 4,
			name: 'New England Patriots'
		}
	}
];

const Picks: React.FC<PicksProps> = props => {
	const [games, setButtons] = useState<IWeeklyGames[]>(TEST_DATA);

	const handlePickButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log('Test');
	};

	return (
		<>
			<section className="bg-primary py-md-5">
				<Header displayText="Make dem' Picks" />
			</section>
			<section className="py-5">
				<Container className="pt-md-5">
					{games.map((game, i) => (
						<Row key={`game-card-${i}`} className="justify-content-center my-5">
							<Col md={5} className="d-flex justify-content-center align-items-center">
								<PickButton team={game.home} selected={game.home.selected} />
							</Col>
							<Col md={1} className="d-flex justify-content-center align-items-center">
								<span className="font-italic">vs.</span>
							</Col>
							<Col md={5} className="d-flex justify-content-center align-items-center">
								<PickButton team={game.away} selected={game.away.selected} />
							</Col>
						</Row>
					))}
				</Container>
			</section>
		</>
	);
};

interface PicksProps {}

export default Picks;
