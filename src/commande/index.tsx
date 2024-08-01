import React from 'react';

const FullScreenFormEmbed: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div
        data-fillout-id="jvLgW1bc8Qus"
        data-fillout-embed-type="fullscreen"
        style={{ width: '100%', height: '100%' }}
        data-fillout-inherit-parameters
      ></div>
      <script src="https://server.fillout.com/embed/v1/" />
    </div>
  );
};

export default FullScreenFormEmbed;
