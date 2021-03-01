
import React from 'react'
import './App.css';
import countries from './countries.json'
import ReactDOM from "react-dom";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'


class App extends React.Component {
state = {
  countries,
  apiCountries: []
}

componentDidMount() {
axios.get(`https://restcountries.eu/rest/v2/all`)
.then (response => {
   console.log(response.data)
  let apiCountries = response.data;
  this.setState({
    apiCountries
  })
})
}


  render(){

    return (
<>

  <ul>
    {this.state.apiCountries.map(each=>{
      return(

      <li>{each.name}</li>
      )
    })}
  </ul>

      <div className="App">
  <Navbar/>
      {console.log(`api ${this.state.apiCountries.map(elem=>elem.name)}`)}
  
  
        <div class="container">
  
          <div class="row">
          <CountriesList listOfCountries= {this.state.countries}/>
            <Route exact path='/country/:id' render={(props) => <CountryDetails listOfCountries = {countries}  {...props}  />}/>
  
          </div>
   
        

      </div>
  
      </div>
      </>
    );
  }
}

export default App;
