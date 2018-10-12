//  accept props from List to return data and markup
//  content within ListNode are passed as props children
import React from 'react';
//  add line for continuity with React Native
import Wrapper from './Wrapper';
import Section from './Section';

const ListItem = (props) => {
  const { title } = props.listItem;
  return (
    <Wrapper>
      <Section>
        <p>{title}</p>
      </Section>
    </Wrapper>
  );
};

export default ListItem;
