//  ListNode is basically the <li> to a <ul> list
import React from 'react';
//  line compliant with React Native config
import './styles/node.css';

const Item = (props) => {
  return (
    <div className='containerStyle'>
      {props.children}
    </div>
  );
};

export default Item;
