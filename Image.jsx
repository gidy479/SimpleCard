import React from 'react';

const Image = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Card" className="w-64 rounded-l-md mb-4" />;
};

export default Image;
