import { Box, Text, useApp, useInput } from "ink";
import React, { PropsWithChildren } from "react";
import { useState } from "react";
import FlexBox from "./flexBox.js";
import PreviousMessages from "./previousMessages.js";

export type FakeConsoleProps = {
    onCommandSubmit?: (input: string) => void;
}

export default function FakeConsole(props: PropsWithChildren<FakeConsoleProps>) {
    const { onCommandSubmit } = props;
    const { exit } = useApp();
    const [message, setMessage] = useState("");
    const [prevMessages, setPrevMessages] = useState<string[]>([]);

    useInput((input, key) => {
        if (input === 'q') {
            exit();
        }

        if (key.return) {
            //SubmitMessage        
            if (onCommandSubmit) {
                onCommandSubmit(message)
            }
            setPrevMessages(prevMessages.concat(message));
            setMessage("");
        } else if (key.backspace) {
            setMessage(message.slice(0, -1));
        } else {

            setMessage(message + input);
        }
    });

    return (
        <Box flexDirection="column">
            <Text>Type a 'help' to get a list of commands. Press “q” to exit.</Text>
            <FlexBox flexDirection="column">
                <PreviousMessages messageList={prevMessages} />
                <Text color="greenBright">{">"} {message}</Text>
            </FlexBox>
        </Box>
    );
}