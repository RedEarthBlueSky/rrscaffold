import React from 'react';
//  add line for continuity with React Native

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default ListItem;
