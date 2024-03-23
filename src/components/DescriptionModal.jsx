import React from "react";

const DescriptionModal = ( {description, onClose} ) => {
  return ( 
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}> X </button>
        <p> {description} </p>
      </div>
    </div>
   );
}
 
export default DescriptionModal; 