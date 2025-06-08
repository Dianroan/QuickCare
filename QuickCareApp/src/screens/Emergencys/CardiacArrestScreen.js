// src/screens/CardiacArrestScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Verifica que el entorno sea seguro antes de acercarte a la persona.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep1.png?alt=media&token=b2e7f7e7-f4ff-4e86-81e5-043dc53d1102",
    },
    {
        text: "Comprueba si la persona responde y respira normalmente. Si no lo hace, es una emergencia.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep2.png?alt=media&token=749e1a86-7d46-4c55-a61b-8e8a3b65fc2c",
    },
    {
        text: "Llama inmediatamente al 911 o pide a alguien más que lo haga.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep3.png?alt=media&token=165db812-b6a1-4f1d-8862-5d6d8c401ad9",
    },
    {
        text: "Inicia compresiones torácicas fuertes y rápidas en el centro del pecho (a un ritmo de 100-120 por minuto).",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep4.png?alt=media&token=3f78843e-3e5f-4701-9db6-6bc9b2798053",
    },
    {
        text: "Presiona con ambas manos una sobre otra, con los brazos rectos y el cuerpo alineado sobre el pecho.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep5.png?alt=media&token=40b987b3-98a3-4075-84e5-f7e9291908e2",
    },
    {
        text: "Continúa con las compresiones sin detenerte hasta que llegue ayuda o un desfibrilador (DEA).",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep6.png?alt=media&token=0d8e7b32-bc21-4d84-92ea-60449c0fa302",
    },
    {
        text: "Si hay un DEA disponible, enciéndelo y sigue sus instrucciones inmediatamente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep7.png?alt=media&token=b90b1263-1964-4a6d-98b6-47318703fdd4",
    },
    {
        text: "No suspendas las compresiones a menos que la persona recupere la conciencia o lleguen los servicios de emergencia.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/CardiacArrest%2FCardiacStep8.png?alt=media&token=6d3e1d11-2d04-40e3-8017-5d168cdb40fd",
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
