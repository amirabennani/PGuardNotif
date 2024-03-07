import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { ellipse, home, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Users from './pages/Users';
import Tab3 from './pages/Tab3';
//import '../App.css';
import { homeOutline, personOutline, searchOutline } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Robots from './pages/Robots';
import robotIcon from '/assets/robot.png';
import VideoPlayer from './pages/VideoPlayer';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact />
        <Route path="/tabs" component={Tabs} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/tabs/home" component={Home} exact />
      <Route path="/tabs/robots" component={Robots} exact />
      <Route path="/tabs/users" component={Users} exact />
      <Route path="/test" component={VideoPlayer} exact />
      <Redirect exact from="/tabs" to="/tabs/home" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom" className="custom-tab-bar"> {/* Ajoutez votre classe CSS ici */}
      <IonTabButton tab="home" href="/tabs/home" className="custom-tab-button">
        <IonIcon icon={homeOutline} />
      </IonTabButton>
      <IonTabButton tab="movies" href="/tabs/robots" className="custom-tab-button">
        <img src={robotIcon} style={{ width: "25px" }}></img>
      </IonTabButton>
      <IonTabButton tab="users" href="/tabs/users" className="custom-tab-button">
        <IonIcon icon={personOutline} />
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);
export default App;
