import React, { Component } from 'react';
import CandidateCard from './CandidateCard';
import './App.css';

import { Link } from 'react-router-dom';

import ClickerBox from './components/ClickerBox';
import ClickerBox2 from './components/ClickerBox2';
import ClickerContainer from "./components/ClickerContainer"

export default class CityCouncilShow extends Component {

    state = {
        districtJSON: [],
        district: "",
        councilArr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],
        
    }

    componentDidMount = () => {   
        const id = this.props.match.params.id
        this.setState({
            district: id
        })


        fetch(`https://repping.nyc/CouncilD${id}Candidates.json`,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(r => r.json())
        .then((data) => {
            this.setState({districtJSON: data.candidates})
        })

        // .then(res => res.text())          // convert to plain text
        // .then(text => console.log(text))

    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({
                district: this.props.match.params.id
                
            })
            fetch(`https://repping.nyc/CouncilD${this.props.match.params.id}Candidates.json`,{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
            .then(r => r.json())
            .then((data) => {
                this.setState({districtJSON: data.candidates})
            })
        }
    }

    // selectDistrict = (e) => {
    //     console.log(e.target.name)
    //     this.setState({district: e.target.name})
    // }

    render() {
        const { districtJSON, councilArr } = this.state
        return (
            <div>
                <div>
                    <h5>Select City Council District:</h5>
                    <ClickerBox>
                    {councilArr.map((num) => <ClickerContainer><Link className="littleClickerButton" to={`/cc/${num.toString()}`}>{num.toString()}</Link></ClickerContainer>)}
                    </ClickerBox>
                    <ClickerBox2>
                        <p>Candidate information sourced from <a className="textLink" href="https://docs.google.com/spreadsheets/d/1voaVJFTZD2XZgLgucTh879QAKzG3ZBnSp8ahO3sOXb8/edit#gid=0" target="_blank" rel="noopener noreferrer">this spreadsheet</a> from two NYers, visit to find more detailed campaign finance information, potentially more up-to-date list of candidates, and find links to send gratitude for their labor</p>
                        <a className="textLink" href="https://www.freepik.com/vectors/logo" target="_blank" rel="noopener noreferrer"><p>Logo vectors created by myriammira</p></a>
                        Use this service to find your current elected officials:
                        <a title="Find Your Elected Officials at mygovnyc.org" href="https://www.mygovnyc.org/" target="_blank" rel="noopener noreferrer"><img src="http://www.mygovnyc.org/img/WRMbutton184px.gif" /></a>
           
                    </ClickerBox2>
                </div>
                <div>
                    <h4>Candidates for City Council District {this.state.district}</h4>
                    {districtJSON.map((obj) => <CandidateCard obj={obj}/>)} 
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}
