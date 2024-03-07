import React, { useState } from 'react';
import { IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';
import { useEffect } from 'react';
import styles from './Users.module.scss';

interface Employee {
    id: number;
    name: string;
    title: string;
    avatar: string;
}

const Tab2: React.FC = () => {

    const [employees, setEmployees] = useState<Employee[]>([
        {
            id: 1,
            name: "Alan Montgomery",
            title: "Mobile Team Lead",
            avatar: "https://pbs.twimg.com/profile_images/1383061489469292548/5dhsPd4j_400x400.jpg"
        },
        {
            id: 2,
            name: "Max Lynch",
            title: "CEO | Co Founder",
            avatar: "https://pbs.twimg.com/profile_images/1318970727173885953/bln98FNj_400x400.jpg"
        },
        {
            id: 3,
            name: "Mike Hartington",
            title: "Senior Dev Rel",
            avatar: "https://pbs.twimg.com/profile_images/1084993841898446849/DJ8XtR6L_400x400.jpg"
        },
        {
            id: 4,
            name: "Matt Netkow",
            title: "Head of Product Marketing",
            avatar: "https://pbs.twimg.com/profile_images/1323383930150621187/GKc0nVzi_400x400.jpg"
        },
        {
            id: 5,
            name: "Ben Sperry",
            title: "CDO | Co Founder",
            avatar: "https://pbs.twimg.com/profile_images/1328390491126308864/jHHgl5Dm_400x400.jpg"
        },
        {
            id: 6,
            name: "Liam DeBeasi",
            title: "Software Engineer",
            avatar: "https://pbs.twimg.com/profile_images/1105953692669366273/ZNK4lRAJ_400x400.jpg"
        }
        // other employees...
    ]);

    const [results, setResults] = useState<Employee[]>(employees);

    const remove = (id: number) => {
        const tempEmployees = [...employees];
        const newEmployees = tempEmployees.filter(e => e.id !== id);
        setResults(newEmployees);
        setEmployees(newEmployees);
    }

    const search = (e: React.KeyboardEvent<HTMLIonSearchbarElement>) => {
        const searchTerm = (e.target as HTMLInputElement).value;
        if (searchTerm !== "") {
            const searchTermLower = searchTerm.toLowerCase();
            const newResults = employees.filter(e => e.name.toLowerCase().includes(searchTermLower));
            setResults(newResults);
        } else {
            setResults(employees);
        }
    }

    return (
        <IonPage className={styles.page}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/tabs/home" routerDirection="back" >
                            <IonIcon icon={chevronBack} />
                            &nbsp;Liste Users
                        </IonButton>
                    </IonButtons>
                    {/*<IonButtons slot="end">
                        <IonButton routerLink="/tabs/home" color="light">
                            Robots&nbsp;
                            <IonIcon icon={chevronForward} />
                        </IonButton>
                    </IonButtons>*/}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.mainContent}>
                    <IonCardSubtitle className={styles.results}>{results.length} {results.length === 1 ? "employee" : "employees"} found</IonCardSubtitle>
                    {/*<IonSearchbar onKeyUp={(e: React.KeyboardEvent<HTMLIonSearchbarElement>) => search(e)} onKeyPress={(e: React.KeyboardEvent<HTMLIonSearchbarElement>) => search(e)} placeholder="Search..."  slot="end" />*/}
                    <IonList>
                        {results.map((employee, index) => (
                            <IonItem id={`employeeItem_${employee.id}`} className={`${styles.employeeItem} animate__animated animate__fadeIn`} key={employee.id} lines="none">
                                <img src={employee.avatar} alt="employee avatar" />
                                <IonLabel>
                                    <h2>{employee.name}</h2>
                                    <p>{employee.title}</p>
                                </IonLabel>
                                <IonButton onClick={() => remove(employee.id)}>
                                    <IonIcon icon={trashOutline} />
                                </IonButton>
                            </IonItem>
                        ))}
                    </IonList>
                </div>
            </IonContent>
            <IonFooter>
                <IonButton expand="block">Ajouter Users</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default Tab2;
