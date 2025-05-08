import React from 'react';

const TitleBar: React.FC = () => {
  const handleClose = () => {
    window.electron.close();
  };

  return (
    <div
      style={{
        height: '32px',
        background: '#2f3241',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 8px',
        WebkitAppRegion: 'drag',
        userSelect: 'none',
      }}
    >
      <div style={{ color: '#fff', fontSize: '14px' }}>Todo</div>
      <button
        onClick={handleClose}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: '#fff',
          padding: '4px 12px',
          cursor: 'pointer',
          fontSize: '14px',
          WebkitAppRegion: 'no-drag',
          WebkitUserSelect: 'none',
        }}
      >
        ×
      </button>
    </div>
  );
};

export default TitleBar; 