// src/screens/BurnScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep1.png?alt=media&token=ed28aa5a-804d-40fa-8a20-94284c93c49e",    
    },
    {
        text: "Detén la causa de la quemadura (fuego, corriente eléctrica, químico, etc.) si es seguro hacerlo.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep2.png?alt=media&token=801a2158-67bc-4653-8c79-2635ae9a9e3a",
    },
    {
        text: "Enfría la zona afectada con agua limpia a temperatura ambiente durante al menos 10 minutos.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep3.png?alt=media&token=46f8b989-27aa-4c08-8809-5ffb6b4c3be8",
    },
    {
        text: "No apliques hielo, pasta de dientes ni remedios caseros sobre la quemadura.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep4.png?alt=media&token=bfe0a7a9-e0eb-4403-8fcb-bcb91f8e97e7",
    },
    {
        text: "Cubre la quemadura con un paño limpio o gasa estéril sin presionar demasiado.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep5.png?alt=media&token=21de58f0-94d2-4f07-a9d2-cad3035b1fa3",
    },
    {
        text: "Retira cuidadosamente anillos, pulseras o ropa cercana antes de que se hinche la zona, solo si no están pegados a la piel.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep6.png?alt=media&token=bc3e7da2-5cf3-495b-934a-4e6ab149c197",
    },
    {
        text: "Llama al 911 si la quemadura es extensa, afecta la cara, genitales o articulaciones, o si la persona tiene dificultad para respirar.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/Burn%2FBurnStep7.png?alt=media&token=3a4582d9-24d0-497b-83f4-d17e8c92b4d1",
    },
];

const BurnScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Quemadura"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default BurnScreen;
