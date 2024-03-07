import React, { useEffect, useRef, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import  Action  from '../components/Action';
import styles from './Home.module.scss';
import { batteryFullOutline, closeOutline, pauseOutline, stopOutline } from 'ionicons/icons';
import NotificationItem from '../components/NotificationItem';
import VideoCard from '../components/VideoCard';


const Home: React.FC = () => {
	const [emergencyStopClicked, setEmergencyStopClicked] = useState(false);
    const streamUrl = 'rtsp://root:h@niJeet234!!@@@41.228.129.43:554/live1s4.sdp';
    const handleEmergencyStop = () => {
        setEmergencyStopClicked(!emergencyStopClicked);
    };
	return (
		<IonPage className={ styles.homePage }>
		 <IonHeader>
            <IonToolbar>
			<IonIcon icon={batteryFullOutline} slot="start" size="large" style={{ transform: 'rotate(-90deg)', margin: "10px" ,color:"green" }} />
                <span style={{ marginLeft: "0px" }}>100%</span>
                <IonButton  style={{margin:"10px"}} slot="end" onClick={handleEmergencyStop} className={emergencyStopClicked ? 'emergency-stop-active' : 'emergency-stop-inactive'}>
                    <IonIcon icon={pauseOutline} />
                    Urgence
                </IonButton>
            </IonToolbar>
        </IonHeader>
			<IonContent fullscreen>

				<div className={ styles.getStarted }>
					<IonGrid>
					<IonRow >
            <IonCol size="12" className={styles.headingText}>
                <IonCard className={styles.notificationCard}>
                    <IonCardContent>
                        <h2>Notifications</h2>
                        <div className={styles.notificationList}>
						    <NotificationItem message="New message from John Doe"  />

                            <NotificationItem message="Reminder: Appointment at 10:00 AM" />
                            <NotificationItem message="Reminder: Appointment at 10:00 AM" />
                            <NotificationItem message="Reminder: Appointment at 10:00 AM" />
                            <NotificationItem message="Reminder: Appointment at 10:00 AM" />
                            <NotificationItem message="Meeting canceled" />
                            <NotificationItem message="Meeting canceled" />
                            <NotificationItem message="Meeting canceled" />
                            <NotificationItem message="Meeting canceled" />
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>

						<IonRow className={ `ion-text-center ion-justify-content-center` }>
						<IonCol size="12">
							<IonCard className="map-card" >
								<IonCardContent>
									<h2>Ma carte</h2>
									<p>Contenu de la carte ici...</p>
								</IonCardContent>
							</IonCard>
						</IonCol>
						</IonRow>

						<IonRow className={`ion-text-center ion-justify-content-center`}>
                            <IonCol size="12">
                                {/* Ajoutez le composant VideoCard ici */}
                              <VideoCard />
                               
                            </IonCol>
                        </IonRow>
					</IonGrid>


				</div>
			</IonContent>

			<IonFooter >
				<IonGrid>
					{/*<Action message="Already got an account?" text="Login" link="/login" />*/}
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Home;
