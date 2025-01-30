import { useDispatch, useSelector } from 'react-redux';
import style from './guidelines.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toggleMode } from './redux/slices';
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
import Footer from './footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import tempData from './guidelinesdata';
export default function Guidelines() {
    const currentTime = new Date();
    const [endTime, setEndTime] = useState('');
    const mode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [guidelinesData, setGuidelinesData] = useState([]);
    var data = [];
    useEffect(() => {
        axios.get('https://recallbackend.vercel.app/pdf').then(response => { console.log('response', response.data.data); setGuidelinesData(response.data.data) }).catch(e => { console.log(e); toast.error("Error fetching data") });
    }, []);
    data = guidelinesData.length > 0 ? guidelinesData : [];
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            toast.error('Please select a PDF file');
            console.log('error');
            return;
        }
        const formData = new FormData();
        formData.append('pdf', file);
        formData.append('filename', file.name);
        setUploading(true);

        try {
            const response = await axios.post('https://recallbackend.vercel.app/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setPdfUrl(response.data.pdfUrl);
            toast.success('File uploaded successfully!');
        } catch (error) {
            console.error('Upload failed:', error);
            toast.error('Upload failed');
        }

        setUploading(false);
    };

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
    return (
        <div className={`${mode ? style.guidelinesdark : style.guidelineslight}`}>
            <div style={{ display: 'flex', alignSelf: 'center', justifySelf: 'center', flexDirection: 'column', width: '100%', maxWidth: '1400px' }}>
                <div style={{ overflow: clicked ? 'hidden' : 'visible' }} className={`${mode ? style.navbardark : style.navbarlight}`}>
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
                        <p onClick={() => navigate('/users')} style={{ cursor: 'pointer', margin: '0px', fontSize: '18px', fontFamily: 'sans-serif' }}>Users</p>
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
                        <div onClick={() => navigate('/users')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <FaRegCommentAlt size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Users</p>
                        </div>
                        <div onClick={() => navigate('/home')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                            <IoHomeOutline size={30} color={`${mode ? 'white' : 'black'}`} />
                            <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Home</p>
                        </div>
                        {
                            checkDate(currentTime, endTime) &&
                            <div onClick={() => navigate('/chat')} style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                                <IoIosSearch size={30} color={`${mode ? 'white' : 'black'}`} />
                                <p style={{ cursor: 'pointer', margin: '0px', fontSize: '30px', fontFamily: 'sans-serif' }}>Search</p>
                            </div>
                        }
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
                                                    <a href={item.url} target='self'><p style={{ margin: '0px', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '18px' }}>{item.name}</p></a>
                                                    <p style={{ margin: '0px', fontFamily: 'sans-serif' }}>{item.date}</p>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                    <p style={{ margin: '0px', fontFamily: 'sans-serif' }}>{item.status}</p>
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
                                            <div className={style.title}>{item.name}</div>
                                            <div className={style.date}>{item.date}</div>
                                            <div className={style.status}>{item.status}</div>
                                            <a target='self' style={{ textDecoration: 'none' }} className={style.link} href={item.url}>{item.url.substring(0, 26)} ...</a>
                                            <div className={style.option}>
                                                <MdOutlineDelete size={20} color={`${mode ? 'white' : 'black'}`} />
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className={`${mode ? style.buttonsdivdark : style.buttonsdivlight}`}>
                            {<span className={style.number}>
                                <p>Total <span style={{ fontWeight: 'bold' }}>{data.length}</span> guidelines</p>
                            </span>}
                            <input type="file" accept="application/pdf" onChange={handleFileChange} />
                            {
                                file != null &&
                                <button onClick={handleUpload} disabled={uploading} className={`${mode ? style.btndark : style.btnlight}`}>
                                    {uploading ? 'Uploading...' : 'Add'}</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}
