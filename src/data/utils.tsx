import { useState, ChangeEvent } from "react";

export const useFormInput = (initialValue: string = "") => {

    const [value, setValue] = useState<string>(initialValue);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const tempValue: string = e.currentTarget.value;
        setValue(tempValue);
    };

    return {
        value,
        reset: (newValue: string) => setValue(newValue),
        onChange: handleChange
    };
};

interface Field {
    id: string;
    label: string;
    input: {
        state: { value: string };
    };
    required?: boolean;
}

export const validateForm = (fields: Field[]) => {

    let errors: { id: string; message: string }[] = [];

    fields.forEach(field => {
        if (field.required) {
            const fieldValue: string = field.input.state.value;
            if (fieldValue === "") {
                const error = {
                    id: field.id,
                    message: `Please check your ${field.id}`,
                };
                errors.push(error);
            }
        }
    });

    return errors;
};
