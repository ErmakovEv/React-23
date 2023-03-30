import * as React from 'react';
import { InputProps } from '../InputProps.types';

function AvatarInput(props: InputProps) {
  return (
    <div>
      <label>
        Load file
        <input
          type="file"
          {...props.register('loadFile', {
            required: 'ERR@!@#',
          })}
        />
      </label>
      <div>{props.errors?.name && <p>{props.errors?.name.message}</p>}</div>
    </div>
  );
}

export default AvatarInput;
