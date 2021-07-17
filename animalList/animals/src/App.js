




import React from "react";
import Search from "./Searchbox";
import Table from "./Table";

class App extends React.Component {

  state = {
    allAnimals:[]
  }

  receiveData = (city,animals,breed)=>{
    this.setState({allAnimals : this.allAnimals.filter((el)=>{
      return el.city == city && el.animal == animals && el.breed == breed;
    })})
  }



  render() {
    return (

        <React.Fragment>
          <Search sendData={this.receiveData}/>

          <div className="row">
            <div className = "col-2"></div>

          <div className="col-8">
            <Table sendDataToTable={this.state.allAnimals} />
          </div>
          </div>

        </React.Fragment>

    )
  }



}

export default App;
