// import { useState } from 'react';
// import style from './homepage.module.css';
// import { MdLightMode, MdDarkMode } from "react-icons/md";
// import axios from 'axios';

// export default function Home() {
//     const url = 'https://chat.botpress.cloud/f1984cf2-0a55-4199-9e76-f6a6e2fc36b5/conversations/convo-1/messages';
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             'x-user-key': 'Nummad1'
//         }
//     };

//     const [messages, setMessages] = useState([]);
//     const [isOn, setIsOn] = useState(true);
//     const [message, setMessage] = useState({ type: 'question', content: '' });

//     const addMessage = async () => {
//         if (!message.content.trim()) return;

//         const userMessage = { type: 'question', content: message.content };
//         setMessages((prevMessages) => [...prevMessages, userMessage]);

//         setMessage({ type: 'question', content: '' });

//         await sendMessageToBot(userMessage.content);
//     };

//     const sendMessageToBot = async (userMessage) => {
//         try {
//             const response = await axios.post('http://localhost:3000/send', { userMessage });
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { type: 'answer', content: response.data },
//             ]);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { type: 'answer', content: 'Unable to connect to the bot. Please try again later.' },
//             ]);
//         }
//     };

//     const h1Style = {
//         margin: '0px',
//         fontFamily: 'sans-serif',
//         cursor: 'pointer',
//         color: isOn ? 'white' : 'black',
//         fontSize: '18px',
//     };

//     return (
//         <div className={`${!isOn ? style.homelight : style.homedark}`}>
//             <div className={style.chat}>
//                 <div style={{ margin: '0px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <h1 style={h1Style}>Recall</h1>
//                     <div className={style.topmenu}>
//                         <h1 style={h1Style}>About</h1>
//                         <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
//                             <MdLightMode size={20} color={`${isOn ? 'white' : 'black'}`} />
//                             <div
//                                 className={`${isOn ? style.switchon : style.switchoff}`}
//                                 onClick={() => setIsOn(!isOn)}
//                             >
//                                 <div className={`${isOn ? style.ballon : style.balloff}`} />
//                             </div>
//                             <MdDarkMode size={20} color={`${isOn ? 'white' : 'black'}`} />
//                         </div>
//                     </div>
//                 </div>
//                 <iframe
//                     style={{
//                         height: '99%',
//                         width: '100%',
//                         border: 'none',
//                     }}
//                     srcDoc={`
//                         <!doctype html>
//                         <html lang="en">
//                             <head></head>
//                             <body>  

//     <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>



//                                 <script defer>
//                                     window.botpress.on("webchat:ready", (conversationId) => {
//                                         botpress.open();
//                                     });
//                                     window.botpress.init({
//   "botId": "d60e3064-2d3e-4cae-9277-c7f112e11d1f",
//   "configuration": {
//     "botName": "RECALL",
//     "website": {},
//     "email": {},
//     "phone": {},
//     "termsOfService": {},
//     "privacyPolicy": {},
//     "color": "#ffffff",
//     "variant": "soft",
//     "themeMode": "dark",
//     "fontFamily": "inter",
//     "radius": 0.5,
//     "additionalStylesheetUrl": "https://files.bpcontent.cloud/2024/12/29/10/20241229102115-7UG7L8HX.css",
//     "allowFileUpload": false
//   },
//   "clientId": "4f8259f9-b3d4-4255-a276-46f80120b643"
// });
//                                 </script>
//                             </body>
//                         </html>
//                     `}
//                 />
//             </div>
//         </div>
//     );
// }



import style from './chat.module.css'; 
import { MdLightMode } from "react-icons/md"; 
import { MdDarkMode } from "react-icons/md"; 
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleMode } from './redux/slices'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';  

export default function Chat() { 
    const navigate = useNavigate(); 
    const mode = useSelector((state) => state.mode.value); 
    const dispatch = useDispatch(); 

    function handleClick() { 
        dispatch(toggleMode()); 
        localStorage.setItem('isOn', JSON.stringify(mode)); 
    } 

    const h1Style = { 
        cursor: 'pointer', 
        margin: '0px', 
        fontSize: '18px', 
        fontFamily: 'sans-serif', 
        display: 'inline', 
        color: mode ? 'white' : 'black', 
    }; 

    return ( 
        <div className={`${!mode ? style.homelight : style.homedark}`}> 
            <div className={style.chat}> 
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
                    <h1 style={h1Style}>Recall</h1> 
                    <div className={style.topmenu}> 
                        <div style={{ 
                            cursor: 'pointer', 
                            margin: '0px', 
                            fontSize: '18px', 
                            fontFamily: 'sans-serif', 
                            display: 'inline', 
                            color: mode ? 'white' : 'black', 
                        }} 
                        onClick={() => navigate('/home')}> 
                            Home 
                        </div> 
                        <p style={h1Style}>About</p> 
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} onClick={() => handleClick()}> 
                            { 
                                mode ? 
                                    <MdLightMode size={20} color={`${mode ? 'white' : 'black'}`} /> : 
                                    <MdDarkMode size={20} color={`${mode ? 'white' : 'black'}`} /> 
                            } 
                        </div> 
                    </div> 
                </div> 
                <div style={{ height: '99%' }}> 
                    <iframe 
                        className={style.iframe} 
                        // src="https://app.vectorshift.ai/chatbots/deployed/6791eb9f7f0fbe854d4f0ba9" 
                        src="https://app.vectorshift.ai/chatbots/deployed/6791eb9f7f0fbe854d4f0ba9"
                        style={{

                        }}
                    allow="clipboard-read; clipboard-write; microphone" 
                    title="Chatbot" 
                    /> 
                </div> 
  
            </div> 
        </div> 
    ); 
}



















// import { useState } from 'react';
// import style from './homepage.module.css';
// import { MdLightMode, MdDarkMode } from "react-icons/md";
// import { FaRegArrowAltCircleUp } from "react-icons/fa";
// import axios from 'axios';

// export default function Home() {
//     const [messages, setMessages] = useState([]);
//     const [isOn, setIsOn] = useState(true);
//     const [messageContent, setMessageContent] = useState('');

//     const addMessage = async () => {
//         const trimmedMessage = messageContent.trim();
//         if (!trimmedMessage) return;

//         // Add user question
//         setMessages((prevMessages) => [
//             ...prevMessages,
//             { type: 'question', content: trimmedMessage },
//         ]);
//         setMessageContent(''); // Clear input

//         // Fetch bot response
//         await sendMessageToBot(trimmedMessage);
//     };

//     const sendMessageToBot = async (userMessage) => {
//         try {
//             const response = await axios.post('http://localhost:3000/webhook', {
//                 query: userMessage, // Sending the user message as part of the payload
//             });
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { type: 'answer', content: response.data.message || "No response from bot." },
//             ]);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { type: 'answer', content: 'Unable to connect to the bot. Please try again later.' },
//             ]);
//         }
//     };


//     const h1Style = {
//         margin: 0,
//         fontFamily: 'sans-serif',
//         cursor: 'pointer',
//         color: isOn ? 'white' : 'black',
//         fontSize: '18px',
//     };

//     return (

//         <div className={isOn ? style.homedark : style.homelight}>
//             <div className={style.chat}>
//                 {/* Header */}
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <h1 style={h1Style}>Recall</h1>
//                     <div className={style.topmenu}>
//                         <h1 style={h1Style}>About</h1>
//                         <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
//                             <MdLightMode size={20} color={isOn ? 'white' : 'black'} />
//                             <div
//                                 className={isOn ? style.switchon : style.switchoff}
//                                 onClick={() => setIsOn(!isOn)}
//                             >
//                                 <div className={isOn ? style.ballon : style.balloff} />
//                             </div>
//                             <MdDarkMode size={20} color={isOn ? 'white' : 'black'} />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Chat Section */}
//                 <div className={isOn ? style.darkchatsection : style.lightchatsection}>
//                     <div className={style.messages}>
//                         {messages.length > 0 ? (
//                             messages.map((item, index) => (
//                                 <div
//                                     key={index}
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: item.type === 'question' ? 'flex-end' : 'flex-start',
//                                     }}
//                                 >
//                                     <div className={item.type === 'question' ? style.question : style.answer}>
//                                         <p style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>
//                                             {item.content}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div style={{ margin: 'auto', textAlign: 'center' }}>
//                                 <h1 className={isOn ? style.lightrecall : style.darkrecall}>RECALL</h1>
//                                 <p className={isOn ? style.betalight : style.betadark}>Beta</p>
//                                 <p className={isOn ? style.onlycellslight : style.onlycellsdark}>By only cells</p>
//                             </div>
//                         )}
//                     </div>

//                     {/* Input Section */}
//                     <div className={style.inputDiv}>
//                         <input
//                             value={messageContent}
//                             placeholder="Search the guidelines"
//                             className={isOn ? style.darkinput : style.lightinput}
//                             onChange={(e) => setMessageContent(e.target.value)}
//                             onKeyDown={(e) => e.key === 'Enter' && addMessage()}
//                         />
//                         <div onClick={addMessage}>
//                             <FaRegArrowAltCircleUp size={25} color={isOn ? 'white' : 'black'} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
