//  accept props from List to return data and markup
//  content within ListNode are passed as props children
import React from 'react';
//  add line for continuity with React Native
import Wrapper from './Wrapper';
import ItemHeader from './ItemHeader';
import Section from './Section';
import Button from './Button';
import './styles/item.css';

const ListItem = (props) => {
  const { title, artist, image, thumbnail_image } = props.listItem;
  return (
    <Wrapper>
      <ItemHeader
        artist={artist}
        thumbnail_image={thumbnail_image}
        title={title}
      />
      <Section>
        <img
          alt={title}
          className='mainImageStyles'
          src={image}
        />
      </Section>
      <Button />
    </Wrapper>
  );
};

export default ListItem;
