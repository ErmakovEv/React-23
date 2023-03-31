import * as React from 'react';
import { InputProps } from '../InputProps.types';

function DateInput(props: InputProps) {
  return (
    <div>
      <label>
        Date of start study
        <input
          type="date"
          {...props.register('date', {
            required: 'error date input',
          })}
          data-testid="input-date"
        />
      </label>
      <div>{props.errors?.date && <p>{props.errors?.date.message}</p>}</div>
    </div>
  );
}

export default DateInput;
