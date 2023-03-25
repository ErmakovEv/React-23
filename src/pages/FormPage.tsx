import * as React from 'react';
import './FormPage.css';
import Form from '../components/form/Form';
import Card from '../components/card/Card';

interface ICard {
  name: string;
  sex: string | null;
  date: string;
  speciality: string | null;
  technology: string[];
  avaSrc: string | undefined;
}

type FormPageProps = Record<string, never>;

interface FormPageState {
  cards: ICard[];
  errFlag: boolean;
  classMsg: 'message' | 'message active';
}

class FormPage extends React.Component<FormPageProps, FormPageState> {
  private nameInput;
  private maleInput;
  private femaleInput;
  private dateInput;
  private specialityInput;
  private techArr;
  private fileInput;
  private errName = false;
  private errSex = false;
  private errFile = false;
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      cards: [],
      errFlag: false,
      classMsg: 'message',
    };
    this.nameInput = React.createRef<HTMLInputElement>();
    this.maleInput = React.createRef<HTMLInputElement>();
    this.femaleInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.specialityInput = React.createRef<HTMLSelectElement>();
    this.techArr = [
      { ref: React.createRef<HTMLInputElement>(), content: 'HTML' },
      { ref: React.createRef<HTMLInputElement>(), content: 'CSS' },
      { ref: React.createRef<HTMLInputElement>(), content: 'JS' },
    ];
    this.fileInput = React.createRef<HTMLInputElement>();
  }

  cardValidation = (
    name: string,
    male: string | null,
    female: string | null,
    file: File | null
  ) => {
    male || female ? (this.errSex = false) : (this.errSex = true);
    file ? (this.errFile = false) : (this.errFile = true);
    name
      ? /^[a-zA-Z ]+$/.test(name)
        ? (this.errName = false)
        : (this.errName = true)
      : (this.errName = true);
  };

  clearForm = () => {
    this.nameInput.current?.value ? (this.nameInput.current.value = '') : '';
    this.maleInput.current?.checked ? (this.maleInput.current.checked = false) : '';
    this.femaleInput.current?.checked ? (this.femaleInput.current.checked = false) : '';
    this.dateInput.current?.value ? (this.dateInput.current.value = '') : '';
    this.specialityInput.current ? (this.specialityInput.current.value = 'Frontend') : '';
    this.techArr.map((item) => {
      if (item.ref.current?.checked) item.ref.current.checked = false;
    });
  };

  showMessage = () => {
    this.setState({ classMsg: 'message active' });
    setTimeout(() => {
      this.setState({ classMsg: 'message' });
    }, 3000);
  };

  handleSubmit = () => {
    const newName = this.nameInput.current?.value ? this.nameInput.current?.value : '';
    const newMale = this.maleInput.current?.checked ? this.maleInput.current?.value : null;
    const newFemale = this.femaleInput.current?.checked ? this.femaleInput.current?.value : null;
    const newDate = this.dateInput.current?.value ? this.dateInput.current?.value : '';
    const newSpec = this.specialityInput.current?.value
      ? this.specialityInput.current?.value
      : null;
    const newTech: string[] = [];
    this.techArr.map((item) => {
      if (item.ref.current?.checked) newTech.push(item.content);
    });
    let newSrc: string | ArrayBuffer | null = '';
    let newCard: ICard;
    const newFile: File | null = this.fileInput.current?.files?.length
      ? this.fileInput.current?.files[0]
      : null;

    this.cardValidation(newName, newMale, newFemale, newFile);
    if (newFile && !this.errName && !this.errSex) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        newSrc = fileReader.result;
        newCard = {
          name: newName,
          sex: newMale ? newMale : newFemale,
          date: newDate,
          speciality: newSpec,
          technology: newTech,
          avaSrc: newSrc?.toString(),
        };
        this.setState({
          cards: [...this.state.cards, newCard],
        });
      };
      fileReader.readAsDataURL(newFile);
      this.clearForm();
      this.showMessage();
    } else {
      this.setState({
        errFlag: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          nameInput={this.nameInput}
          maleInput={this.maleInput}
          femaleInput={this.femaleInput}
          dateInput={this.dateInput}
          specialityInput={this.specialityInput}
          fileInput={this.fileInput}
          techArr={this.techArr}
          errName={this.errName}
          errSex={this.errSex}
          errFile={this.errFile}
          classMsg={this.state.classMsg}
        />

        <div>
          {this.state.cards.length
            ? this.state.cards.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  sex={item.sex}
                  date={item.date}
                  speciality={item.speciality}
                  technology={item.technology}
                  avaSrc={item.avaSrc}
                />
              ))
            : ''}
        </div>
      </div>
    );
  }
}

export default FormPage;
