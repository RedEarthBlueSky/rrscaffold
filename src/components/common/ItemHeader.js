import React from 'react';
import { Section } from './index';
import '../styles/itemHeader.css';

const ItemHeader = (props) => {
  const { title, artist, thumbnail_image } = props;
  return (
    <Section>
      <div className='thumbNailContainer'>
        <img
          alt={artist}
          className='thumbNailStyle'
          src={thumbnail_image}
        />
      </div>
      <div className='headerContentStyle'>
        <p className='headerText'>{artist}</p>
        <p>{title}</p>
      </div>
    </Section>
  );
};

export { ItemHeader };
