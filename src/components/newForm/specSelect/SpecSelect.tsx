import * as React from 'react';
import { InputProps } from '../InputProps.types';
import './SpecSelect.css';

function SpecSelect(props: InputProps) {
  return (
    <div className="form-block">
      <label>
        Specialization in JavaScript
        <div>
          <select
            {...props.register('speciality', { required: 'error spec input' })}
            defaultValue="default"
            data-testid="select"
          >
            <option value="">Who are you in life</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          <div className="error-message">
            {props.errors?.speciality && <p>{props.errors.speciality.message}</p>}
          </div>
        </div>
      </label>
    </div>
  );
}

export default SpecSelect;
