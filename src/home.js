import style from './home.module.css';
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FiBookOpen } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
export default function Home() {
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
            <div className={`${isOn ? style.navbardark : style.navbarlight}`}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaSearch size={20} color={`${!isOn ? 'rgb(17, 24, 38)' : 'white'}`} />
                    <p style={{ margin: '0px', fontSize: '20px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>RECALL</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <p onClick={() => navigate('/chat')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Search</p>
                    <p style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Pricing</p>
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={()=> navigate('/login')}>
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

            </div>
            <div className={style.hero}>
                <IoIosSearch size={90} color={'rgb(55, 130, 241)'} />
                <p className={`${isOn ? style.heroheadingdark : style.heroheadinglight}`}>Search UK Haematology Guidelines</p>
                <p className={`${isOn ? style.herotextdark : style.herotextlight}`}>Get instant, accurate answers with citations from trusted sources</p>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <div className={style.bluediv}>Start Searching</div>
                    <div className={`${isOn ? style.whitedivdark : style.whitedivlight}`}>Start Searching</div>
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
                  <p style={{margin: '0px', marginTop: '10px',fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Comprehensive Coverage</p>
                  <p style={{margin: '0px', fontSize: '15px', fontFamily: 'sans-serif'}}>Access the latest UK haematology guidelines and protocols from trusted sources.</p>
                </div>
                <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                    <div className={style.icondiv}>
                        <FaSearch size={25} color='rgb(55, 130, 241)' />
                    </div>
                    <p style={{margin: '0px', marginTop: '10px',fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Intelligent search</p>
                    <p style={{margin: '0px', fontSize: '15px', fontFamily: 'sans-serif'}}>Get precise answers with direct citations, powered by advanced AI technology.</p>
                </div>
                <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                    <div className={style.icondiv}>
                        <FaRegClock size={25} color='rgb(55, 130, 241)' />
                    </div>
                    <p style={{margin: '0px', marginTop: '10px',fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Time saving</p>
                    <p style={{margin: '0px', fontSize: '15px', fontFamily: 'sans-serif'}}>FInd exactly what you need in seconds instead of manually searching through documents.</p>
                </div>
                <div className={`${isOn ? style.advantagedark : style.advantagelight}`}>
                    <div className={style.icondiv}>
                        <IoShieldOutline size={25} color='rgb(55, 130, 241)' />
                    </div>
                    <p style={{margin: '0px', marginTop: '10px',fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>Evidence based</p>
                    <p style={{margin: '0px', fontSize: '15px', fontFamily: 'sans-serif'}}>Every answer is backed by verified medical guidelines and protocols.</p>
                </div>
            </div>

        </div>
    );
}