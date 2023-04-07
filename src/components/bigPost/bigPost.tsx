import * as React from 'react';
import { IPost } from '../post/Post.types';

const BigCard: React.FC<IPost> = ({ death, gender, hair, height, name, race, realm, spouse }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{race}</h2>
      <h2>{gender}</h2>
      <h2>{spouse}</h2>
      <h2>{height}</h2>
      <h2>{hair}</h2>
      <h2>{realm}</h2>
      <h2>{death}</h2>
    </div>
  );
};

export default BigCard;
