import * as React from 'react';
import { InputProps } from '../InputProps.types';
import './StackCheckBoxGroup.css';

function StackCheckBoxGroup(props: InputProps) {
  const stack = ['HTML', 'CSS', 'JS'];
  return (
    <div className="form-block">
      <label>
        Stack or queue
        <div>
          {stack.map((item, index) => (
            <div
              key={index}
              style={{ marginTop: '5px', display: 'flex', justifyContent: 'space-between' }}
            >
              <div>{item}</div>
              <label className="label-checkbox">
                <input
                  type="checkbox"
                  {...props.register('techArr', {})}
                  value={item}
                  className="input-checkbox"
                />
                <span className="span-checkbox"></span>
              </label>
            </div>
          ))}
          <div className="error-message">
            {props.errors?.techArr && <p>{props.errors.techArr.message}</p>}
          </div>
        </div>
      </label>
    </div>
  );
}

export default StackCheckBoxGroup;
