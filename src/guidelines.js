import { useDispatch, useSelector } from 'react-redux';
import style from './guidelines.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toggleMode } from './redux/slices';
import { FiLogIn } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from 'react-icons/io';
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
export default function Guidelines() {
    const mode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const data = [
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
        {
            'title': 'Transfusion Handbook',
            'Date Uploaded': '1 Jan 2025',
            'Status': "Active",
            'Link': "Link"
        },
    ]
    function handleClick() {
        dispatch(toggleMode());
        localStorage.setItem('isOn', JSON.stringify(mode));
    }
    return (
        <div className={`${mode ? style.guidelinesdark : style.guidelineslight}`}>
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
                        <p onClick={() => navigate('/chat')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Search</p>
                        <p onClick={() => navigate('/feedback')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Feedback</p>
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={() => navigate('/')}>
                            <FiLogIn size={20} color={`${!mode ? 'rgb(17, 24, 38)' : 'white'}`} />
                            <p style={{ margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Sign in</p>
                        </div>
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
                        <p onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Home</p>
                        <p onClick={() => navigate('/feedback')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Feedback</p>
                        <p style={{ cursor: 'pointer' }} onClick={() => { navigate('/chat'); setClicked(false) }}>Search</p>
                        <p style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); setClicked(false) }}>Sign in</p>
                        <div style={{ cursor: 'pointer' }} onClick={() => { handleClick(); setClicked(false) }}>
                            {
                                !mode ?
                                    <MdDarkMode color='rgb(17, 24, 38)' size={20} /> :
                                    <MdLightMode color='white' size={20} />
                            }
                        </div>
                    </div>
                }
                <div className={style.contentcontainer}>
                    <div className={`${mode ? style.tabledark : style.tablelight}`}>
                        <div className={style.tablecontainer}>
                            <div className={`${mode ? style.tableheaderdark : style.tableheaderlight}`}>
                                <div className={style.title}>Title</div>
                                <div className={style.date}>Date updated</div>
                                <div className={style.status}>Status</div>
                                <div className={style.link}>Link</div>
                                <div className={style.option}>Action</div>
                            </div>
                            <div className={style.mobilecontent}>
                                {
                                    data.map(item => {
                                        return (
                                            <div className={`${mode ? style.mobiletablecontentdark : style.mobiletablecontentlight}`}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                    <p style={{ margin: '0px', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '18px' }}>{item.title}</p>
                                                    <p style={{ margin: '0px', fontFamily: 'sans-serif' }}>{item['Date Uploaded']}</p>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                    <p style={{ margin: '0px', fontFamily: 'sans-serif' }}>{item.Status}</p>
                                                    <div className={style.option}>
                                                        <MdOutlineDelete size={20} color={`${mode ? 'white' : 'black'}`} />
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div className={`${mode ? style.tablecontentdark : style.tablecontentlight}`}>

                                            <div className={style.title}>{item.title}</div>
                                            <div className={style.date}>{item['Date Uploaded']}</div>
                                            <div className={style.status}>{item.Status}</div>
                                            <div className={style.link}>{item.Link}</div>
                                            <div className={style.option}>
                                                <MdOutlineDelete size={20} color={`${mode ? 'white' : 'black'}`} />
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className={`${mode ? style.buttonsdivdark : style.buttonsdivlight}`}>
                            <p>Total {data.length} guidelines</p>
                            <button className={`${mode ? style.btndark : style.btnlight}`}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
