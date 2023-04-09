import * as React from 'react';
import { IPost } from '../post/Post.types';

const BigCard: React.FC<IPost> = ({ death, gender, hair, height, name, race, realm, spouse }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{race}</h4>
      <h4>{gender}</h4>
      <h4>{spouse}</h4>
      <h4>{height}</h4>
      <h4>{hair}</h4>
      <h4>{realm}</h4>
      <h4>{death}</h4>
    </div>
  );
};

export default BigCard;
