import {
    Box,
    SimpleGrid,
    useDisclosure,
} from "@chakra-ui/react";

import { memo, useCallback, useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../../types/todo";
import { TodoDetailModal } from "../organisms/TodoDetailModal";

export const Todos = memo(() => {
    const { getTodos, todos } = useTodos();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    useEffect(() => {
        getTodos();
    }, []);

    const onOpenTodo = useCallback((todo: Todo) => {
        setSelectedTodo(todo);
        onOpen();
    }, []);

    return (
        <>
            <h1>Todoです。</h1>
            <SimpleGrid
                columns={[3, null, 5]}
                textAlign="center"
                spacing="3rem"
            >
                {todos.map((todo) => (
                    <Box
                        key={todo.id}
                        height="12rem"
                        width="12rem"
                        mx="auto"
                        shadow="md"
                        bg="gray.100"
                        onClick={() => {
                            onOpenTodo(todo);
                        }}
                    >
                        <h4>{todo.title}</h4>
                        <p>{todo.detail}</p>
                    </Box>
                ))}
            </SimpleGrid>
            <TodoDetailModal
                isOpen={isOpen}
                onClose={onClose}
                todo={selectedTodo}
            />
        </>
    );
});
