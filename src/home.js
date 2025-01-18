import style from './home.module.css';
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { FiBookOpen } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from 'react-icons/io';
export default function Home() {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const [isOn, setIsOn] = useState('');
    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem('isOn'));
        if (storedValue) {
            setIsOn(storedValue);
        } else {
            setIsOn(true);
        }
    }, []);
    function handleClick() {
        setIsOn(!isOn);
        localStorage.setItem('isOn', JSON.stringify(isOn));
    }
    return (
        <div className={`${isOn ? style.homedark : style.homelight}`}>
            <div style={{ display: 'flex', alignSelf: 'center', justifySelf: 'center', flexDirection: 'column', width: '100%', maxWidth: '1400px' }}>
                <div className={`${isOn ? style.navbardark : style.navbarlight}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaSearch size={20} color={`${!isOn ? 'rgb(17, 24, 38)' : 'white'}`} />
                        <p style={{ margin: '0px', fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>RECALL</p>
                    </div>
                    <div className={style.options}>
                        <p onClick={() => navigate('/chat')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Search</p>
                        <p style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Pricing</p>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={() => navigate('/login')}>
                            <FiLogIn size={20} color={`${!isOn ? 'rgb(17, 24, 38)' : 'white'}`} />
                            <p style={{ margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Sign in</p>
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => handleClick()}>
                            {
                                !isOn ?
                                    <MdDarkMode color='rgb(17, 24, 38)' size={20} /> :
                                    <MdLightMode color='white' size={20} />
                            }
                        </div>
                    </div>
                    <div className={style.menuicon} onClick={() => setClicked(!clicked)}>
                        {
                            clicked ?
                                <IoMdClose color={`${isOn ? 'white' : 'black'}`} /> :
                                <IoMdMenu color={`${isOn ? 'white' : 'black'}`} />
                        }
                    </div>
                </div>
                {
                    clicked &&
                    <div className={style.menu}>
                        <p>Search</p>
                        <p>Pricing</p>
                        <p>Sign in</p>
                    </div>
                }
                <div className={style.hero}>
                    <IoIosSearch size='90px' color={'rgb(55, 130, 241)'} />
                    <p className={`${isOn ? style.heroheadingdark : style.heroheadinglight}`}>Search UK Haematology Guidelines</p>
                    <p className={`${isOn ? style.herotextdark : style.herotextlight}`}>Get instant, accurate answers with citations from trusted sources</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div className={style.bluediv}>Start Searching</div>
                        <div className={`${isOn ? style.whitedivdark : style.whitedivlight}`}>View Pricing</div>
                    </div>
                </div>
                <div className={`${isOn ? style.introdark : style.introlight}`}>
                    <p className={style.question}>What is Recall?</p>
                    <p className={style.answer}>Recall is your intelligent companion for addressing and understanding UK haematology guidelines. Built for healthcare professionals, it combines advanced AI technology with verified medical sources to provide instant, accurate answers to your clinical questions.</p>
                </div>
                <p className={`${isOn ? style.whychooseustextdark : style.whychooseustextlight}`}>Why choose Recall</p>
                <div className={style.whychooseus}>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <div className={style.icondiv}>
                            <FiBookOpen size={25} color='rgb(55, 130, 241)' />
                        </div>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Comprehensive Coverage</p>
                        <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Access the latest UK haematology guidelines and protocols from trusted sources.</p>
                    </div>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <div className={style.icondiv}>
                            <FaSearch size={25} color='rgb(55, 130, 241)' />
                        </div>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Intelligent search</p>
                        <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Get precise answers with direct citations, powered by advanced AI technology.</p>
                    </div>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <div className={style.icondiv}>
                            <FaRegClock size={25} color='rgb(55, 130, 241)' />
                        </div>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Time saving</p>
                        <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>FInd exactly what you need in seconds instead of manually searching through documents.</p>
                    </div>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <div className={style.icondiv}>
                            <IoShieldOutline size={25} color='rgb(55, 130, 241)' />
                        </div>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Evidence based</p>
                        <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Every answer is backed by verified medical guidelines and protocols.</p>
                    </div>
                </div>
                <p className={`${isOn ? style.whychooseustextdark : style.whychooseustextlight}`}>Simple Transparent Pricing</p>
                <div className={style.whychooseus}>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Free</p>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>£ 0</p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>3 free searches everyday</p>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Citaions</p>
                        </div>

                        <div className={`${style.btn}`}>
                            Get Started
                        </div>
                    </div>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Premium Monthly</p>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>£ 9.99</p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Unlimited searches</p>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Citaions</p>
                        </div>

                        <div className={`${style.btn}`}>
                            Subscribe
                        </div>
                    </div>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Premium Annual</p>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>£ 90</p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Unlimited searches</p>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Citaions</p>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Save £ 29.88 per year</p>
                        </div>

                        <div className={`${style.btn}`}>
                            Subscribe
                        </div>
                    </div>
                    <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Student</p>
                        <p style={{ margin: '0px', marginTop: '10px', fontSize: '25px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>£ 3.50</p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>3 free searches everyday</p>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Citaions</p>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <IoMdCheckmark color='rgb(29, 255, 29)' size={20} />
                            <p style={{ margin: '0px', fontSize: '15px', fontFamily: 'sans-serif' }}>Requires student verification</p>
                        </div>
                        <div className={`${style.btn}`}>
                            Verify & Subscribe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}