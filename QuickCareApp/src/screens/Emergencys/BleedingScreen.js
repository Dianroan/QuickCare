// src/screens/BleedingScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de atender a la persona.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Bleeding%2FBleedingStep1.png?alt=media&token=1b9c6a28-b693-4bfa-9ac2-2e4f3f2c47b3",
    },
    {
        text: "Ponte guantes o cúbrete las manos con una bolsa o tela para evitar contacto directo con la sangre.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Bleeding%2FBleedingStep2.png?alt=media&token=fd0e46c3-02b9-4f85-987b-dcc46cb403cb",
    },
    {
        text: "Aplica presión directa sobre la herida con una gasa, pañuelo o tela limpia para detener el sangrado.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Bleeding%2FBleedingStep3.png?alt=media&token=70b8f47e-7336-46ef-8f71-14a2e9c20a4b",
    },
    {
        text: "Si la gasa se empapa de sangre, no la retires. Coloca otra encima y sigue presionando.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Bleeding%2FBleedingStep4.png?alt=media&token=50994a1c-e240-4c9f-b937-76b73db1a9cd",
    },
    {
        text: "Si es posible, eleva la parte del cuerpo afectada por encima del nivel del corazón.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Bleeding%2FBleedingStep5.png?alt=media&token=39b3d7b2-f4d3-4e52-bf79-3cf287f14cc2",
    },
    {
        text: "Llama al 911 si el sangrado no se detiene, es muy abundante o si la persona pierde el conocimiento.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Bleeding%2FBleedingStep6.png?alt=media&token=8c2c5ed2-d761-4a76-8b57-9826e2f57dd6",
    },
];

const BleedingScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Herida Sangrante"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default BleedingScreen;
