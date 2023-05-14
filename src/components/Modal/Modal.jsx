import React from 'react'

import { Close } from '../../assets/Icon/icons';
import './styles.css'

const Modal = ({handleClose}) => {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
            <button className='close-button' onClick={handleClose}><Close /></button>
            <h2>Success</h2>
            <hr />
          <p>Successful purchase !!!</p>
        </div>
      </div>
    );
  }; 
 
 export default Modal 