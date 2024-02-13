import styled from 'styled-components';

import CardBlock from './CardBlock';

import supervisorImage from '../../assets/images/icons/supervisor.svg';
import teamBuilderImage from '../../assets/images/icons/team-builder.svg';
import karmaImage from '../../assets/images/icons/karma.svg';
import calculatorImage from '../../assets/images/icons/calculator.svg';

const CardsListShell = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6em;

	@media (min-width: 57.5em) {
		& {
			flex-direction: row;
			gap: 2em;
		}
	}
`;

const cards = [
	{
		id: 'c1',
		items: [
			{
				id: 'supervisor',
				title: 'Supervisor',
				desc: 'Monitors activity to identify project roadblocks',
				imageUrl: supervisorImage,
			},
		],
	},
	{
		id: 'c2',
		items: [
			{
				id: 'team-builder',
				title: 'Team Builder',
				desc: 'Scans our talent network to create the optimal team for your project',
				imageUrl: teamBuilderImage,
			},
			{
				id: 'karma',
				title: 'Karma',
				desc: 'Regularly evaluates our talent to ensure quality',
				imageUrl: karmaImage,
			},
		],
	},
	{
		id: 'c3',
		items: [
			{
				id: 'calculator',
				title: 'Calculator',
				desc: 'Uses data from past projects to provide better delivery estimates',
				imageUrl: calculatorImage,
			},
		],
	},
];

const CardsList = () => {
	return (
		<CardsListShell>
			{cards.map((card) => (
				<CardBlock key={card.id} items={card.items} />
			))}
		</CardsListShell>
	);
};

export default CardsList;
