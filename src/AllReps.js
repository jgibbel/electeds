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


    handleClick(evt) {
        this.setState({body: evt})
    }

    render() {
        const { senateData, fedSenateData, councilData, assemblyData, houseData, execData } = this.state;
        return (
            <div>
                <p onClick={() => this.handleClick("executive")}>Executives</p>
                

                <p onClick={() => this.handleClick("federal")}>Federal</p>
               

                <p onClick={() => this.handleClick("senate")}>State Senate</p>
                

                <p onClick={() => this.handleClick("assembly")}>Assembly</p>
                

                <p onClick={() => this.handleClick("council")}>Council</p>
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
