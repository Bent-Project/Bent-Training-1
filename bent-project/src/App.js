import React from 'react';
import logo from './logo.svg';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './App.css';


function App(props) {
  return (
    <>
     <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bent Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>RESUME</IonCardSubtitle>
            <IonCardTitle>About Me</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Saya biasa dipanggil BENT, yang sebenarnya nama saya Bentang Wijayandaru Putra
            saya tahun ini berumur 28 tahun, sudah menikah, serta sudah mempunyai 1 orang anak.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            Untuk lebih lanjut mengenai saya,
            Anda bisa meng klik tombol - tombol dibawah ini.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
}

export default App;
