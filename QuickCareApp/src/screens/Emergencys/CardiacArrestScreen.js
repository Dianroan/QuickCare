// src/screens/CardiacArrestScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "Comprueba si la persona responde y respira normalmente. Si no lo hace, es una emergencia.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "Llama inmediatamente al 911 o pide a alguien más que lo haga.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "Inicia compresiones torácicas fuertes y rápidas en el centro del pecho (a un ritmo de 100-120 por minuto).",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "Presiona con ambas manos una sobre otra, con los brazos rectos y el cuerpo alineado sobre el pecho.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "Continúa con las compresiones sin detenerte hasta que llegue ayuda o un desfibrilador (DEA).",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "Si hay un DEA disponible, enciéndelo y sigue sus instrucciones inmediatamente.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
    {
        text: "No suspendas las compresiones a menos que la persona recupere la conciencia o lleguen los servicios de emergencia.",
        image:
            require("../../../assets/Bleeding/Bleeding6.png"),
    },
];

const CardiacArrestScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Paro Cardiaco"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default CardiacArrestScreen;
