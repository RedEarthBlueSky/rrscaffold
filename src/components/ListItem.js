import React from 'react';
//  add line for continuity with React Native
import ListNode from './ListNode';
import ListItemSection from './ListItemSection';

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <ListNode>
      <p>{title}</p>
      <ListItemSection />
      <ListItemSection />
      <ListItemSection />
    </ListNode>
  );
};

export default ListItem;
