import { useEffect, useState } from 'react';
import style from './homepage.module.css';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";


export default function Home() {
    const [clicked, setClicked] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isOn, setIsOn] = useState(true);
    const [message, setMessage] = useState({
        type: '', content: ''
    });
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
        justifyContent: 'center',
    }
    const h1Style = {
        margin: '0px',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        color: isOn ? 'white' : 'black',
        fontSize: '18px'
    }

    return (
        <div className={`${!isOn ? style.homelight : style.homedark}`}>
            <div className={style.chat}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={h1Style}>Recall</h1>
                    <div className={style.topmenu}>
                        <h1 style={h1Style}>About</h1>
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <MdLightMode size={20} color={`${isOn ? 'white' : 'black'}`} />
                            <div className={`${isOn ? style.switchon : style.switchoff}`} onClick={() => setIsOn(!isOn)} >
                                <div className={`${isOn ? style.ballon : style.balloff}`} onClick={() => setIsOn(!isOn)} />
                            </div>
                            <MdDarkMode size={20} color={`${isOn ? 'white' : 'black'}`} />
                        </div>
                    </div>

                </div>
                <div className={`${!isOn ? style.lightchatsection : style.darkchatsection}`}>
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
                                        <h1 className={`${!isOn ? style.darkrecall : style.lightrecall}`}>RECALL</h1>
                                        <p className={`${isOn ? style.betalight : style.betadark}`}>Beta</p>
                                    </div>
                                    <p className={`${!isOn ? style.onlycellsdark : style.onlycellslight }`}>By only cells</p>
                                </div>

                        }
                    </div>
                    <div className={style.inputDiv}>
                        <input placeholder='Search the guidelines' className={`${isOn ? style.darkinput : style.lightinput}`} onChange={(e) => { setMessage({ content: e.target.value, type: 'question' }) }} onKeyDown={handleKey}></input>
                        <div onClick={isClicked}>
                            <FaRegArrowAltCircleUp size={25} color={`${isOn ? 'white' : 'black'}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}