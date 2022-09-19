import { memo, useEffect } from "react";
import { useTodos } from "../../hooks/useTodos";

export const Todos = memo(() => {

    const { getTodos, todos } = useTodos();

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <>
            <h1>Todoです。</h1>
            { todos.map( (todo) => (
                <div key={todo.id}>
                    <h4>{todo.title}</h4>
                    <p>{todo.detail}</p>
                </div>
            ) ) }
        </>
    );
});