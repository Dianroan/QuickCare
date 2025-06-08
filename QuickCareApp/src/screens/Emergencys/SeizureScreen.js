// src/screens/SeizureScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Mantén la calma y verifica que el entorno sea seguro para la persona.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep1.png?alt=media&token=1fa2077e-c137-4688-9011-37e22ac94d75",
    },
    {
        text: "Coloca a la persona en el suelo suavemente, evitando que se golpee.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep2.png?alt=media&token=2c6eae57-29f1-4e85-9913-bb2d0b330b8f",
    },
    {
        text: "Retira objetos cercanos con los que pueda golpearse, como muebles u objetos duros.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep3.png?alt=media&token=bc352b14-1370-41b7-81e3-8f3d84d53112",
    },
    {
        text: "No intentes sujetar a la persona ni introducir objetos en su boca.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep4.png?alt=media&token=7f68fffa-e17b-4654-b6a2-469e51fbe8b5",
    },
    {
        text: "Gira suavemente a la persona hacia un lado para ayudar a que respire mejor si es posible.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep5.png?alt=media&token=53b7c3f0-b932-4534-82db-005f6e9d4447",
    },
    {
        text: "Coloca algo blando debajo de su cabeza, como una chaqueta o toalla.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep6.png?alt=media&token=8633a72d-2c11-4ea3-a427-2b176ad9f4de",
    },
    {
        text: "Permanece junto a la persona hasta que la convulsión termine, generalmente en 1 a 3 minutos.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep7.png?alt=media&token=34724e90-ecb4-4746-938c-b6c9a8f1fc49",
    },
    {
        text: "Cuando termine la convulsión, asegúrate de que respira y colócala en posición lateral de seguridad.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep8.png?alt=media&token=6f3e882f-b93f-4176-a304-70ae69a45244",
    },
    {
        text: "Llama al 911 si la convulsión dura más de 5 minutos, es la primera vez que le ocurre, se ha lesionado gravemente o no recupera la conciencia.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Seizure%2FSeizureStep9.png?alt=media&token=519d5104-eafd-4c3f-80df-27dfe51c1160",
    },
];

const SeizureScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Convulsión"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default SeizureScreen;