import style from './app.module.css';
import Logo from './images/chatbot.jpg';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function submit() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var valid = emailRegex.test(email);
        if (valid && password.length > 7) {
            setLoading(true);
            if (isLogin) {
                axios.post(`https://recallbackend.vercel.app/login`, { email, password }).then(response => {
                    toast.success('Login successful');
                    console.log(response.data.user);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    localStorage.setItem('userEndTime', JSON.stringify(response.data.user.endTime));
                    navigate('/home');
                }).catch(error => {
                    const errorMessage = error?.response?.data?.error || 'Something went wrong!';
                    toast.error(errorMessage);
                    setLoading(false);
                });
            } else {
                axios.post(`https://recallbackend.vercel.app/signup`, { email, password }).then(result => {
                    toast.success('Account created');
                    setLoading(false);
                    setLogin(true);
                }).catch(error => {
                    const errorMessage = error?.response?.data?.error || 'Something went wrong!';
                    toast.error(errorMessage);
                    setLoading(false);
                });
            }
        } else if (!valid) {
            toast.error('Invalid email');
        } else {
            toast.error('Minimum password length is 8');
        }
    }
    function textFunction() {
        if (loading && isLogin) {
            return 'Signing in';
        } else if (loading && !isLogin) {
            return 'Signing up';
        } else if (!loading && isLogin) {
            return 'Login';
        } else if (!loading && !isLogin) {
            return 'Sign up';
        }
    }
    const mode = useSelector((state) => state.mode.value);
    return (
        <div className={`${mode ? style.Appdark : style.Applight}`}>
            <Toaster />
            <div className={style.container}>
                <div className={style.formsection}>
                    <div className={style.form}>
                        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={Logo} height={50} />
                            <h2 style={{ margin: '10px 0px', fontFamily: 'sans-serif', fontSize: '21px' }}>Welcome Back!</h2>
                            <p style={{ margin: '0px', fontSize: '13px', fontFamily: 'sans-serif' }}>Please enter your details</p>
                        </span>
                        <input onChange={handleEmail} className={style.textfield} placeholder='Email' type='email' />
                        <input onChange={handlePassword} className={style.textfield} placeholder='Password' type='password' />
                        <div className={style.signupdiv}>
                            <p className={style.forgetpasswordsignup} onClick={() => { setLogin(!isLogin) }}>
                                {
                                    (isLogin) ?
                                        'Sign up' : 'Login'
                                }
                            </p>
                        </div>
                        <button className={style.btn} onClick={() => { submit() }}>
                            {
                                textFunction()
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}