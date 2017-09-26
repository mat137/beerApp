import React from 'react';
import Request from 'superagent';
import _ from 'lodash'
const beerUrl = "https://api.punkapi.com/v2/beers";

var imgSize = {
  width: '110px',
  height: '300px'
}

var container = {
  width: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "solid red"
}

var singleBeerStyle = {
  margin: "15px"
}

var smallContainer = {
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: '30px'
}

var beerNameStyle = {
  width: '350px',
  color: '#ffcc00',
  fontSize: '20px',
  fontWeight: 'bold'
}

var beerTaglineStyle = {
  width: '350px',
  color: '#cccccc'
}

export default class Beer extends React.Component {
  constructor(){
    super();
    this.state = {
      url: "https://api.punkapi.com/v2/beers?page=1&per_page=20"
    };
  }

  componentWillMount(){
    Request.get(this.state.url).then((response)=>{
      this.setState({
        beers: response.body,
        total: response.body.length,
      });
    });
    // this.search();
  }

  updateSearch(){
    this.search(this.refs.query.value);
  }


  render() {
    var beers = _.map(this.state.beers, (beer)=>{
      return (
        <div style={singleBeerStyle}>
          <img style={imgSize} src={beer.image_url} />
          <div style={beerNameStyle}>{beer.name}, {beer.id}</div>
          <div style={beerTaglineStyle}>{beer.tagline}</div>
        </div>
      );
    })
    // <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text"/>*/
    return (
      <div style={container}>
        <div style={smallContainer}>{beers}</div>
        <span>Wynik: {this.state.total}</span>
      </div>
    );
  }
  search(query = "pale"){
    var url = "https://api.punkapi.com/v2/beers?beer_name=${query}";
    Request.get(url).then((response)=>{
      this.setState({
        beers: response.body,
        total: response.body.length
      });
    });
  }
}
