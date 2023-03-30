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
            required: 'Date',
          })}
        />
      </label>
      <div>{props.errors?.name && <p>{props.errors?.name.message}</p>}</div>
    </div>
  );
}

export default DateInput;
