import { Box, BoxProps } from "ink";
import React, { PropsWithChildren } from "react";

export default function FlexBox(props: PropsWithChildren<BoxProps>) {
    return (
        <Box>
            <Box {...props}>
                {props.children}
            </Box>
        </Box>
    );
}