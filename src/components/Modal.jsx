import React from 'react';

const Modal = ({ imageUrl, closeModal }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  return (
    <div style={modalStyle}>
      <img src={imageUrl} alt="Modal" style={{ maxWidth: '100%' }} />
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default Modal;