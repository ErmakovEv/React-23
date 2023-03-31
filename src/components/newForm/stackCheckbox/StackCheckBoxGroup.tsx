import * as React from 'react';
import { InputProps } from '../InputProps.types';

function StackCheckBoxGroup(props: InputProps) {
  const stack = ['HTML', 'CSS', 'JS'];
  return (
    <div>
      <label>
        Ваш стек
        <div>
          {stack.map((item, index) => (
            <div key={index}>
              <label>
                <div>{item}</div>
                <input
                  className="inline"
                  type="checkbox"
                  {...props.register('techArr', {
                    // required: 'error checkbox',
                  })}
                  value={item}
                  // data-testid="input-checkbox"
                />
              </label>
            </div>
          ))}
          <div>{props.errors?.techArr && <p>{props.errors.techArr.message}</p>}</div>
        </div>
      </label>
    </div>
  );
}

export default StackCheckBoxGroup;
