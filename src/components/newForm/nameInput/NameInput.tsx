import * as React from 'react';
import { InputProps } from '../InputProps.types';
import './NameInput.css';

function NameInput(props: InputProps) {
  return (
    <div className="form-block">
      <label className="input-name">
        <div>You name</div>
        <input
          className="input"
          type="text"
          {...props.register('name', {
            required: 'Name error!!!',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов',
            },
          })}
          data-testid="input-name"
        />
      </label>
      <div className="error-message">
        {props.errors?.name && <p>{props.errors?.name.message}</p>}
      </div>
    </div>
  );
}

export default NameInput;
