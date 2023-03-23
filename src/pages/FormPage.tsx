import * as React from 'react';
import './FormPage.css';

type FormPageProps = Record<string, never>;
interface FormPageState {
  name: string;
  sex: 'male' | 'female' | null;
  date: string;
  speciality: 'front' | 'back' | null;
  technology: string[];
}

class FormPage extends React.Component<FormPageProps, FormPageState> {
  private nameInput;
  private sexInput;
  private dateInput;
  private specialityInput;
  private technologyInputFirst;
  private technologyInputSecond;
  private technologyInputThird;
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      name: '',
      sex: null,
      date: '',
      speciality: null,
      technology: [],
    };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.sexInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.specialityInput = React.createRef<HTMLSelectElement>();
    this.technologyInputFirst = React.createRef<HTMLInputElement>();
    this.technologyInputSecond = React.createRef<HTMLInputElement>();
    this.technologyInputThird = React.createRef<HTMLInputElement>();
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  render() {
    return (
      <form className="card_form" onSubmit={this.handleSubmit}>
        <label>
          Ваше имя <input type="text" ref={this.nameInput} />
        </label>
        <label>
          Ваш пол
          <div>
            <input type="radio" name="sex" value="male" ref={this.sexInput} />
            <label htmlFor="sex">Мужской</label>
            <input type="radio" name="sex" value="female" ref={this.sexInput} />
            <label htmlFor="sex">Женский</label>
          </div>
        </label>
        <label>
          Дата начала изучения JavaScript <input type="date" ref={this.dateInput} />
        </label>
        <label>
          Ваша специализация JavaScript
          <div>
            <select ref={this.specialityInput}>
              <option value="value1">Frontend</option>
              <option value="value2">Backend</option>
            </select>
          </div>
        </label>
        <label>
          Какие технологии Вы уже освоили
          <div>
            <input type="checkbox" name="HTML" ref={this.technologyInputFirst} />
            <label htmlFor="HTML">HTML</label>
            <input type="checkbox" name="CSS" ref={this.technologyInputSecond} />
            <label htmlFor="CSS">CSS</label>
            <input type="checkbox" name="JS" ref={this.technologyInputThird} />
            <label htmlFor="JS">JS</label>
          </div>
        </label>

        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default FormPage;
