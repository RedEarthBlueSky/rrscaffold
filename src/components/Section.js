import React from 'react';
//  additional code for react native
import './styles/section.css';

const Section = (props) => {
  return (
    <div className='sectionWrapper'>
      {props.children}
    </div>
  );
};

export default Section;
