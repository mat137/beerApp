import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Beer from './Beer';
import ButtonFFS from './ButtonFFS';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "BEER",
      url: "https://api.punkapi.com/v2/beers",
      page: 137
    };
  }

  changeTitle(title){
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <ButtonFFS page={this.state.page}/>
        <Beer />
      </div>
    );
  }
}
