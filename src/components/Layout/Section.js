import styled from 'styled-components';

import CardList from '../Cards/CardList';

const SectionShell = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 5.0666666667em;
	width: 100%;
	max-width: 28em;
	margin: 2.6666666667em 0 4em;

	& .section__head {
		display: flex;
		flex-direction: column;
		padding-top: 2.6666666667em;
		text-align: center;
	}

	& .section__title {
		font-weight: 200;
	}

	& .section__subtitle {
		margin-bottom: 0.6666666667em;
		font-size: 1.6em;
		color: hsl(234, 12%, 34%);
		line-height: 1.25;
	}

	@media (min-width: 48em) {
		& {
			gap: 4em;
			max-width: 74em;
		}

		& .section__head {
			max-width: 36em;
		}

		& .section__title,
		& .section__subtitle {
			font-size: 2.4em;
		}

		& .section__subtitle {
			margin-bottom: 0.4444444444em;
		}
	}
`;

const Section = () => {
	return (
		<SectionShell>
			<div className="section__head">
				<h2 className="section__title">Reliable, efficient delivery</h2>
				<p className="section__subtitle">
					<strong>Powered by Technology</strong>
				</p>
				<p className="section__desc">
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
			</div>
			<div className="section__body">
				<CardList />
			</div>
		</SectionShell>
	);
};

export default Section;
