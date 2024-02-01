import styled from 'styled-components';

import CardsList from '../Cards/CardsList';

const SectionShell = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.6666666667em;
	width: 100%;
	max-width: 28em;
	margin: 3.3333333333em 0 5.6666666667em;

	& .section__head {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	& .cards-summary {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	& .cards-summary__title {
		font-weight: 200;
	}

	& .cards-summary__subtitle {
		margin-bottom: 0.6666666667em;
		font-size: 1.6em;
		color: hsl(234, 12%, 34%);
		line-height: 1.25;
	}

	@media (min-width: 48em) {
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
			margin-bottom: 0.4444444444em;
		}
	}
`;

const Section = () => {
	return (
		<SectionShell>
			<div className="section__head">
				<div className="cards-summary">
					<h2 className="cards-summary__title">
						Reliable, efficient delivery
					</h2>
					<p className="cards-summary__subtitle">
						<strong>Powered by Technology</strong>
					</p>
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
