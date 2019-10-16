import * as React from 'react';
import Header from '../components/shared/Header';
import Sponsors from '../components/home/Sponsors';
import InstructionCards from '../components/home/InstructionCards';
import Footer from '../components/shared/Footer';
import ProfileCards from '../components/home/ProfileCards';

const Home: React.FC<HomeProps> = props => {
	return (
		<>
			<section className="bg-primary py-md-5">
				<Header displayText="Scott Stapp Memorial Pick'em" leadText="The web's leading NFL Pick League. Focused on the God himself, Scott Stapp of Creed. Let's go." />
			</section>
			<section className="py-5">
				<InstructionCards />
			</section>
			<section className="bg-primary py-md-5">
				<Sponsors />
			</section>
			<section className="py-5">
				<ProfileCards />
			</section>
			<section className="bg-primary py-md-5">
				<Footer />
			</section>
		</>
	);
};

interface HomeProps {}

export default Home;
