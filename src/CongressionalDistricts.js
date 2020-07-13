import React, { Component } from 'react';
import topojson from 'topojson';
import * as d3 from 'd3'; 

class CongressionalDistricts extends Component {
    state = {
        usData: null,
        usCongress: null,

    }
    
    // componentWillMount() {

    //     var files = ["../us.json", "../us-congress-113.json"];

    //     Promise.all(files.map(url => d3.json(url))).then(function(values) {
    //         console.log(values);
    //         console.log();
    //     });
    // // d3.queue()
    // // .defer(d3.json, "../us.json")
    // // .defer(d3.json, "../us-congress-113.json")
    // // .await(
    // //     (error, usData, usCongress) => {
    // //         console.log(usData, usCongress);
    // //     }
    // // );
    // }
    
    
    render() {
        return(null)
    }
}

export default CongressionalDistricts;   