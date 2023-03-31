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
            required: 'Error input file',
          })}
          data-testid="file-loader"
        />
      </label>
      <div>{props.errors?.loadFile && <p>{props.errors?.loadFile.message}</p>}</div>
    </div>
  );
}

export default AvatarInput;
