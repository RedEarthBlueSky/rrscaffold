import React from 'react';
//  add line for continuity with React Native
import ListNode from './ListNode';

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <ListNode>
      <p>{title}</p>
    </ListNode>
  );
};

export default ListItem;
