import * as React from 'react';
import { InputProps } from '../InputProps.types';

function SpecSelect(props: InputProps) {
  return (
    <div>
      <label>
        Ваша специализация JS
        <div>
          <select {...props.register('speciality', { required: 'asaa' })} defaultValue="default">
            <option value="">Выбери специализацию</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          <div>{props.errors?.speciality && <p>{props.errors.speciality.message}</p>}</div>
        </div>
      </label>
    </div>
  );
}

export default SpecSelect;
