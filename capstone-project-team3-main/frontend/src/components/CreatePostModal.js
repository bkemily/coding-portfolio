import React, { useState } from "react";
import "../css/Chat.css";

export default function CreatePostModal({ onClose, onSubmit }) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-between align-items-center">
          <button onClick={onClose} className="modal-close always-visible-close">
            ✕
          </button>
          <button className="modal-post-button btn btn-primary" onClick={handleSubmit}>
            Post
          </button>
        </div>
        <label htmlFor="post-content" className="visually-hidden">Post Content</label> 
        <textarea
          id="post-content" 
          className="modal-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, 1000))}
          placeholder="What’s on your mind, neighbor?"
        />
        <div className="char-counter">{content.length} / 1000</div>
      </div>
    </div>
  );
}
