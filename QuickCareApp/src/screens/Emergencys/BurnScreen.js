// src/screens/BurnScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            require("../../../assets/Burn/Burn1.png"),
    },
    {
        text: "Detén la causa de la quemadura (fuego, corriente eléctrica, químico, etc.) si es seguro hacerlo.",
        image:
            require("../../../assets/Burn/Burn2.png"),

    },
    {
        text: "Enfría la zona afectada con agua limpia a temperatura ambiente durante al menos 10 minutos.",
        image:
            require("../../../assets/Burn/Burn3.png"),

    },
    {
        text: "No apliques hielo, pasta de dientes ni remedios caseros sobre la quemadura.",
        image:
            require("../../../assets/Burn/Burn4.png"),

    },
    {
        text: "Cubre la quemadura con un paño limpio o gasa estéril sin presionar demasiado.",
        image:
            require("../../../assets/Burn/Burn5.png"),

    },
    {
        text: "Retira cuidadosamente anillos, pulseras o ropa cercana antes de que se hinche la zona, solo si no están pegados a la piel.",
        image:
            require("../../../assets/Burn//Burn6.png"),

    },
    {
        text: "Llama al 911 si la quemadura es extensa, afecta la cara, genitales o articulaciones, o si la persona tiene dificultad para respirar.",
        image:
            require("../../../assets/Burn/Burn7.png"),

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
