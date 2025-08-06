import React from 'react';

const Footer = () => {
  return (
    <footer style={{
  position: 'relative',
  bottom: 0,
  width: '100%',
  backgroundColor: '#222',
  color: '#fff',
  textAlign: 'center',
  padding: '15px 0',
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 -2px 5px rgba(0,0,0,0.3)'
}}>
  <div>Made by Vivek Sharma</div>
  <div style={{ fontSize: '12px', fontWeight: '400', marginTop: '5px' }}>
    Helping students achieve their dream placements
  </div>
</footer>
  );
};

export default Footer;
