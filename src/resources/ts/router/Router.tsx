import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Add } from "../components/pages/Add";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Todos } from "../components/pages/Todos";

export const Router: VFC = memo(() => {
    return (
        <Box px={ 3 } py={ 3 }>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/todos">
                    <Todos/>
                </Route>
                <Route path="/add">
                    <Add/>
                </Route>
                <Route path="*">
                    <Page404/>
                </Route>
            </Switch>
        </Box>
    );
});