import styled, { css } from 'styled-components';

const CardItemShell = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.6666666667em;
	min-height: 14.6666666667em;
	padding: 1.8666666667em;
	background-color: hsl(0, 0%, 100%);
	border-radius: 8px;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.2666666667em;
		background-color: transparent;

		${(props) =>
			props.id === 'supervisor' &&
			css`
				background-color: hsl(180, 62%, 55%);
			`};

		${(props) =>
			props.id === 'team-builder' &&
			css`
				background-color: hsl(0, 78%, 62%);
			`};

		${(props) =>
			props.id === 'karma' &&
			css`
				background-color: hsl(34, 97%, 64%);
			`};

		${(props) =>
			props.id === 'calculator' &&
			css`
				background-color: hsl(212, 86%, 64%);
			`};
	}

	& .card__desc {
		font-size: 0.8666666667em;
	}

	& .card__image {
		display: flex;
		justify-content: flex-end;
		margin-top: auto;
	}

	& .card__image img {
		width: 3.7333333333em;
		height: 3.7333333333em;
	}
`;

const CardItem = (props) => {
	return (
		<CardItemShell id={props.id}>
			<h3 className="card__title">{props.title}</h3>
			<p className="card__desc">{props.desc}</p>
			<div className="card__image">
				<img width="64" height="64" src={props.imageUrl} alt="" />
			</div>
		</CardItemShell>
	);
};

export default CardItem;
