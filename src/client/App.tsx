import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Schedule, Picks, Scores, Register, Login, Profile } from './pages';

const App: React.FC<AppProps> = props => {
	return (
		<BrowserRouter>
			<main className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/picks" component={Picks} />
					<Route exact path="/scores" component={Scores} />
					<Route exact path="/schedule" component={Schedule} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile/:userid" component={Profile} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
