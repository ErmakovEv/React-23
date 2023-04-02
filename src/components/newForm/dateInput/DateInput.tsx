import * as React from 'react';
import { InputProps } from '../InputProps.types';
import './DateInput.css';

function DateInput(props: InputProps) {
  return (
    <div className="form-block">
      <label>
        <div>Date of start study</div>
        <input
          type="date"
          {...props.register('date', {
            required: 'error date input',
          })}
          data-testid="input-date"
        />
      </label>
      <div className="error-message">
        {props.errors?.date && <p>{props.errors?.date.message}</p>}
      </div>
    </div>
  );
}

export default DateInput;
