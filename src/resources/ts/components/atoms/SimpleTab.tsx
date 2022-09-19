import { Tab } from "@chakra-ui/react";
import { memo, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const SimpleTab = memo( (props: Props) => {
    const { children, onClick } = props;
    return (
        <>
            <Tab onClick={ onClick }>{ children }</Tab>
        </>
    );
} );

