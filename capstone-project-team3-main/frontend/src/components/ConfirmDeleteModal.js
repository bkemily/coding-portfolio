// ConfirmDeleteModal.js
import React from 'react';

function ConfirmDeleteModal({ onConfirm, onCancel, message }) {
  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal">
        <h3>{message}</h3>
        <div className="modal-actions">
          <button className="btn btn-danger" onClick={onConfirm}>Yes</button>
          <button className="btn btn-secondary" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
