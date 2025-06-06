import React from 'react';
import '../styles/Gallary.css';

const Gallary = () => {
  return (
    <div className="gallary">
      <h2>GALLERY</h2>
      <iframe
        src="https://drive.google.com/embeddedfolderview?id=1A3pDvyyo4AVPChpKv_dX2lxCKax7bSpv#grid" 
        style={{ width: '100%', height: '800px', border: 'none', }}
        title="Google Drive Gallery"
      ></iframe>
    </div>
  );
};

export default Gallary;
