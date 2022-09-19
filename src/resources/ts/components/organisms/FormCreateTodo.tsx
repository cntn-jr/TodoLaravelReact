import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { SimpleInputText } from "../atoms/SimpleInputText";

export const FormCreateTodo = memo(() => {

    const [newTitle, setNewTitle] = useState('');
    const [newDetail, setNewDetail] = useState('');

    const history = useHistory();

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    };

    const onChangeDetail = (e: ChangeEvent<HTMLInputElement>) => {
        setNewDetail(e.target.value);
    };

    const onClickButton = () => {
        axios.post('/api/todos/store', {
            title: newTitle,
            detail: newDetail,
        }).then((res) => {
            console.log(res);
            history.push('/todos');
        }).catch( (error) => {
            console.log(error);
        } );
    };

    return (
        <Box w="60%" mx="auto" py={3} px={3}>
            <form action="/api/todos/store" method="POST">
                <input type="hidden" name="_method" value="post" />
                <SimpleInputText label='Title' name="title" value={newTitle} my={2} onChange={onChangeTitle} />
                <SimpleInputText label='Detail' name="detail" value={newDetail} my={2} onChange={onChangeDetail} />
                <Button
                    mt={4}
                    colorScheme='teal'
                    // isLoading={props.isSubmitting}
                    onClick={onClickButton}
                >
                    Add
                </Button>
            </form>
        </Box>
    );
});
