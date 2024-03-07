import { useFormInput } from "./utils";

export interface Field {
    id: string;
    label: string;
    required: boolean;
    input: {
        props: {
            type: string;
            placeholder: string;
        };
        state: {
            value: string;
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
            reset: (value: string) => void;
        };
    };
}

export const useSignupFields = (): Field[] => {
    return [
        {
            id: "name",
            label: "Name",
            required: true,
            input: {
                props: {
                    type: "text",
                    placeholder: "Joe Bloggs",
                },
                state: useFormInput(""),
            },
        },
        {
            id: "email",
            label: "Email",
            required: true,
            input: {
                props: {
                    type: "email",
                    placeholder: "joe@bloggs.com",
                },
                state: useFormInput(""),
            },
        },
        {
            id: "password",
            label: "Password",
            required: true,
            input: {
                props: {
                    type: "password",
                    placeholder: "*********",
                },
                state: useFormInput(""),
            },
        },
    ];
};

export const useLoginFields = (): Field[] => {
    return [
        {
            id: "email",
            label: "Email",
            required: true,
            input: {
                props: {
                    type: "email",
                    placeholder: "joe@bloggs.com",
                },
                state: useFormInput(""),
            },
        },
        {
            id: "password",
            label: "Password",
            required: true,
            input: {
                props: {
                    type: "password",
                    placeholder: "*******",
                },
                state: useFormInput(""),
            },
        },
    ];
};
