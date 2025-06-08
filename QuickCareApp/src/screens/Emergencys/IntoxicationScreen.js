// src/screens/IntoxicationScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep1.png?alt=media&token=f8b9ec0e-4c58-4c76-aef2-f23fbe76b819",
    },
    {
        text: "Identifica, si es posible, qué sustancia causó la intoxicación (envase, olor, síntomas, etc.).",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep2.png?alt=media&token=5b4c60ea-3896-4a20-a4c4-420b20235ef6",
    },
    {
        text: "No provoques el vómito a menos que lo indique un profesional de salud.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep3.png?alt=media&token=fbfc6585-2f40-44cc-a3e0-3b08ff9f0b6a",
    },
    {
        text: "Mantén a la persona en reposo, despierta y vigilada mientras llega ayuda.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep4.png?alt=media&token=4b9e3d35-1be1-4c26-961f-99b8c91e8d20",
    },
    {
        text: "Si inhaló un gas tóxico, trasládala a un lugar con aire fresco lo antes posible.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep5.png?alt=media&token=2961bdea-b41f-4d95-98f1-dc91d33466ec",
    },
    {
        text: "Llama al 911 o al centro de toxicología más cercano e informa lo que ocurrió.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep6.png?alt=media&token=7b97c50d-b914-4457-b4dc-d47b0de6b79f",
    },
    {
        text: "Guarda el envase o resto de la sustancia para mostrarlo al personal médico.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Poisoning%2FPoisoningStep7.png?alt=media&token=cc16ff6f-4b78-4294-a7a7-c6a168623622",
    },
];

const IntoxicationScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Intoxicación"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default IntoxicationScreen;