import React, { useEffect, useState } from 'react';
import style from './dialog.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
const DialogflowMessenger = () => {
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    // Dynamically load the external script for Dialogflow Messenger
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const h1Style = {
    marginTop: '10px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    color: isOn ? 'white' : 'black',
    fontSize: '25px',
  };
  return (

    <div style={{ height: '100vh', width: '100%' }} className={`${isOn ? style.dark : style.light}`}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        color: 'white',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '0px',
        width: '80%',
        maxWidth: '1440px'
      }}>
        <h1 style={h1Style}>Recall</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
          <h1 style={h1Style}>About</h1>
          <div onClick={()=> setIsOn(!isOn)} style={{width: '30px', height: '30px', cursor: 'pointer'}}>
          {
            isOn ? <MdLightMode size={25} color={`${isOn ? 'white' : 'black'}`} /> : <MdDarkMode size={20} color={`${isOn ? 'white' : 'black'}`} />
          }
          </div>
          {/* <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <MdLightMode size={20} color={`${isOn ? 'white' : 'black'}`} />
            <div className={`${isOn ? style.switchon : style.switchoff}`} onClick={() =>{console.log(isOn); setIsOn(!isOn)}}>
              <div className={`${isOn ? style.ballon : style.balloff}`} />
            </div>
            <MdDarkMode size={20} color={`${isOn ? 'white' : 'black'}`} />
          </div> */}
        </div>
      </div>
      <div>
        <df-messenger
          project-id="recall-446608"
          agent-id="e117aeb7-3ca7-4dd6-8d46-cba66c31c92c"
          language-code="en"
          max-query-length="-1">
          <df-messenger-chat chat-title="Recall" />
        </df-messenger>
        <style>
          {`
          df-messenger {
  z-index: 999;
  position: fixed;

  /* Messenger container border-radius */
  --df-messenger-border-radius: 15px;  /* Border radius for the entire messenger */
  
  /* Other Messenger Customizations */
  --df-messenger-font-color: #c1c1c1;
  --df-messenger-font-family: Google Sans;
  --df-messenger-chat-background: #c1c1c1;
  --df-messenger-message-user-background: #000000;
  --df-messenger-message-bot-background: #000000;
  --df-messenger-message-bot-border-radius: 10px; /* Border radius for bot's messages */
  --df-messenger-message-user-border-radius: 10px; /* Border radius for user's messages */

  /* Title bar customization to hide it */
  --df-messenger-titlebar-font-color: transparent;
  --df-messenger-titlebar-background: transparent;
  --df-messenger-titlebar-height: 0px;

  /* Input field and chat background customizations */
  --df-messenger-input-background: #333333;
  --df-messenger-input-font-color: #ffffff;
  --df-messenger-input-border-radius: 15px; /* Border radius for the input field */
  --df-messenger-input-height: 50px;
  --df-messenger-input-font-size: 16px;

  /* Positioning */
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  top: 30px;
  width: 80%;
  max-width: 1440px;
}

/* Apply border-radius to individual message bubbles */
df-messenger .df-messenger-message-user {
  border-radius: 100px; /* Round corners for user's message */
}

df-messenger .df-messenger-message-bot {
  border-radius: 10px; /* Round corners for bot's message */
}

df-messenger .df-messenger-chat {
  border-radius: 15px; /* Border radius for the chat container */
  overflow: hidden; /* Prevent content from overflowing */
}

        `}
        </style>
      </div>
    </div>
  );
};

export default DialogflowMessenger;
