import React from 'react';
import './GenerationHistory.css';

export default function GenerationHistory({ generations }) {
  if (!generations || generations.length === 0) return null;

  return (
    <div className="generation-history">
      <h3>Recent Creations</h3>
      <ul>
        {generations.map((g, idx) => (
          <li key={idx} className="generation-record">
            <span className="gen-time">{new Date(g.timestamp).toLocaleString()}</span>
            <span className="gen-intent">[{g.intent}]</span>
            <span className="gen-prompt">{g.prompt}</span>
            {g.images && g.images.length > 0 && (
              <span className="gen-count">({g.images.length} images)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
