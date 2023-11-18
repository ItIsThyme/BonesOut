import { Text } from "ink"
import React from "react"
import FlexBox from "./flexBox.js"

type PreviousMessagesProps ={
    messageList:  string[]
}

export default function PreviousMessages(props: PreviousMessagesProps) {
    return (
        <FlexBox flexDirection="column">
            {props.messageList.map((x, index) => {
                return <Text key={index}>{x}</Text>
            })}
        </FlexBox>
    )
}