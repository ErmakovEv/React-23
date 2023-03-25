import * as React from 'react';
import { Component } from 'react';

interface FormProps {
  handleSubmit: () => void;
  nameInput: React.Ref<HTMLInputElement>;
  maleInput: React.Ref<HTMLInputElement>;
  femaleInput: React.Ref<HTMLInputElement>;
  dateInput: React.Ref<HTMLInputElement>;
  specialityInput: React.Ref<HTMLSelectElement>;
  fileInput: React.Ref<HTMLInputElement>;
  techArr: {
    ref: React.RefObject<HTMLInputElement>;
    content: string;
  }[];
  errName: boolean;
  errSex: boolean;
  errFile: boolean;
  classMsg: string;
}

type FormState = Record<string, never>;

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
  }

  sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleSubmit();
  };

  render() {
    return (
      <div>
        <form className="card_form" onSubmit={this.sendForm}>
          <label>
            Ваше имя <input type="text" ref={this.props.nameInput} />
            <p>{this.props.errName ? 'неправильное имя' : ''}</p>
          </label>
          <label>
            Ваш пол
            <div>
              <input type="radio" name="sex" value="male" ref={this.props.maleInput} />
              <label htmlFor="sex">Мужской</label>
              <input type="radio" name="sex" value="female" ref={this.props.femaleInput} />
              <label htmlFor="sex">Женский</label>
            </div>
            <p>{this.props.errSex ? 'не указан пол' : ''}</p>
          </label>
          <label>
            Дата начала изучения JavaScript <input type="date" ref={this.props.dateInput} />
          </label>
          <label>
            Ваша специализация JavaScript
            <div>
              <select ref={this.props.specialityInput}>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </div>
          </label>
          <label>
            Какие технологии Вы уже освоили
            <div>
              {this.props.techArr.map((item) => (
                <div key={item.content}>
                  <input type="checkbox" name={item.content} ref={item.ref} />
                  <label htmlFor={item.content}>{item.content}</label>
                </div>
              ))}
            </div>
          </label>
          <div>
            <input type="file" ref={this.props.fileInput} />
            <p>{this.props.errFile ? 'файл не загружен' : ''}</p>
          </div>
          <input type="submit" value="Отправить" />
        </form>
        <p className={this.props.classMsg}>Форма создана</p>
      </div>
    );
  }
}

export default Form;
