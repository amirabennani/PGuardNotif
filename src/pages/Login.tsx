import React, { useState, useEffect } from 'react';
import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Login.module.scss';
import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from '../components/CustomField';
import { useLoginFields } from '../data/fields';
import  Action  from '../components/Action';
import  Wave  from '../components/Wave';
import { validateForm } from '../data/utils';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import loginImage from '../../public/assets/robot.png'; // Importez votre image ici

const Login: React.FC = () => {
    const history = useHistory();
    const params = useParams();

    const fields = useLoginFields();
    const [errors, setErrors] = useState<{ id: string; message: string; }[]>([]);

    const login = () => {
        const formErrors = validateForm(fields);
        /*setErrors(formErrors);

        if (!formErrors.length) {
            //  Submit your form here
            history.push('/home');
        }*/
        history.push('/tabs/home');
    }

    useEffect(() => {
        return () => {
            fields.forEach(field => field.input.state.reset(""));
            setErrors([]); // Remplacez [] par [] pour réinitialiser le tableau des erreurs
        }
    }, [params]);

	return (
		<IonPage className={ styles.loginPage }>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton icon={ arrowBack } text="" className="custom-back" />
					</IonButtons>
					<IonButtons slot="end">
						<IonButton className="custom-button">
							<IonIcon icon={ shapesOutline } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
               
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol size="12" className={ styles.headingText }>
                            <IonCardTitle>Log in</IonCardTitle>
                            <h5>Welcome back, hope you're doing well</h5>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12">
                            { fields.map((field, index) => (
                                <CustomField key={ index } field={ field } errors={ errors } />
                            ))}
                            <IonButton className="custom-button" expand="block" onClick={ login }>Login</IonButton>
                        </IonCol>
                    </IonRow>
                   
                </IonGrid>
               
			</IonContent>
			<IonFooter>
				<IonGrid className="ion-no-margin ion-no-padding">
                    {/*<Action message="Don't have an account?" text="Sign up" link="/signup" />*/}
                    <Wave />
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Login;
