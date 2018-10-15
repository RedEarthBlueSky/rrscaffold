import React from 'react';
import Section from './Section';
import './styles/button.css';

function handleClick(e) {
  e.preventDefault();
  console.log('React Button Clicked');
}

const Button = () => {
  return (
    <Section>
      <button
        className='buttonStyle'
        onClick={handleClick}
        type='button'
      >
        <div className='textStyle'>
          React Click Me!
        </div>
      </button>
    </Section>
  );
};

export default Button;
