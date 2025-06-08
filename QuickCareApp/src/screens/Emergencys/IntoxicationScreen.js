// src/screens/IntoxicationScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Pregunta a la persona si puede toser, hablar o respirar. Si no puede, actúa rápidamente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Choking%2FChokingStep1.png?alt=media&token=bd7fa6cc-3745-409b-9f2a-d1a5dd96b719",
    },
    {
        text: "Llama al 911 o pide a alguien que lo haga mientras inicias maniobras de desobstrucción.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Choking%2FChokingStep2.png?alt=media&token=7752fa03-8a1b-46c2-8baf-9a6015399c1c",
    },
    {
        text: "Da 5 golpes fuertes en la espalda entre los omóplatos con el talón de tu mano.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Choking%2FChokingStep3.png?alt=media&token=bfe7c25d-67f4-49ec-9c3c-2a03d0d37c88",
    },
    {
        text: "Si no se libera, realiza la maniobra de Heimlich: abraza por detrás a la persona, coloca tu puño sobre su abdomen (por encima del ombligo) y empuja con fuerza hacia adentro y arriba.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Choking%2FChokingStep4.png?alt=media&token=9db1ef63-08a8-41a5-9993-6a2a41a7c8a7",
    },
    {
        text: "Alterna 5 golpes en la espalda con 5 compresiones abdominales hasta que el objeto salga o la persona recupere la respiración.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Choking%2FChokingStep5.png?alt=media&token=4579f1fa-bfc1-4bb8-8971-3aa0c289da7f",
    },
    {
        text: "Si la persona pierde el conocimiento, colócala en el suelo y comienza reanimación cardiopulmonar (RCP).",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Choking%2FChokingStep6.png?alt=media&token=5b24554a-8e18-47d7-a5cd-05e50d99a62d",
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