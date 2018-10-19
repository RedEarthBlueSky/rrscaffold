//  BackDrop
import React from 'react';
import './BackDrop.css';

const BackDrop = props => (
  <div className='back_drop' onClick={props.click}/>
);

export default BackDrop;
