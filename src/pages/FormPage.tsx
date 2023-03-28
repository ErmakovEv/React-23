import * as React from 'react';
import './FormPage.css';
import Form from '../components/form/Form';
import { ICard } from '../components/card/Card.types';
import CardList from '../components/cardList/CardList';

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
  private errDate = false;
  private errSpec = false;
  private errTech = false;
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
    file: File | null,
    date: string | null,
    spec: string | null,
    techArrlength: number
  ) => {
    male || female ? (this.errSex = false) : (this.errSex = true);
    file ? (this.errFile = false) : (this.errFile = true);
    name
      ? /^[a-zA-Z ]+$/.test(name) && name.length >= 3
        ? (this.errName = false)
        : (this.errName = true)
      : (this.errName = true);
    this.errDate = !date;
    spec === 'default' ? this.errSpec === true : this.errSpec === false;
    this.errTech = !techArrlength;
    console.log(techArrlength);
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
    this.fileInput.current ? (this.fileInput.current.value = '') : '';
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

    this.cardValidation(newName, newMale, newFemale, newFile, newDate, newSpec, newTech.length);
    if (
      newFile &&
      !this.errName &&
      !this.errSex &&
      !this.errDate &&
      !this.errSpec &&
      !this.errTech
    ) {
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
      <div className="container">
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
          errDate={this.errDate}
          errSpec={this.errSpec}
          errTech={this.errTech}
          classMsg={this.state.classMsg}
        />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default FormPage;
