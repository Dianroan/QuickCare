// src/screens/ElectrocutionScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "No toques a la persona si aún está en contacto con la fuente eléctrica. Primero corta la corriente si es posible.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep1.png?alt=media&token=21369e76-2634-4b5f-8e94-9b2e3f4b4d1c",
    },
    {
        text: "Si no puedes cortar la corriente, utiliza un objeto no conductor (como madera seca o plástico) para separar a la persona de la fuente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep2.png?alt=media&token=0bc9273c-800d-4537-bf82-10f9b73c2f9e",
    },
    {
        text: "Una vez que esté libre de la fuente, verifica si está consciente y respira.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep3.png?alt=media&token=0611ff0f-09a4-4490-84db-30278169fdf9",
    },
    {
        text: "Llama al 911 de inmediato, incluso si la persona parece estar bien.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep4.png?alt=media&token=1a0c5b96-d41c-4b01-9d1d-f68a293267b6",
    },
    {
        text: "Si no respira, inicia RCP y continúa hasta que llegue ayuda profesional.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep5.png?alt=media&token=bc6e189c-c8f0-4c96-b671-055a404d812e",
    },
    {
        text: "Si respira, mantén a la persona en reposo y cúbrela con una manta para evitar el enfriamiento.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep6.png?alt=media&token=62f2164e-66ae-4211-a51c-3f832f02127c",
    },
    {
        text: "No apliques pomadas ni retires ropa pegada a la piel si hay quemaduras.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Electrocution%2FElectrocutionStep7.png?alt=media&token=5efec055-00f4-4212-a0f9-2d10963ce635",
    },
];

const ElectrocutionScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Electrocución"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default ElectrocutionScreen;