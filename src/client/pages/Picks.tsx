import * as React from 'react';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IWeeklyGames } from '../utils/types/interfaces';
import Header from '../components/shared/Header';
import PickButton from '../components/picks/PickButton';

const Picks: React.FC<PicksProps> = props => {
	const [games, setGames] = useState<IWeeklyGames[]>([]);
	const [pick, setPick] = useState<number>(0);
	const [pickTeam, setPickTeam] = useState<string>('');

	useEffect(() => {
		(async () => {
			try {
				let r = await fetch('/api/games/1');
				let games: IWeeklyGames[] = await r.json();
				games.forEach(game => {
					if (moment(game.gameDate).isBefore()) {
						game.home.disabled = true;
						game.away.disabled = true;
					}
				});
				setGames(games);
			} catch (error) {
				console.log(error);
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
				setPickTeam(game.home.name);
				game.home.disabled = false;
			} else if (game.away.teamid === id) {
				game.away.selected = true;
				setPickTeam(game.away.name);
				game.away.disabled = false;
			}
		});
		setGames(gamesCopy);
		setPick(id);
	};

	const clearPicks = () => {
		if (pick === 0) {
			return;
		} else {
			Swal.fire({
				title: 'Are you sure?',
				text: "You're about clear your current pick.",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#7f0fff',
				cancelButtonColor: '#f2460d',
				confirmButtonText: 'Yes, clear my pick!'
			}).then((result: any) => {
				if (result.value) {
					let gamesCopy = [...games];
					gamesCopy.forEach(game => {
						if (moment(game.gameDate).isBefore()) {
							game.home.disabled = true;
							game.away.disabled = true;
						} else {
							game.home.selected = false;
							game.home.disabled = false;
							game.away.disabled = false;
							game.away.selected = false;
						}
					});
					setGames(gamesCopy);
					setPick(0);
					setPickTeam('');
					Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', type: 'success', confirmButtonColor: '#7f0fff' });
				}
			});
		}
	};

	const submitPick = () => {
		if (pick === 0) {
			Swal.fire({
				type: 'error',
				title: 'Oops...',
				text: 'Make a pick first dipshit.',
				footer: 'Stop fucking up my shit.'
			});
		} else {
			Swal.queue([
				{
					title: "Make 'dat pick",
					confirmButtonText: 'Confirm it, bitch.',
					text: pickTeam,
					showLoaderOnConfirm: true,
					preConfirm: () => {
						return fetch('/api/picks', {
							method: 'POST'
						})
							.then(response => response.json())
							.then(data => Swal.insertQueueStep(data))
							.catch(() => {
								Swal.insertQueueStep({
									type: 'error',
									title: 'Something done fucked up.  Let Luke know.'
								});
							});
					}
				}
			]);
		}
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
