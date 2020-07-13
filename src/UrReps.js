import React, { Component } from 'react';
import RepCard from './RepCard'

class UrReps extends Component {

    state = {

        council: {},
        councilId: "",
        councilArr: ["Select",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],
        councilData: {},

        senate: {},
        senateId: "",
        senateArr: ["Select",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
        senateData: {},

        assembly: {},
        assemblyId: "",
        assemblyArr: ["Select",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
        assemblyData: {},

        house: {},
        houseId: "",
        houseArr: ["Select",3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        houseData: {},
        fedSenateData: {},

        boro: "",
        execData: [],
        boroPres: {},
        boroDA: {}
      };

      componentDidMount = () => {
        fetch('council.json')
        .then(r => r.json())
        .then((data) => {
            this.setState({councilData: data.electeds})
        })
        fetch('stateSenate.json')
        .then(r => r.json())
        .then((data) => {
            this.setState({senateData: data.electeds})
        })
        fetch('assembly.json')
        .then(r => r.json())
        .then((data) => {
            this.setState({assemblyData: data.electeds})
        })
        fetch('house.json')
        .then(r => r.json())
        .then((data) => {
            this.setState({houseData: data.electeds})
        })
        fetch('execAndSenate.json')
        .then(r => r.json())
        .then((data) => {
            this.setState({execData: data.electeds, fedSenateData: data.senators})
        })
      }

    
      handleCouncil = (event) => {
        var councilmember = this.state.councilData.find((rep) => rep.id === parseInt(event.target.value))
        this.setState({ council: councilmember,
                        councilId: councilmember.id
        });
        // debugger
        console.log(this.state.council)
      };

      handleBoro = (event) => {
        //   debugger;
          var boroPres = this.state.execData.filter((rep) => rep.region === event.target.value).find((rep) => rep.title === "Borough President")
          var boroDA= this.state.execData.filter((rep) => rep.region === event.target.value).find((rep) => rep.title === "District Attorney")
        this.setState({ boroPres: boroPres, boroDA: boroDA, boro: event.target.value });
      };


      handleSenate = (event) => {
        var senator = this.state.senateData.find((rep) => rep.id === parseInt(event.target.value))
        this.setState({ senate: senator,
        senateId: senator.id });
      };

      handleAssembly = (event) => {
        var assemblymember = this.state.assemblyData.find((rep) => rep.id === parseInt(event.target.value))
        this.setState({ assembly: assemblymember,
        assemblyId: assemblymember.id});
      };

      handleHouse = (event) => {
        var representative = this.state.houseData.find((rep) => rep.id === parseInt(event.target.value))
        this.setState({ house: representative, houseId: representative.id });
      };
    
      render() {
        const { senate, senateArr, senateId, council, councilArr, councilId, boro, boroPres, boroDA, assembly, assemblyArr, assemblyId, house, houseArr, houseId, execData } = this.state;
        
    
        return (
          <>
          <p>Borough---
            <select onChange={this.handleBoro} value={boro}>
              
              {/* {arr.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))} */}
            <option value="?">Select</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Bronx">Bronx</option>
            <option value="Queens">Queens</option>                
            <option value="Staten Island">Staten Island</option>
            <option value="Manhattan">Manhattan</option>
            </select>
            </p>

            <RepCard obj={boroPres} />
            <RepCard obj={boroDA} />

            <p>Council---
            <select onChange={this.handleCouncil} value={councilId}>
              
              {councilArr.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select>
            </p>
        
            <RepCard obj={council} />
          

            <p>Senate---
            <select onChange={this.handleSenate} value={senateId}>
              
              {senateArr.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select></p>

            <RepCard obj={senate} />

            <p>Assembly---
            <select onChange={this.handleAssembly} value={assemblyId}>
              
              {assemblyArr.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select></p>

            <RepCard obj={assembly} />

            <p>House---
            <select onChange={this.handleHouse} value={houseId}>
              
              {houseArr.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select></p>
            <RepCard obj={house} />

            <p>Citywide</p>
            {execData.filter((rep) => rep.region === "State").map((obj) => <RepCard obj={obj} />)}
            {execData.filter((rep) => rep.region === "City").map((obj) => <RepCard obj={obj} />)}
          </>
        );
      }
    
}

export default UrReps;
