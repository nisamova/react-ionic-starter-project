import React, { useState } from "react"
import {
  IonButton,
  IonToast,
  IonIcon,
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/react"
import { play as playIcon } from "ionicons/icons"
function App() {
  const [showToast, setShowToast] = useState(false)
  const handleClick = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 1500)
  }
  return (
    <IonApp>
      <IonToolbar>
        <IonHeader>
          <IonTitle>My App</IonTitle>
        </IonHeader>
      </IonToolbar>
      <IonContent>
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message="Hello world!" />
      </IonContent>
    </IonApp>
  )
}

export default App
