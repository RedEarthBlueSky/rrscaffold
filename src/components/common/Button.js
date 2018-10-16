import React from 'react';
import '../styles/button.css';

const Button = (props) => {
  const { message, target, type, url } = props;
  return (
        <button
          className='buttonStyle'
          type={type}
        >
          <a
            href={url}
            target={target}
            style={{ textDecoration: 'none' }}
          >
            <div className='textStyle'>
              {message}
            </div>
          </a>
        </button>
  );
};

export { Button };
