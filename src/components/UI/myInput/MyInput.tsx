import * as React from 'react';
import { Component, createRef } from 'react';

type MyInputProps = Record<string, never>;

interface MyInputState {
  text: string;
}

class MyInput extends Component<MyInputProps, MyInputState> {
  private textInput;
  constructor(props: MyInputProps) {
    super(props);
    this.state = { text: '' };
    this.textInput = createRef<HTMLInputElement>();
  }

  componentDidMount(): void {
    this.textInput.current?.focus();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input type="text" ref={this.textInput} onChange={this.handleChange} />;
      </div>
    );
  }
}

export default MyInput;
