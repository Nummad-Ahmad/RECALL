import React, { useEffect } from 'react';

const ChatIntegration = () => {
    useEffect(() => {
        // Load the Botpress Webchat script
        const botpressScript = document.createElement('script');
        botpressScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
        botpressScript.async = true;
        document.body.appendChild(botpressScript);

        // Initialize Botpress when the script loads
        botpressScript.onload = () => {
            window.botpress.init({
                botId: "4f8259f9-b3d4-4255-a276-46f80120b643",
                clientId: "4f8259f9-b3d4-4255-a276-46f80120b643",
                configuration: {
                    color: "#3B82F6",
                    variant: "solid",
                    themeMode: "light",
                    fontFamily: "inter",
                    radius: 1,
                },
            });
        };

        // Cleanup script on unmount
        return () => {
            document.body.removeChild(botpressScript);
        };
    }, []);

    return (
        <div>
            <div id="bp-web-widget" />
        </div>
    );
};

export default ChatIntegration;
