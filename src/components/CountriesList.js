import React from "react";
import { Link } from "react-router-dom";

class CountriesList extends React.Component {
    // state = {
    //     allCountries: this.props.listOfCountries
    // }


showAllCountries = () => {
    return this.props.listOfCountries.map(eachCountry => {
        return (
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action" to = {`/country/${eachCountry.cca3}`}>{eachCountry.flag}{eachCountry.name.common}</Link>
                </div>
            </div>
                
        )
    })


}

    render(){


        return(
            <>
  
          {this.showAllCountries()}
          </>
        )
    }

}

export default CountriesList;