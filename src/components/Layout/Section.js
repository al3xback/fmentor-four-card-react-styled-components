import styled from 'styled-components';

import CardsList from '../Cards/CardsList';

const SectionShell = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.6666666667em;
	width: 100%;
	max-width: 22.6666666667em;
	margin: 3.3333333333em 0 5.3333333333em;

	& .section__head {
		display: flex;
		flex-direction: column;
	}

	& .cards-summary {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	& .cards-summary__subtitle {
		margin-bottom: 0.25em;
		font-size: 1.6em;
		font-weight: 200;
		color: hsl(234, 12%, 34%);
		line-height: 1;
	}

	& .cards-summary__title {
		margin-bottom: 0.6666666667em;
	}

	@media (min-width: 57.5em) {
		& {
			gap: 4em;
			max-width: 74em;
			margin: 4.6666666667em 0 6.6666666667em;
		}

		& .section__head {
			align-items: center;
		}

		& .cards-summary {
			max-width: 36em;
		}

		& .cards-summary__title,
		& .cards-summary__subtitle {
			font-size: 2.4em;
		}

		& .cards-summary__subtitle {
			margin-bottom: 0.2777777778em;
		}
	}
`;

const Section = () => {
	return (
		<SectionShell>
			<div className="section__head">
				<div className="cards-summary">
					<p className="cards-summary__subtitle">
						Reliable, efficient delivery
					</p>
					<h2 className="cards-summary__title">
						Powered by Technology
					</h2>
					<p className="cards-summary__desc">
						Our Artificial Intelligence powered tools use millions
						of project data points to ensure that your project is
						successful
					</p>
				</div>
			</div>
			<div className="section__body">
				<CardsList />
			</div>
		</SectionShell>
	);
};

export default Section;
