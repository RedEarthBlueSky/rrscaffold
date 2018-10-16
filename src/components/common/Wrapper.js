//  Styling wrapper for ListItem Content
//  could be called the List Item Content Wrapper
import React from 'react';
//  line compliant with React Native config
import '../styles/node.css';

const Wrapper = (props) => {
  return (
    <div className='containerStyle'>
      {props.children}
    </div>
  );
};

export { Wrapper };
