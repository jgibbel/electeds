import React, { Component } from 'react';
import RepCard from './RepCard';

class AllReps extends Component {

    state = {body: "",
            councilData: [],
            senateData: [],
            assemblyData: [],
            houseData: [],
            execData: [],
            fedSenateData: [],}


    componentDidMount = () => {
        fetch(`council.json`)
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


    handleClick(evt) {
        this.setState({body: evt})
    }

    render() {
        const { senateData, fedSenateData, councilData, assemblyData, houseData, execData } = this.state;
        return (
            <div>
                 <h2>This information is currently out of date as of the November 2020 election (12/21/2020) -jg</h2>
          
                <p onClick={() => this.handleClick("executive")} className="nav">Executives</p>
                

                <p onClick={() => this.handleClick("federal")} className="nav">Federal</p>
               

                <p onClick={() => this.handleClick("senate")} className="nav">State Senate</p>
                

                <p onClick={() => this.handleClick("assembly")} className="nav">Assembly</p>
                

                <p onClick={() => this.handleClick("council")} className="nav">Council</p>
                {this.state.body === "executive" ? 
                <>{execData.map((obj) => <RepCard obj={obj} />)}</>
                : null}
                {this.state.body === "federal" ? 
                <><p>Senate:</p>
                {fedSenateData.map((obj) => <RepCard obj={obj} />)}
                <p>House:</p>
                {houseData.map((obj) => <RepCard obj={obj} />)}
                </> : null}
                {this.state.body === "senate" ? <>{senateData.map((obj) => <RepCard obj={obj} />)}</> : null}
                {this.state.body === "assembly" ? <>{assemblyData.map((obj) => <RepCard obj={obj} />)}</>: null}
                {this.state.body === "council" ? <>{councilData.map((obj) => <RepCard obj={obj} />)}</> : null}
            </div>
        );
    }
}

export default AllReps;
