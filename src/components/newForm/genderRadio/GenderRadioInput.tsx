import * as React from 'react';
import { InputProps } from '../InputProps.types';

function GenderRadioInput(props: InputProps) {
  return (
    <div>
      <label>
        You sex
        <div>
          <div>Мужской</div>
          <input
            type="radio"
            {...props.register('sex', {
              required: 'ERR@!@#',
            })}
            value="male"
          />
        </div>
        <div>
          <div>Женский</div>
          <input
            type="radio"
            {...props.register('sex', {
              required: 'ERR@!@',
            })}
            value="female"
          />
        </div>
      </label>
      <div>{props.errors?.name && <p>{props.errors?.name.message}</p>}</div>
    </div>
  );
}

export default GenderRadioInput;
