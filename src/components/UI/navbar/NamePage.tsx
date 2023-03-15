import * as React from 'react';
import { Component } from 'react';

interface NamePageProps {
  loc: string;
}

class NamePage extends React.Component<NamePageProps> {
  render() {
    return <div>{this.props.loc}</div>;
  }
}

export default NamePage;
