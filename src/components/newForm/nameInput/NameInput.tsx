import * as React from 'react';
import { InputProps } from '../InputProps.types';

function NameInput(props: InputProps) {
  return (
    <div>
      <label>
        You name
        <input
          type="text"
          {...props.register('name', {
            required: 'Name!!!',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов',
            },
          })}
        />
      </label>
      <div>{props.errors?.name && <p>{props.errors?.name.message}</p>}</div>
    </div>
  );
}

export default NameInput;
