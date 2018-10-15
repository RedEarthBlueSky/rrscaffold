import React from 'react';
import Section from './Section';
import './styles/button.css';

const Button = (props) => {
  const { message, target, type, url } = props;
  return (
    <Section>
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
    </Section>
  );
};

export default Button;
