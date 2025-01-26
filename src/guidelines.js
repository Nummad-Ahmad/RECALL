import { useDispatch, useSelector } from 'react-redux';
import style from './guidelines.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toggleMode } from './redux/slices';
import { FiLogIn } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from 'react-icons/io';
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
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
                        <div onClick={() => navigate('/home')} style={{ display: 'flex', width: '100%', gap: '30px', paddingLeft: '40px', justifyContent: 'center' }}>
                            <IoHomeOutline size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Home</p>
                        </div>
                        <div onClick={() => navigate('/chat')} style={{ display: 'flex', width: '100%', gap: '30px', paddingLeft: '40px', justifyContent: 'center' }}>
                            <IoIosSearch size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Search</p>
                        </div>
                        <div onClick={() => navigate('/feedback')} style={{ display: 'flex', width: '100%', gap: '30px', paddingLeft: '40px', justifyContent: 'center' }}>
                            <FaRegCommentAlt size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Feedback</p>
                        </div>
                        <div onClick={() => navigate('/guidelines')} style={{ display: 'flex', width: '100%', gap: '30px', paddingLeft: '40px', justifyContent: 'center' }}>
                            <CiCircleInfo size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Guidelines</p>
                        </div>
                        <div style={{ cursor: 'pointer', display: 'flex', width: '100%', gap: '30px', paddingLeft: '40px', justifyContent: 'center' }} onClick={() => { handleClick(); setClicked(false) }}>
                            {
                                !mode ?
                                    <MdDarkMode color='rgb(17, 24, 38)' size={30} /> :
                                    <MdLightMode color='white' size={30} />
                            }
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Toggle mode</p>
                        </div>
                        <div onClick={() => setClicked(!clicked)} style={{ display: 'flex', width: '100%', gap: '30px', paddingLeft: '40px', justifyContent: 'center' }}>
                            <IoMdClose size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Close</p>
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
                            <p>Total <span style={{fontWeight: 'bold'}}>{data.length}</span> guidelines</p>
                            <button className={`${mode ? style.btndark : style.btnlight}`}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
