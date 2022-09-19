import { TabList, Tabs } from "@chakra-ui/react";
import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { SimpleTab } from "../../atoms/SimpleTab";

export const Header = memo(() => {
    const history = useHistory();

    const onClickHome = useCallback(() => {
        history.push('/');
    }, [history]);
    const onClickTodos = useCallback(() => {
        history.push('/todos');
    }, [history]);
    const onClickAdd = useCallback(() => {
        history.push('/add');
    }, [history]);

    return (
        <Tabs>
            <TabList>
                <SimpleTab onClick={ onClickHome }>Home</SimpleTab>
                <SimpleTab onClick={ onClickTodos }>Todos</SimpleTab>
                <SimpleTab onClick={ onClickAdd }>Add</SimpleTab>
            </TabList>
        </Tabs>
    );
});