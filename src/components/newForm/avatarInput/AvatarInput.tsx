import * as React from 'react';
import { InputProps } from '../InputProps.types';
import './AvatarInput.css';

function AvatarInput(props: InputProps) {
  return (
    <div className="form-block">
      <label htmlFor="file-input" className="custom-file-upload">
        Load file
      </label>
      <input
        type="file"
        {...props.register('loadFile')}
        data-testid="file-loader"
        id="file-input"
      />
      <div className="error-message">
        {props.errors?.loadFile && <p>{props.errors?.loadFile.message}</p>}
      </div>
    </div>
  );
}

export default AvatarInput;
