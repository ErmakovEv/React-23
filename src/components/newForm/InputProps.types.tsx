import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormTypes } from './NewForm.types';

export type InputProps = {
  register: UseFormRegister<FormTypes>;
  errors: FieldErrors<FormTypes>;
};
