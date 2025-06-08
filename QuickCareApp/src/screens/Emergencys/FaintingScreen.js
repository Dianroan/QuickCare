// src/screens/FaintingScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Fainting%2FFaintingStep1.png?alt=media&token=722a123e-5750-4ab6-b51d-e690adc4c3b6",
    },
    {
        text: "Comprueba si la persona respira normalmente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Fainting%2FFaintingStep2.png?alt=media&token=9beaa25a-3724-443e-9127-a1ac963af86c",
    },
    {
        text: "Si respira, afloja su ropa y eleva sus piernas.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Fainting%2FFaintingStep3.png?alt=media&token=479a8ad2-c7bc-42f5-8b97-5d9abd027a21",
    },
    {
        text: "No le des comida ni agua mientras esté inconsciente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Fainting%2FFaintingStep4.png?alt=media&token=3f9b7722-11da-47e4-921e-2fc7e05193a9",
    },
    {
        text: "Si no despierta en 1 minuto, llama al 911 inmediatamente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Fainting%2FFaintingStep5.png?alt=media&token=797e8b55-3abf-4d43-8d68-6f018a40754c",
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
