import { memo, VFC } from "react";
import axios from "axios";

export const Home: VFC = memo(() => {
    axios.get('/api/posts').then( (res) => {
        console.log(res);
    } );
    return (
        <>
            <h1>Homeぺーじです。</h1>
        </>
    );
});