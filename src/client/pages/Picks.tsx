import * as React from 'react';
import * as moment from 'moment';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IWeeklyGames } from '../utils/types/interfaces';
import Header from '../components/shared/Header';
import PickButton from '../components/picks/PickButton';

const TEST_DATA: IWeeklyGames[] = [
	{
		gameDate: new Date(),
		home: {
			selected: false,
			disabled: false,
			weekid: 1,
			teamid: 1,
			name: 'Green Bay Packers'
		},
		away: {
			selected: false,
			disabled: false,
			weekid: 1,
			teamid: 2,
			name: 'Buffalo Bills'
		}
	},
	{
		gameDate: new Date(),
		home: {
			selected: false,
			disabled: false,
			weekid: 1,
			teamid: 3,
			name: 'Miami Dolphins'
		},
		away: {
			selected: false,
			disabled: false,
			weekid: 1,
			teamid: 4,
			name: 'New England Patriots'
		}
	}
];

const Picks: React.FC<PicksProps> = props => {
	const [games, setGames] = useState<IWeeklyGames[]>([]);
	const [pick, setPick] = useState<number>(0);

	useEffect(() => {
		(async () => {
			try {
				let r = await fetch('/api/games/1');
				let games: IWeeklyGames[] = await r.json();
				games.forEach(game => {
					if(moment(game.gameDate).isBefore()) {
						game.home.disabled = true;
						game.away.disabled = true;
					}
				});
				setGames(games);
			} catch (error) {
			console.log(error)	
			}
		})();
	}, []);

	const handlePickButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		let id = Number(e.currentTarget.id);
		let gamesCopy = [...games];
		gamesCopy.forEach(game => {
			game.home.disabled = true;
			game.away.disabled = true;
			if (game.home.teamid === id) {
				game.home.selected = true;
				game.home.disabled = false;
			} else if (game.away.teamid === id) {
				game.away.selected = true;
				game.away.disabled = false;
			}
		});
		setGames(gamesCopy);
		setPick(id);
	};

	const clearPicks = () => {
		let gamesCopy = [...games];
		gamesCopy.forEach(game => {
			game.home.selected = false;
			game.home.disabled = false;
			game.away.disabled = false;
			game.away.selected = false;
		});
		setGames(gamesCopy);
	};

	const submitPick = () => {
		console.log(pick);
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
								<PickButton
									team={game.home}
									selected={game.home.selected}
									disabled={game.home.disabled}
									handlePickButtonClick={handlePickButtonClick}
								/>
							</Col>
							<Col md={1} className="d-flex justify-content-center align-items-center">
								<span className="font-italic">vs.</span>
							</Col>
							<Col md={5} className="d-flex justify-content-center align-items-center">
								<PickButton
									team={game.away}
									selected={game.away.selected}
									disabled={game.away.disabled}
									handlePickButtonClick={handlePickButtonClick}
								/>
							</Col>
						</Row>
					))}
					<Row className="justify-content-around my-5">
						<Col md={5}>
							<button onClick={submitPick} className="btn btn-primary btn-lg btn-block shadow my-1">
								Submit Pick
							</button>
						</Col>
						<Col md={5}>
							<button onClick={clearPicks} className="btn btn-primary btn-lg btn-block shadow my-1">
								Clear Pick
							</button>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

interface PicksProps {}

export default Picks;
