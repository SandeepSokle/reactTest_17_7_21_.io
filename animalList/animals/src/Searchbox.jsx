  
import React from "react";

class Search extends React.Component {
  state = {
      allAnimals:[],
      allCity:[],
      allanimalType:[],
      allanimalsBreedType:[]
  };


  componentDidMount() {
    fetch("/city")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allCity: json });

      });

      fetch("/animal")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allanimalType: json });

      });

      fetch("/breed")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allanimalsBreedType: json });

      });
  }


render(){
    return(
        <div class = " container row ">
<div className="col-3">
.
</div>

<div className="col-6">

<div class="input-group  m-2">
  <input type="text" class="form-control city" aria-label="Text input with dropdown button" placeholder = "city"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">

  {this.state.allCity.map((el) => {
          return (
            <li class="dropdown-item" key = "el " onClick = {
                ()=>{

                    document.querySelector(".city").value = el
                }

            }>{el}</li>
          );
        })}
        
{/* 
    <li>Action</li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}

  </ul>
</div>
   <div class="input-group  m-2">
  <input type="text" class="form-control animal" aria-label="Text input with dropdown button" placeholder = "Animal Type"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">

  {this.state.allanimalType.map((el) => {
          return (
            <li class="dropdown-item" key = "el " onClick = {()=>{

                document.querySelector(".animal").value = el
            }
            }>{el}</li>
          );
        })}


    {/* <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}

  </ul>
</div>



<div class="input-group m-2">
  <input type="text" class="form-control breed" aria-label="Text input with dropdown button" placeholder = "Bread Type"/>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">


  {this.state.allanimalsBreedType.map((el) => {
          return (
            <li class="dropdown-item" key = "el" onClick = {
                ()=>{

                    document.querySelector(".breed").value = el
                }

            }>{el}</li>
          );
        })}

    {/* <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}

  </ul>
</div>
<div className="row">
    <div className="col-3">

    </div>
<button type="button" class="btn btn-primary col-6 m-3" onClick = {
    ()=>{
        let allanimals = this.state.allAnimals;

        allanimals = allanimals.filter((el) => {
             return el.id != el.id;
        });

        this.props.sendData(
            document.querySelector(".city").value,document.querySelector(".animal").value,document.querySelector(".breed").value
        )
        this.setState({ allAnimals: allanimals });
    }
}   >Submit</button>

</div>
        </div></div>
    )
}



}



export default Search;