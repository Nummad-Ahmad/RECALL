import { useNavigate } from 'react-router-dom';
import style from './feedback.module.css';
import Contactrobot from './images/contactrobo.png';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { toggleMode } from './redux/slices';
import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
export default function Contact() {
    const currentTime = new Date();
    const [endTime, setEndTime] = useState('');
    const mode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    // useEffect(() => {
    //     const storedValue = JSON.parse(localStorage.getItem('isOn'));
    //     if (storedValue) {
    //         dispatch(toggleMode());
    //     }
    // }, []);
    function handleClick() {
        dispatch(toggleMode());
        localStorage.setItem('isOn', JSON.stringify(mode));
    }
        useEffect(() => {
            if (clicked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible'; 
            }
            return () => {
                document.body.style.overflow = 'visible'; 
            };
        }, [clicked]);
        function checkDate(current, stored) {
            const firstDate = new Date(current);
            const secondDate = new Date(stored);
            return secondDate.getTime() > firstDate.getTime();
        }
        useEffect(() => {
            var storedUserEndTime = JSON.parse(localStorage.getItem('userEndTime'));
            storedUserEndTime = new Date(storedUserEndTime);
            setEndTime(storedUserEndTime);
        }, []);
    const headingStyle = {
        fontWeight: 'bold',
        color: mode ? 'white' : 'rgb(3, 34, 75)',
        fontSize: '25px',
        margin: '20px 0px',
        fontFamily: 'sans-serif'
    }
    return (
        <div className={`${mode ? style.contactdark : style.contactlight}`}>
            <div style={{ display: 'flex', alignSelf: 'center', justifySelf: 'center', flexDirection: 'column', width: '100%', maxWidth: '1400px' }}>
                <div className={`${mode ? style.navbardark : style.navbarlight}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaSearch size={20} color={`${!mode ? 'rgb(17, 24, 38)' : 'white'}`} />
                        <p style={{
                            margin: '0px', fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold',
                            userSelect: 'none',
                            touchAction: 'manipulation',
                            webkitUserSelect: 'none',
                            msUserSelect: 'none',
                        }}>RECALL</p>
                    </div>
                    <div className={style.options}>
                        <p onClick={() => navigate('/home')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Home</p>
                        {
                            checkDate(currentTime, endTime) &&
                            <p onClick={() => navigate('/chat')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Search</p>
                        }
                        <p onClick={() => navigate('/feedback')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Feedback</p>
                        <p onClick={() => navigate('/guidelines')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Guidelines</p>
                        {/* <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={() => navigate('/')}>
                            <FiLogIn size={20} color={`${!mode ? 'rgb(17, 24, 38)' : 'white'}`} />
                            <p style={{ margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Sign in</p>
                        </div> */}
                        <div style={{ cursor: 'pointer' }} onClick={() => handleClick()}>
                            {
                                !mode ?
                                    <MdDarkMode color='rgb(17, 24, 38)' size={20} /> :
                                    <MdLightMode color='white' size={20} />
                            }
                        </div>
                    </div>
                    <div className={style.menuicon} onClick={() => setClicked(!clicked)}>
                        {
                            clicked ?
                                <IoMdClose size={20} color={`${mode ? 'white' : 'black'}`} /> :
                                <IoMdMenu size={20} color={`${mode ? 'white' : 'black'}`} />
                        }
                    </div>
                </div>
                {
                    clicked &&
                    <div className={`${mode ? style.menudark : style.menulight}`}>
                        <div onClick={() => navigate('/home')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <IoHomeOutline size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Home</p>
                        </div>
                        {
                            checkDate(currentTime, endTime) &&
                            <div onClick={() => navigate('/chat')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <IoIosSearch size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Search</p>
                        </div>}
                        <div onClick={() => navigate('/feedback')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <FaRegCommentAlt size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Feedback</p>
                        </div>
                        <div onClick={() => navigate('/guidelines')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <CiCircleInfo size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Guidelines</p>
                        </div>
                        <div style={{ cursor: 'pointer', display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }} onClick={() => { handleClick(); setClicked(false) }}>
                            {
                                !mode ?
                                    <MdDarkMode color='rgb(17, 24, 38)' size={30} /> :
                                    <MdLightMode color='white' size={30} />
                            }
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>{!mode ? 'Dark' : 'Light'} mode</p>
                        </div>
                        <div onClick={() => setClicked(!clicked)} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <IoMdClose size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Close</p>
                        </div>
                    </div>
                }
                <div className={style.contentContainer}>
                    <div className={style.container}>
                        <div className={style.leftcontainer}>
                            <img className={style.img} src={Contactrobot} />
                        </div>
                        <div className={style.rightcontainer}>
                            <p style={headingStyle}>
                                Feel free to share your feedback
                            </p>
                            <p style={{ margin: '0px', color: `${mode ? 'white' : 'black'}`, fontFamily: 'sans-serif' }}>
                                We value your thoughts and feedback! Please don't hesitate to share your suggestions, comments or queries.
                            </p>
                            <p style={{ marginTop: '30px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px', color: `${mode ? 'white' : 'black'}`, fontFamily: 'sans-serif' }}>First Name</p>
                            <input className={style.input} placeholder="Enter your first name" />
                            <p style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px', color: `${mode ? 'white' : 'black'}`, fontFamily: 'sans-serif' }}>Last Name</p>
                            <input className={style.input} placeholder="Enter your last name" />
                            <p style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px', color: `${mode ? 'white' : 'black'}`, fontFamily: 'sans-serif' }}>Email</p>
                            <input className={style.input} placeholder="Enter your email" />
                            <p style={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold', fontSize: '18px', color: `${mode ? 'white' : 'black'}`, fontFamily: 'sans-serif' }}>Your feedback or query</p>
                            <input className={style.input} placeholder="Enter your feedback or query" />
                            <button className={style.btn}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

