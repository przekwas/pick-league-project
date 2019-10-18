import * as React from 'react';

const PickButton: React.FC<PickButtonProps> = ({ selected, disabled, team, handlePickButtonClick }) => {
	return (
		<button
			onClick={handlePickButtonClick}
			disabled={disabled ? true : false}
			className={`btn btn-block btn-lg shadow ${selected ? 'btn-info' : 'btn-outline-info'}`}
			id={`${team.teamid}`}>
			{team.name}
		</button>
	);
};

interface PickButtonProps {
	selected: boolean;
	disabled: boolean;
	team: {
		name: string;
		teamid: number;
	};
	handlePickButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default PickButton;
