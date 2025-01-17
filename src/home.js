import style from './home.module.css';
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <p onClick={()=> navigate('/chat')} style={{cursor:'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Search</p>
                    <p style={{cursor:'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Pricing</p>
                    <div style={{cursor:'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FiLogIn size={20} color={`${!isOn ? 'rgb(17, 24, 38)' : 'white'}`} />
                        <p style={{ margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Sign in</p>
                    </div>
                    <div style={{cursor:'pointer'}} onClick={() => handleClick()}>
                        {
                            !isOn ?
                                <MdDarkMode color='rgb(17, 24, 38)' size={20} /> :
                                <MdLightMode color='white' size={20} />
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}