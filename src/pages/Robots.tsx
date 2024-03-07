import React, { useEffect, useState } from 'react';
import { IonButton, IonButtons, IonCardSubtitle, IonContent, IonFooter, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonToolbar } from '@ionic/react';
import { chevronBack, trashOutline } from 'ionicons/icons';
import styles from './Users.module.scss';

interface Robot {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    image: string;
}

const Robots: React.FC = () => {
    const [robots, setRobots] = useState<Robot[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [totalResults, setTotalResults] = useState<number>(0);

    const search = (e: CustomEvent) => {
        const searchTermVal = (e.target as HTMLIonSearchbarElement).value;
    
        if (searchTermVal) { // Verifica que searchTermVal no sea null o undefined
            const searchTermLower = searchTermVal.toLowerCase();
            searchData(searchTermLower);
            setSearchTerm(searchTermLower);
        } else {
            getData(true, 1);
            setSearchTerm("");
            setCurrentPage(1);
        }
    }
    

    const searchData = async (searchTermVal: string, page: number = 1) => {
        const imageBaseURL = "https://image.tmdb.org/t/p/w200";
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=24600637ab41d89f6dd63b4c52e8b14e&query=${searchTermVal}&page=${page}`);
        const data = await response.json();

        data.results.forEach((robot: Robot) => {
            let imageURL = robot.poster_path !== null ? `${imageBaseURL}${robot.poster_path}` : "https://critics.io/img/movies/poster-placeholder.png";
            robot.image = imageURL;
        });

        setTotalResults(data.total_results);
        page === 1 ? setRobots(data.results) : setRobots([...robots, ...data.results]);
    }

    const getData = async (initialFetch: boolean = true, page: number = 1) => {
        const imageBaseURL = "https://image.tmdb.org/t/p/w200";
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=24600637ab41d89f6dd63b4c52e8b14e&page=${page}`);
        const data = await response.json();

        data.results.forEach((robot: Robot) => {
            let imageURL = robot.poster_path !== null ? `${imageBaseURL}${robot.poster_path}` : "https://critics.io/img/movies/poster-placeholder.png";
            robot.image = imageURL;
        });

        setTotalResults(data.total_results);
        initialFetch ? setRobots(data.results) : setRobots([...robots, ...data.results]);
    }

    useEffect(() => {
        getData();
    }, []);

    const fetchMore = async () => {
        const newPage = currentPage + 1;
        await setCurrentPage(newPage);

        searchTerm === "" ? getData(false, newPage) : searchData(searchTerm, newPage);
    }

    return (
        <IonPage className={styles.page}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/tabs/home" routerDirection="back" color="light">
                            <IonIcon icon={chevronBack} />
                            &nbsp;Liste Robots
                        </IonButton>
                    </IonButtons>
                    {/*<div className={styles.searchContainer}>
                        <IonCardSubtitle>{totalResults} {totalResults === 1 ? "robots" : "robots"} found</IonCardSubtitle>
                        <IonSearchbar onIonChange={search} placeholder="Search..." slot="end" />
                     </div>*/}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={styles.content}>
                <IonList>
                    {robots.map((robot: Robot) => (
                        <IonItem id={`movieItem_${robot.id}`} className={`${styles.movieItem} animate__animated animate__fadeIn`} key={robot.id} lines="none">
                            <img src={robot.image} alt="movie poster" />
                            <IonLabel>
                                <h2>{robot.title}</h2>
                                <p>{robot.overview}</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                    <IonInfiniteScroll threshold="200px" onIonInfinite={fetchMore}>
                        <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Getting more robots..." />
                    </IonInfiniteScroll>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonButton expand="block">Ajouter Robot</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default Robots;
