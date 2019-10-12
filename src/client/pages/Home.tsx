import * as React from 'react';
import Header from '../components/home/Header';
import Sponsors from '../components/home/Sponsors';
import InstructionCards from '../components/home/InstructionCards';

const Home: React.FC<HomeProps> = props => {
	return (
		<>
			<section className="bg-primary py-md-5">
				<Header />
			</section>
			<section className="py-5">
				<InstructionCards />
			</section>
			<section className="bg-primary py-md-5">
				<Sponsors />
			</section>
		</>
	);
};

interface HomeProps {}

export default Home;
