import axios from "axios";
import { useCallback, useState } from "react";
import { Todo } from "../types/todo";

export const useTodos = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const getTodos = useCallback( () => {
        axios.get<Array<Todo>>('/api/todos')
        .then(
            res => {
                setTodos(res.data);
        })
    }, []);

    return { getTodos, todos };
};