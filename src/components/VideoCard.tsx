import React from 'react';
import ReactPlayer from 'react-player';
import { IonCard, IonCardContent } from '@ionic/react';
import './VideoCard.css'; // Importez le fichier CSS
const VideoCard: React.FC = () => {
    return (
        <IonCard className="video-card">
            <IonCardContent>

                {/* Utilisez le composant ReactPlayer pour lire le flux RTSP */}
                <ReactPlayer
                    url="rtsp://root:h@niJeet234!!@@@41.228.129.43:554/live1s4.sdp"
                    controls={true}
                    playing={true} // Activation de la lecture automatique
                    width="100%"
                    height="100%"
                />
            </IonCardContent>
        </IonCard>
    );
};

export default VideoCard;
