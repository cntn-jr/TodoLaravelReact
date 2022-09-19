import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, memo, useState } from "react";

type Props = {
    label: string;
    name: string;
    value: string;
    my: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SimpleInputText = memo((props: Props) => {

    const { label, name, my, value, onChange } = props;

    const isError = value === '';

    return (
        <>
            <FormControl isInvalid={isError} my={my}>
                <FormLabel>{label}</FormLabel>
                <Input
                    type='text'
                    value={value}
                    onChange={onChange}
                    name={name}
                />
                {!isError ? (
                    <FormHelperText>
                    Please enter the {label} of the desired Todo.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>{label} is required.</FormErrorMessage>
                )}
            </FormControl>
        </>
    );
});