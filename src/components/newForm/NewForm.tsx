import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormTypes, FormProps } from './NewForm.types';
import NameInput from './nameInput/NameInput';
import DateInput from './dateInput/DateInput';
import GenderRadioInput from './genderRadio/GenderRadioInput';
import SpecSelect from './specSelect/SpecSelect';
import StackCheckBoxGroup from './stackCheckbox/StackCheckBoxGroup';
import AvatarInput from './avatarInput/AvatarInput';

const NewForm: React.FC<FormProps> = ({ cardCreateHandler }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormTypes>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      cardCreateHandler({
        name: data.name,
        sex: data.sex,
        date: data.date,
        speciality: data.speciality,
        technology: data.techArr,
        avaSrc: fileReader.result?.toString(),
      });
    };
    fileReader.readAsDataURL(data.loadFile[0]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NameInput register={register} errors={errors} />
        <DateInput register={register} errors={errors} />
        <GenderRadioInput register={register} errors={errors} />
        <SpecSelect register={register} errors={errors} />
        <StackCheckBoxGroup register={register} errors={errors} />
        <AvatarInput register={register} errors={errors} />
        <div>
          <input type="submit" value="Отправить" />
        </div>
      </form>
    </div>
  );
};

export default NewForm;
