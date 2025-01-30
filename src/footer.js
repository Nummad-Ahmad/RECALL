import style from './footer.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from "react-icons/fa";

export default function Footer() {

    const mode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className={`${mode ? style.footerdark : style.footerlight}`}>
                <div className={style.hiddenFooter}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <FaSearch size={20} color={`${!mode ? 'rgb(17, 24, 38)' : 'white'}`} />
                        <p style={{ fontSize: '16px' }}> Copy Rights Reserved | ©{currentYear}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <p onClick={() => navigate('/home')} className={style.link}>
                            Home
                        </p>
                        <p onClick={() => navigate('/feedback')} className={style.link}>
                            Feedback
                        </p>
                        <p onClick={() => navigate('/guidelines')} className={style.link}>
                            Guide lines
                        </p>
                        <p onClick={() => navigate('/')} className={style.link}>
                            Privacy policy
                        </p>
                    </div>
                </div>
                <div className={style.hiddenDiv2}>
                    {/* <FaSearch size={50} color={`${!mode ? 'rgb(17, 24, 38)' : 'white'}`} /> */}
                    <p style={{ fontFamily: 'sans-serif', fontSize: '25px', fontWeight: 'bold', color: `${!mode ? 'rgb(17, 24, 38)' : 'white'}` }}>Recall</p>
                    <p style={{ fontSize: '16px' }}> Copy Rights Reserved | ©{currentYear}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p onClick={() => navigate('/home')} className={style.link}>
                            Home
                        </p>
                        <p onClick={() => navigate('/feedback')} className={style.link}>
                            Feedback
                        </p>
                        <p onClick={() => navigate('/guidelines')} className={style.link}>
                            Guide lines
                        </p>
                        <p onClick={() => navigate('/')} className={style.link}>
                            Privacy policy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
