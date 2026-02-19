import React, { useState } from 'react'
import './InputBar.css'

export default function InputBar({ onSend, onUpload, disabled, mode, setMode }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSend(input)
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }


  return (
    <div className="input-bar">
      <div className="input-controls-row">
        <div className="mode-bubbles">
          <button
            className={`mode-btn${mode === 'chat' ? ' active' : ''}`}
            onClick={() => setMode('chat')}
            disabled={disabled}
          >💬 Chat</button>
          <button
            className={`mode-btn${mode === 'image' ? ' active' : ''}`}
            onClick={() => setMode('image')}
            disabled={disabled}
          >🎨 Create Image</button>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder={mode === 'image' ? 'Describe the image you want to create...' : 'Type your message...'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={disabled}
            className="input-field"
            aria-label="Message input"
          />
          <button
            onClick={handleSubmit}
            disabled={disabled || !input.trim()}
            className="send-btn"
            title="Send message"
          >
            {disabled ? '⏳' : '→'}
          </button>
          {onUpload && mode === 'image' && (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onUpload(e.target.files[0])}
              disabled={disabled}
              className="upload-input"
              aria-label="Upload image"
            />
          )}
        </div>
      </div>
    </div>
  );
}
