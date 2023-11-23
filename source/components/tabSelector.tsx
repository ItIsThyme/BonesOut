import React, { useMemo, useState } from "react";
import FlexBox from "./flexBox.js";
import { Box, BoxProps, Text, useFocus, useInput } from "ink";

export type Tab = {
    title: string;
    selectedFunction?: () => void;
}

export type TabSelectorProps = {
    tabs: Tab[];
    flexBoxProps?: BoxProps;
}

export default function TabSelector(props: TabSelectorProps) {
    const { tabs, flexBoxProps } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { isFocused } = useFocus();

    useInput((_input, key) => {
        if (isFocused) {
            if (key.rightArrow) {
                setSelectedIndex((x) => {
                    if (x == tabs.length - 1) {
                        return 0;
                    } else {
                        return x + 1;
                    }
                })
            } else if (key.leftArrow) {
                setSelectedIndex((x) => {
                    if (x == 0) {
                        return tabs.length - 1;
                    } else {
                        return x - 1;
                    }
                })
            } else if (key.return) {
                const selectedTab = tabs.at(selectedIndex);
                if (selectedTab && selectedTab.selectedFunction) {
                    selectedTab.selectedFunction();
                }
            }
        }
    })

    const renderTabs = useMemo(() => {
        return (
            <Box>
                {isFocused && tabs.map((x, index) => {
                    if (index != selectedIndex || !isFocused) {
                        return (<Box key={index} borderStyle="classic">
                            <Text>{x.title}</Text>
                        </Box>)
                    } else {
                        return (<Box key={index} borderStyle="classic">
                            <Text backgroundColor="white">{x.title}</Text>
                        </Box>)
                    }
                })}
            </Box>
        )
    }, [selectedIndex])

    return (
        <FlexBox {...flexBoxProps}>
            {renderTabs}
        </FlexBox>
    )
}