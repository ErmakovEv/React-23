import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormTypes, FormProps } from './NewForm.types';
import NameInput from './nameInput/NameInput';
import DateInput from './dateInput/DateInput';
import GenderRadioInput from './genderRadio/GenderRadioInput';
import SpecSelect from './specSelect/SpecSelect';
import StackCheckBoxGroup from './stackCheckbox/StackCheckBoxGroup';
import AvatarInput from './avatarInput/AvatarInput';
import './NewForm.css';
import ava from '../../assets/ava.png';

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
    console.log(' fileReader.onload');
    const newCard = {
      name: data.name,
      sex: data.sex,
      date: data.date,
      speciality: data.speciality,
      technology: data.techArr.length ? data.techArr : [''],
      avaSrc: ava,
    };
    if (data?.loadFile[0]) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          newCard.avaSrc = fileReader.result.toString();
        }
        cardCreateHandler(newCard);
      };
      fileReader.readAsDataURL(data?.loadFile[0]);
    } else {
      cardCreateHandler(newCard);
    }
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="new-form" className="newform">
        <NameInput register={register} errors={errors} />
        <DateInput register={register} errors={errors} />
        <GenderRadioInput register={register} errors={errors} />
        <SpecSelect register={register} errors={errors} />
        <StackCheckBoxGroup register={register} errors={errors} />
        <AvatarInput register={register} errors={errors} />
        <div>
          <input type="submit" value="Отправить" data-testid="submit-btn" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default NewForm;
