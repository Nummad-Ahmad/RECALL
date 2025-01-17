import style from './app.module.css';
import Logo from './images/chatbot.jpg';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);
    const [forgotPasswordClicked, setCLicked] = useState(false);
    const navigate = useNavigate();
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function Navigation(){
        if(email == 'admin@gmail.com' && password == '1admin23'){
            navigate('/home');
        }else{
            toast.error("Invalid email or password ");
        }
    }

    return (
        <div className={style.App}>
        <Toaster />
            <div className={style.container}>

                {/* <div className={style.imgsection}>
                    <img src={Cartoon} />
                </div> */}
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
                        <button className={style.btn} onClick={()=> Navigation()}>
                            {
                                (!isLogin) ?
                                    'Sign up' : 'Login'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}