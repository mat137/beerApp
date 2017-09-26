import React from 'react';

export default class ButtonFFS extends React.Component {
  constructor(){
    super();
    this.state = {
      url: "https://api.punkapi.com/v2/beers",
    };
  }

  handleClickPrev(e){
    // this.props.page = this.props.page -1;
    console.log(this.props.page);
  }
  handleClickNext(e){
    this.setState({page: this.props.page + 1});
    console.log(this.state.page);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickPrev.bind(this)}>Prev</button>
        <button onClick={this.handleClickNext.bind(this)}>Next</button>
      </div>
    );
  }
}
