import * as React from 'react';

const PickButton: React.FC<PickButtonProps> = ({ selected, team }) => {
	return (
		<button className={`btn  btn-block btn-lg shadow ${selected ? 'btn-info' : 'btn-outline-info'}`} id={`${team.teamid}`}>
			{team.name}
		</button>
	);
};

interface PickButtonProps {
	selected?: boolean;
	team: {
		name: string;
		teamid: number;
	};
	// handlePickButtonClick: 
}

export default PickButton;
