import React from 'react';
import { Box } from 'ink';
import FakeConsole from './components/fakeConsole.js';
import TabSelector from './components/tabSelector.js';

type Props = {
	name: string | undefined;
};

export default function App({ }: Props) {

	return (
		<Box flexDirection='column'>
			<TabSelector tabs={[{ title: "Testing" }, { title: "Testing2" }, { title: "Testing3" },]} />
			
			<FakeConsole />
		</Box>
	);
}
