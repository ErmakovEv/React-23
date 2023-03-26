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
          <section>
            <label>
              Ваше имя <input type="text" ref={this.props.nameInput} />
              <p>{this.props.errName ? 'неправильное имя (Ivan Petrov)' : ''}</p>
            </label>
          </section>
          <section>
            <label>
              Ваш пол
              <div>
                <label className="checkbox" htmlFor="sex">
                  <div>Женский</div>
                  <input
                    className="inline"
                    type="radio"
                    name="sex"
                    value="male"
                    ref={this.props.maleInput}
                  />
                </label>
                <label className="checkbox" htmlFor="sex">
                  <div>Женский</div>

                  <input
                    className="inline"
                    type="radio"
                    name="sex"
                    value="female"
                    ref={this.props.femaleInput}
                  />
                </label>
              </div>
              <p>{this.props.errSex ? 'не указан пол' : ''}</p>
            </label>
          </section>
          <section>
            <label>
              Дата начала изучения JS <input type="date" ref={this.props.dateInput} />
            </label>
          </section>
          <section>
            <label>
              Ваша специализация JS
              <div>
                <select ref={this.props.specialityInput}>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
              </div>
            </label>
          </section>
          <section>
            <label>
              Ваш стек технологий
              <div>
                {this.props.techArr.map((item) => (
                  <div key={item.content}>
                    <label className="checkbox" htmlFor={item.content}>
                      <div>{item.content}</div>
                      <input
                        className="inline"
                        type="checkbox"
                        name={item.content}
                        ref={item.ref}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </label>
          </section>

          <div>
            <input type="file" ref={this.props.fileInput} />
            <p>{this.props.errFile ? 'файл не загружен' : ''}</p>
          </div>
          <input type="submit" value="Отправить" />
        </form>
        <p className={this.props.classMsg}>Карточка создана</p>
      </div>
    );
  }
}

export default Form;
