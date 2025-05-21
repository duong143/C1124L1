import React from 'react';

function FeatureToggle({ name, enabled, onToggle }) {
  return (
    <div style={{
      margin: '10px 0',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '300px'
    }}>
      <span>{name}: <strong>{enabled ? 'ON' : 'OFF'}</strong></span>
      <label>
        <input type="checkbox" checked={enabled} onChange={onToggle} />
        <span style={{ marginLeft: '8px' }}>Toggle</span>
      </label>
    </div>
  );
}

export default FeatureToggle;
