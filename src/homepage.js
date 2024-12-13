import { useState } from 'react';
import style from './homepage.module.css';
// import axios from 'axios';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function Home() {

    const [messages, setMessages] = useState([{ type: 'answer', content: 'Hey, how can I help you?' }]);
    const [isOn, setIsOn] = useState(true);
    const [message, setMessage] = useState({
        type: '', content: ''
    });
    function toggleHandler() {
        setIsOn(!isOn);
    }
    function handleKey(e) {
        if (e.key == 'Enter') {
            setMessages([...messages, message]);
            console.log(message);
            console.log(messages);
        }
    }
    function isClicked() {
        if (message.content.length > 0) {
            setMessages([...messages, message]);
        }
    }
    const homeStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        backgroundColor: isOn ? 'rgb(27, 29, 33)' : 'white',
        justifyContent: 'center'
    }
    const h1Style = {
        margin: '0px',
        fontSize: '19px',
        fontFamily: 'sans-serif',
        color: isOn ? 'white' : 'black',
        cursor: 'pointer'
    }
    return (
        <div style={homeStyle}>
            <div className={style.chat}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={h1Style}>Chat</h1>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <h1 style={h1Style}>About</h1>
                        <h1 style={h1Style}>Upload PDF</h1>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <MdLightMode size={20} color={`${isOn ? 'white' : 'black'}`} />
                            <div className={`${isOn ? style.switchon : style.switchoff}`} onClick={() => setIsOn(!isOn)} >
                                <div className={`${isOn ? style.ballon : style.balloff}`} onClick={() => setIsOn(!isOn)} />
                            </div>
                            <MdDarkMode size={20} color={`${isOn ? 'white' : 'black'}`} />
                        </div>
                    </div>

                </div>
                <div className={style.chatsection}>
                    <div className={style.messages}>
                        {
                            messages.length > 0 ?
                                messages.map((item, index) => {
                                    return (
                                        item.type == 'question' ?
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <div className={style.question}>
                                                    <p style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>{item.content}</p>
                                                </div>
                                            </div> :
                                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                <div className={style.answer}>
                                                    <p style={{ fontFamily: 'sans-serif', fontSize: '15px' }}>{item.content}</p>
                                                </div>
                                            </div>
                                    )
                                }) :
                                <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'start' }}>
                                        <h1 className={style.recall}>RECALL</h1>
                                        <p style={{ margin: '0px', color: 'white', fontSize: '12px' }}>Beta</p>
                                    </div>
                                    <p style={{ margin: '0px', color: 'white', fontSize: '12px' }}>By only cells</p>
                                </div>

                        }
                    </div>
                    <div className={style.inputDiv}>
                        <input placeholder='Search the guidelines' className={style.input} onChange={(e) => { setMessage({ content: e.target.value, type: 'question' }) }} onKeyDown={handleKey}></input>
                        <div onClick={isClicked}>
                            <FaRegArrowAltCircleUp size={25} color='rgb(200, 200, 200)' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}