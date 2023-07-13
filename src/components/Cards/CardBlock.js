import styled from 'styled-components';

import CardItem from './CardItem';

const CardBlockShell = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6em;

	@media (min-width: 48em) {
		& {
			justify-content: center;
			flex: 1;
		}
	}
`;

const CardBlock = (props) => {
	return (
		<CardBlockShell>
			{props.items.map((item) => (
				<CardItem
					key={item.id}
					id={item.id}
					title={item.title}
					desc={item.desc}
					imageUrl={item.imageUrl}
				/>
			))}
		</CardBlockShell>
	);
};

export default CardBlock;
