import React from 'react';

const beerUrl = "https://api.punkapi.com/v2/beers";

export default class Beer extends React.Component {
  constructor(){
    super();
    this.state = {
      requestFailed: false
    };
  }

  componentDidMount(){
    fetch(beerUrl)
      .then(response => {
        if(!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          beerData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }
  render() {
    // console.log(this.props);
    if(this.state.requestFailed) return <p> Failed! </p>
    if(!this.state.beerData) return <p> Loading... </p>
    return (
      <div>
        <img src={this.state.beerData[0].image_url} alt="image missing..."/>
        <h4>{this.state.beerData[0].name}</h4>
        <span>{this.state.beerData[0].tagline}</span>
      </div>
    );
  }
}
