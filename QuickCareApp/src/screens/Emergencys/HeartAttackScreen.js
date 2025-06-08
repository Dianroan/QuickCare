// src/screens/HeartAttackScreen.js
import React from "react";
import EmergencyStepScreen from "../../components/EmergencyStepScreen";

const steps = [
    {
        text: "Haz que la persona se siente y se mantenga lo más tranquila posible.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/HeartAttack%2FHeartAttackStep1.png?alt=media&token=7f60aabf-4e9f-4c33-9c6e-2d63c0c53526",
    },
    {
        text: "Llama de inmediato al 911 o al número de emergencias local.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/HeartAttack%2FHeartAttackStep2.png?alt=media&token=a8d9c720-27e6-4be2-9bd6-3b775d2a9318",
    },
    {
        text: "Afloja la ropa ajustada y mantén a la persona abrigada si tiene frío.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/HeartAttack%2FHeartAttackStep3.png?alt=media&token=5a206de7-2a91-44db-b5b0-86c120878db0",
    },
    {
        text: "Si la persona está consciente y no es alérgica, puedes darle una aspirina para masticar, si no tiene contraindicaciones.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/HeartAttack%2FHeartAttackStep4.png?alt=media&token=b06686b4-87fa-4b34-9c06-83055fa68e1f",
    },
    {
        text: "No permitas que coma, beba ni se mueva innecesariamente.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/HeartAttack%2FHeartAttackStep5.png?alt=media&token=fe8e7a94-96ed-4ec1-9b1d-0534fe3b2497",
    },
    {
        text: "Si pierde el conocimiento y no respira, inicia RCP inmediatamente hasta que llegue ayuda.",
        image:
            "https://firebasestorage.googleapis.com/v0/b/quick-care-project.firebasestorage.app/o/HeartAttack%2FHeartAttackStep6.png?alt=media&token=0769492f-d872-4b46-8b3f-0ae23f81f0c3",
    },
];

const HeartAttackScreen = ({ navigation }) => {
    return (
        <EmergencyStepScreen
            title="Guía para Infarto"
            steps={steps}
            navigation={navigation}
            onFinish={() => navigation.navigate("EmergencyHome")}
        />
    );
};

export default HeartAttackScreen;
