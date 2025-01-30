import React from 'react';
import style from './modal.module.css';

const Modal = ({ showModal, handleClose, handleFileChange, handleUpload, uploading, file }) => {
    return (
        showModal && (
            <div className={style.modalOverlay}>
                <div className={style.modalContent}>
                    <div className={style.header}>
                        <h2>Upload PDF</h2>
                        <button onClick={handleClose} className={style.closeButton}>X</button>
                    </div>
                    <input type="file" accept="application/pdf" onChange={handleFileChange} />
                    <button 
                        onClick={handleUpload} 
                        disabled={uploading || !file} 
                        className={style.uploadButton}
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </div>
        )
    );
};

export default Modal;
