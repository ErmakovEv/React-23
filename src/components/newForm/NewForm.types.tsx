import { ICard } from '../card/Card.types';

export type FormTypes = {
  name: string;
  sex: string;
  date: string;
  speciality: string;
  techArr: string[];
  loadFile: FileList;
};

export type FormProps = {
  cardCreateHandler: (Card: ICard) => void;
};
