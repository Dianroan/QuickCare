// src/screens/FaintingScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            require("../../../assets/Fainting/FaintingStep1.png"),
    },
    {
        text: "Comprueba si la persona respira normalmente.",
        image:
            require("../../../assets/Fainting/FaintingStep2.png"),
    },
    {
        text: "Si respira, afloja su ropa y eleva sus piernas.",
        image:
            require("../../../assets/Fainting/FaintingStep3.png"),
    },
    {
        text: "No le des comida ni agua mientras esté inconsciente.",
        image:
            require("../../../assets/Fainting/FaintingStep4.png"),
    },
    {
        text: "Si no despierta en 1 minuto, llama al 911 inmediatamente.",
        image:
            require("../../../assets/Fainting/FaintingStep5.png"),
    },
];

const FaintingScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para desmayo"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default FaintingScreen;
