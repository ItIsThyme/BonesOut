import React from 'react';
import { Box, Text } from 'ink';
import FlexBox from './components/flexBox.js';
import Robot from './components/robot.js';

type Props = {
	name: string | undefined;
};

export default function App({ name = 'Stranger' }: Props) {

	return (
		<Box flexDirection='column'>
			<FlexBox borderStyle={"classic"} >
				<Text>
					Hello, <Text color="green">{name}</Text>
				</Text>
			</FlexBox>

			<Robot />
		</Box>
	);
}
