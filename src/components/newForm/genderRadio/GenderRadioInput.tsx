import * as React from 'react';
import { InputProps } from '../InputProps.types';
import './GenderRadioInput.css';

function GenderRadioInput(props: InputProps) {
  return (
    <div className="form-block">
      <label>
        You sex
        <label className="radio-label">
          Male
          <input
            type="radio"
            {...props.register('sex', {
              required: 'error radio input',
            })}
            value="male"
            data-testid="input-male"
            className="radio-input"
          />
          <span className="radio-span"></span>
        </label>
        <label className="radio-label">
          Female
          <input
            type="radio"
            {...props.register('sex', {
              required: 'error radio input',
            })}
            value="female"
            data-testid="input-female"
            className="radio-input"
          />
          <span className="radio-span"></span>
        </label>
      </label>
      <div className="error-message">{props.errors?.sex && <p>{props.errors?.sex.message}</p>}</div>
    </div>
  );
}

export default GenderRadioInput;
