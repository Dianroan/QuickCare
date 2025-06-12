// src/screens/BleedingScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de atender a la persona.",
        image:
            require("../../../assets/Bleeding/Bleeding1.png"),
    },
    {
        text: "Ponte guantes o cúbrete las manos con una bolsa o tela para evitar contacto directo con la sangre.",
        image:
            require("../../../assets/Bleeding/Bleeding2.png"),
    },
    {
        text: "Aplica presión directa sobre la herida con una gasa, pañuelo o tela limpia para detener el sangrado.",
        image:
            require("../../../assets/Bleeding/Bleeding3.png"),
    },
    {
        text: "Si la gasa se empapa de sangre, no la retires. Coloca otra encima y sigue presionando.",
        image:
            require("../../../assets/Bleeding/Bleeding4.png"),
    },
    {
        text: "Si es posible, eleva la parte del cuerpo afectada por encima del nivel del corazón.",
        image:
            require("../../../assets/Bleeding/Bleeding5.png"),
    },
    {
        text: "Llama al 911 si el sangrado no se detiene, es muy abundante o si la persona pierde el conocimiento.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
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
