import * as React from 'react';
import { useState } from 'react';
import Header from '../components/shared/Header';
import { IWeeklyGames } from '../utils/types/interfaces';
import { Container, Row, Col } from 'reactstrap';

const TEST_DATA: IWeeklyGames[] = [
	{
		home: {
			weekid: 1,
			teamid: 1,
			name: 'Green Bay Packers'
		},
		away: {
			weekid: 1,
			teamid: 2,
			name: 'Buffalo Bills'
		}
	},
	{
		home: {
			weekid: 1,
			teamid: 3,
			name: 'Miami Dolphins'
		},
		away: {
			weekid: 1,
			teamid: 4,
			name: 'New England Patriots'
		}
	}
];

const Picks: React.FC<PicksProps> = props => {
	const [games, setButtons] = useState<IWeeklyGames[]>(TEST_DATA);

	const handleTeamClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		games.forEach(button => {
			if (button.home.teamid === Number(e.currentTarget.id) || button.away.teamid === Number(e.currentTarget.id)) {
				e.currentTarget.classList.remove('btn-outline-info');
				e.currentTarget.classList.add('btn-info');
			} else {
				e.currentTarget.classList.add('disabled');
			}
		});
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
								<button onClick={handleTeamClick} className="btn btn-outline-info btn-block btn-lg shadow" id={`${game.home.teamid}`}>
									{game.home.name}
								</button>
							</Col>
							<Col md={1} className="d-flex justify-content-center align-items-center">
								<span className="font-italic">vs.</span>
							</Col>
							<Col md={5} className="d-flex justify-content-center align-items-center">
								<button onClick={handleTeamClick} className="btn btn-outline-info btn-block btn-lg shadow" id={`${game.away.teamid}`}>
									{game.away.name}
								</button>
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
