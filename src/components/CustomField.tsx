import React from 'react';
import { IonInput, IonLabel } from "@ionic/react";
import styles from "./CustomField.module.scss";

interface Field {
    id: string;
    label: string;
    input: {
        props: any;
        state: any;
    };
}

interface Error {
    id: string;
    message: string;
}

interface Props {
    field: Field;
    errors: Error[] | null;
}

const CustomField: React.FC<Props> = ({ field, errors }) => {
    const error = errors && errors.filter(e => e.id === field.id)[0];
    const errorMessage = error && errors.filter(e => e.id === field.id)[0].message;

    return (
        <div className={styles.field}>
            <IonLabel className={styles.fieldLabel}>
                {field.label}
                {error && <p className="animate__animated animate__bounceIn">{errorMessage}</p>}
            </IonLabel>
            <IonInput className={styles.customInput} {...field.input.props} {...field.input.state} />
        </div>
    );
};

export default CustomField;
