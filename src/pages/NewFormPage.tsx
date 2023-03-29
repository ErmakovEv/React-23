import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
  firstName: string;
  loadFile: FileList;
};

type Card = {
  src: string | ArrayBuffer | null;
};

function NewFormPage() {
  const [cards, setCards] = React.useState<Card[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const fileReader = new FileReader();
    let newSrc: string | ArrayBuffer | null = '';
    fileReader.onload = () => {
      newSrc = fileReader.result;
      setCards([...cards, { src: newSrc }]);
    };
    fileReader.readAsDataURL(data.loadFile[0]);
    reset();
  };

  return (
    <div className="container new_from_page_container">
      <h1>React-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name
          <input
            type="text"
            {...register('firstName', {
              required: 'ERR@!@#',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            })}
          />
        </label>
        <div>{errors?.firstName && <p>{errors?.firstName.message}</p>}</div>
        <input type="submit" value="Отправить" />
        <label>
          Load file
          <input
            type="file"
            {...register('loadFile', {
              required: 'ERR@!@#',
            })}
          />
        </label>
        <div>{errors?.firstName && <p>{errors?.firstName.message}</p>}</div>
        <input type="submit" value="Отправить" />
      </form>
      <div>
        {cards.length
          ? cards.map((item, index) => {
              return (
                <img src={item.src?.toString()} key={index} alt="card" style={{ width: '100px' }} />
              );
            })
          : 'Карточек нет'}
      </div>
    </div>
  );
}

export default NewFormPage;
