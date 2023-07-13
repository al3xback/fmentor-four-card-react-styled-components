import styled from 'styled-components';

import Section from './Section';

const MainShell = styled.main`
	&,
	& > .container {
		display: flex;
		flex: auto;
	}

	& > .container {
		justify-content: center;
		align-items: center;
	}
`;

const Main = () => {
	return (
		<MainShell>
			<div className="container">
				<Section />
			</div>
		</MainShell>
	);
};

export default Main;
