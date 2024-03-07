import React from 'react';
import { IonIcon } from '@ionic/react';
import { alertCircle, alertCircleOutline } from 'ionicons/icons'; // Importez l'icône que vous souhaitez utiliser
import styles from './NotificationItem.module.scss'; // Importez vos styles CSS si vous en avez

const NotificationItem: React.FC<{ message: string }> = ({ message }) => {
    return (
        <div className={styles.notificationItem}>
            <div className={styles.message}>{message}</div>
            <div className={styles.imageContainer}>
                <img src="../assets/alert.gif" alt="Notification GIF" style={{ width: "25px" }} />
            </div>
        </div>
    );
};

export default NotificationItem;
