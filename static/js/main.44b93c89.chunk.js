(this.webpackJsonpelecteds=this.webpackJsonpelecteds||[]).push([[0],{37:function(e,t,n){},54:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),o=n(38),i=n.n(o),s=(n(54),n(37),n(7)),l=n(8),d=n(10),j=n(9),u=(n(62),n(61),c.Component,c.Component,function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"ReppingNYC is currently focused on inputting every city council candidate into the database. The next leg of the project is to send a slate of questions to each candidate and host their answers on the site. The site is under construction. Info sitting elected officials is out of date as of the 2020 election."}),Object(r.jsxs)("p",{children:["Repping is operated by JG, you can find me on ig @dr_ipping, twitter @userspo, and much of the coding and data entry is livestreamed at ",Object(r.jsx)("a",{href:"twitch.tv/reppingnyc",target:"_blank",rel:"noopener noreferrer",className:"textlink",children:"twitch.tv/reppingnyc"}),". Please come and say hi if you don't know me, I'd love to make your acquaintance. "]})]})}}]),n}(c.Component)),h=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"this will be a place to connect people with resources related to voting registration and rights, ways to keep informed, and updates to the voting process like the introduction of ranked choice."}),Object(r.jsx)("p",{children:"additionally, this section can house links and information to organizations in the city doing work such as tenant organizing, mutual aid, support for the unhoused, police abolition, prison abolition, etc."}),Object(r.jsx)("p",{children:"info on outside orgs collected here should be informing constituents either how to be connected to services or of the relationship btw the org and electeds."}),Object(r.jsx)("p",{children:"Please send resources to reppingnyc@gmail.com"})]})}}]),n}(c.Component),b=(c.Component,n(25)),f=function(e){var t=e.obj,n=Object(c.useState)(!1),a=Object(b.a)(n,2),o=a[0],i=a[1];return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:["Name: ",t.name]}),Object(r.jsxs)("p",{children:["Phone Number: ",t.phone]}),Object(r.jsxs)("p",{children:["Overview: ",t.overview]}),Object(r.jsxs)("p",{children:["Notes: ",t.notes]}),!o&&Object(r.jsx)("p",{onClick:function(){return i(!o)},children:"Expand"}),o&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{onClick:function(){return i(!o)},children:"Collapse"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Votes:"}),t.votes.map((function(e){return Object(r.jsxs)("p",{children:["- ",e.bill,": ",e.vote," | ",e.comment]})}))]})]})]})},x=function(e){var t=e.obj;return Object(r.jsx)(r.Fragment,{children:t.id?Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),t.district?Object(r.jsxs)("p",{children:["District: ",t.id,", ",t.district]}):null,t.title?Object(r.jsxs)("p",{children:[t.region," ",t.title]}):null,t.loser?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Current:"}),Object(r.jsx)(f,{obj:t.loser.current}),Object(r.jsx)("p",{children:"Next:"}),Object(r.jsx)(f,{obj:t.loser.next})]}):Object(r.jsx)(f,{obj:t}),Object(r.jsx)("hr",{})]}):Object(r.jsx)("p",{})})},p=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={council:{},councilId:"",councilArr:["Select",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],councilData:{},senate:{},senateId:"",senateArr:["Select",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],senateData:{},assembly:{},assemblyId:"",assemblyArr:["Select",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],assemblyData:{},house:{},houseId:"",houseArr:["Select",3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],houseData:{},fedSenateData:{},boro:"",execData:[],boroPres:{},boroDA:{}},e.componentDidMount=function(){fetch("council.json").then((function(e){return e.json()})).then((function(t){e.setState({councilData:t.electeds})})),fetch("stateSenate.json").then((function(e){return e.json()})).then((function(t){e.setState({senateData:t.electeds})})),fetch("assembly.json").then((function(e){return e.json()})).then((function(t){e.setState({assemblyData:t.electeds})})),fetch("house.json").then((function(e){return e.json()})).then((function(t){e.setState({houseData:t.electeds})})),fetch("execAndSenate.json").then((function(e){return e.json()})).then((function(t){e.setState({execData:t.electeds,fedSenateData:t.senators})}))},e.handleCouncil=function(t){var n=e.state.councilData.find((function(e){return e.id===parseInt(t.target.value)}));e.setState({council:n,councilId:n.id}),console.log(e.state.council)},e.handleBoro=function(t){var n=e.state.execData.filter((function(e){return e.region===t.target.value})).find((function(e){return"Borough President"===e.title})),r=e.state.execData.filter((function(e){return e.region===t.target.value})).find((function(e){return"District Attorney"===e.title}));e.setState({boroPres:n,boroDA:r,boro:t.target.value})},e.handleSenate=function(t){var n=e.state.senateData.find((function(e){return e.id===parseInt(t.target.value)}));e.setState({senate:n,senateId:n.id})},e.handleAssembly=function(t){var n=e.state.assemblyData.find((function(e){return e.id===parseInt(t.target.value)}));e.setState({assembly:n,assemblyId:n.id})},e.handleHouse=function(t){var n=e.state.houseData.find((function(e){return e.id===parseInt(t.target.value)}));e.setState({house:n,houseId:n.id})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.senate,n=e.senateArr,c=e.senateId,a=e.council,o=e.councilArr,i=e.councilId,s=e.boro,l=e.boroPres,d=e.boroDA,j=e.assembly,u=e.assemblyArr,h=e.assemblyId,b=e.house,f=e.houseArr,p=e.houseId,O=e.execData;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("a",{title:"Find Your Elected Officials at mygovnyc.org",href:"https://www.mygovnyc.org/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:"http://www.mygovnyc.org/img/WRMbutton184px.gif"})}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"Link to: A service of the Graduate Center, City University of New York by the Center for Urban Research in partnership with the League of Women Voters of the City of New York."}),Object(r.jsx)("h2",{children:"This information is currently out of date as of the November 2020 election (12/21/2020) -jg"}),Object(r.jsxs)("p",{children:["Borough---",Object(r.jsxs)("select",{onChange:this.handleBoro,value:s,children:[Object(r.jsx)("option",{value:"?",children:"Select"}),Object(r.jsx)("option",{value:"Brooklyn",children:"Brooklyn"}),Object(r.jsx)("option",{value:"Bronx",children:"Bronx"}),Object(r.jsx)("option",{value:"Queens",children:"Queens"}),Object(r.jsx)("option",{value:"Staten Island",children:"Staten Island"}),Object(r.jsx)("option",{value:"Manhattan",children:"Manhattan"})]})]}),Object(r.jsx)(x,{obj:l}),Object(r.jsx)(x,{obj:d}),Object(r.jsxs)("p",{children:["Council---",Object(r.jsx)("select",{onChange:this.handleCouncil,value:i,children:o.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})]}),Object(r.jsx)(x,{obj:a}),Object(r.jsxs)("p",{children:["Senate---",Object(r.jsx)("select",{onChange:this.handleSenate,value:c,children:n.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})]}),Object(r.jsx)(x,{obj:t}),Object(r.jsxs)("p",{children:["Assembly---",Object(r.jsx)("select",{onChange:this.handleAssembly,value:h,children:u.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})]}),Object(r.jsx)(x,{obj:j}),Object(r.jsxs)("p",{children:["House---",Object(r.jsx)("select",{onChange:this.handleHouse,value:p,children:f.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})]}),Object(r.jsx)(x,{obj:b}),Object(r.jsx)("p",{children:"Citywide"}),O.filter((function(e){return"State"===e.region})).map((function(e){return Object(r.jsx)(x,{obj:e})})),O.filter((function(e){return"City"===e.region})).map((function(e){return Object(r.jsx)(x,{obj:e})}))]})}}]),n}(c.Component),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={body:"",councilData:[],senateData:[],assemblyData:[],houseData:[],execData:[],fedSenateData:[]},e.componentDidMount=function(){fetch("council.json").then((function(e){return e.json()})).then((function(t){e.setState({councilData:t.electeds})})),fetch("stateSenate.json").then((function(e){return e.json()})).then((function(t){e.setState({senateData:t.electeds})})),fetch("assembly.json").then((function(e){return e.json()})).then((function(t){e.setState({assemblyData:t.electeds})})),fetch("house.json").then((function(e){return e.json()})).then((function(t){e.setState({houseData:t.electeds})})),fetch("execAndSenate.json").then((function(e){return e.json()})).then((function(t){e.setState({execData:t.electeds,fedSenateData:t.senators})}))},e}return Object(l.a)(n,[{key:"handleClick",value:function(e){this.setState({body:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.senateData,c=t.fedSenateData,a=t.councilData,o=t.assemblyData,i=t.houseData,s=t.execData;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"This information is currently out of date as of the November 2020 election (12/21/2020) -jg"}),Object(r.jsx)("p",{onClick:function(){return e.handleClick("executive")},className:"nav",children:"Executives"}),Object(r.jsx)("p",{onClick:function(){return e.handleClick("federal")},className:"nav",children:"Federal"}),Object(r.jsx)("p",{onClick:function(){return e.handleClick("senate")},className:"nav",children:"State Senate"}),Object(r.jsx)("p",{onClick:function(){return e.handleClick("assembly")},className:"nav",children:"Assembly"}),Object(r.jsx)("p",{onClick:function(){return e.handleClick("council")},className:"nav",children:"Council"}),"executive"===this.state.body?Object(r.jsx)(r.Fragment,{children:s.map((function(e){return Object(r.jsx)(x,{obj:e})}))}):null,"federal"===this.state.body?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"Senate:"}),c.map((function(e){return Object(r.jsx)(x,{obj:e})})),Object(r.jsx)("p",{children:"House:"}),i.map((function(e){return Object(r.jsx)(x,{obj:e})}))]}):null,"senate"===this.state.body?Object(r.jsx)(r.Fragment,{children:n.map((function(e){return Object(r.jsx)(x,{obj:e})}))}):null,"assembly"===this.state.body?Object(r.jsx)(r.Fragment,{children:o.map((function(e){return Object(r.jsx)(x,{obj:e})}))}):null,"council"===this.state.body?Object(r.jsx)(r.Fragment,{children:a.map((function(e){return Object(r.jsx)(x,{obj:e})}))}):null]})}}]),n}(c.Component),v=n(2),m=n(3);function g(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    border-radius: 5px;\n    border: 2px solid #4CAF50;\n    padding: 10px;\n    margin: 10px 0;\n"]);return g=function(){return e},e}var y=m.a.div(g());function w(){var e=Object(v.a)(["\n    display: flex;\n    /* flex-wrap: wrap; */\n    flex-direction: row;\n    padding: 10px;\n    align-items: center;\n    @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return w=function(){return e},e}var k=m.a.div(w());function C(){var e=Object(v.a)(["\nborder-radius: 50%;\nheight: 200px;\nwidth: 200px;\nobject-fit: cover;\nborder: 5px solid grey\n"]);return C=function(){return e},e}var S=m.a.img(C());function D(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    padding-left: 25px;\n"]);return D=function(){return e},e}var A=m.a.div(D());function N(){var e=Object(v.a)(["\n    margin: 0.5em 0\n"]);return N=function(){return e},e}var F=m.a.h1(N());function _(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: center;\n"]);return _=function(){return e},e}var z=m.a.div(_());function I(){var e=Object(v.a)(["\ndisplay: block;\nword-wrap: break-word;\nmax-width: 61vw;\n"]);return I=function(){return e},e}var B=m.a.p(I());function M(){var e=Object(v.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n"]);return M=function(){return e},e}var L=m.a.div(M());function R(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n"]);return R=function(){return e},e}var P=m.a.div(R());function J(){var e=Object(v.a)(['\n    padding: 2px;\n    border-radius: 5px;\n    border: 2px solid grey;\n    background-color: #4CAF50;\n    color: black;\n    font-size: 14px;\n    cursor: pointer;\n    text-decoration: none;\n    font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;\n\n    &:hover {\n    background-color: white\n  }\n']);return J=function(){return e},e}var Y=m.a.button(J());function E(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n"]);return E=function(){return e},e}var T=m.a.div(E());function G(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n"]);return G=function(){return e},e}var H=m.a.div(G());function Q(){var e=Object(v.a)(["\n    padding: 5px;\n"]);return Q=function(){return e},e}var V=m.a.a(Q());function W(){var e=Object(v.a)(["\n    padding: 5px;\n"]);return W=function(){return e},e}var q=m.a.p(W());function U(){var e=Object(v.a)(["\n    padding: 5px;\n    border-radius: 5px;\n    border: 2px solid #4CAF50;\n    background-color: white;\n    color: black;\n    font-size: 16px;\n    cursor: pointer;\n    text-decoration: none;\n    margin: 3px;\n    &:hover {\n    color: white;\n    background-color: #4CAF50\n  }\n"]);return U=function(){return e},e}var Z=m.a.a(U()),X=function(e){var t=e.obj;return Object(r.jsx)(Z,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.text})};function K(){var e=Object(v.a)(["\n    padding: 5px 15px;\n    border-radius: 5px;\n    border: 2px solid #4CAF50;\n    background-color: white;\n    color: black;\n    font-size: 16px;\n"]);return K=function(){return e},e}var $=m.a.div(K()),ee=function(e){var t=e.obj;return Object(r.jsxs)($,{children:[Object(r.jsxs)("p",{children:["Q: ",t.q]}),Object(r.jsxs)("p",{children:["A: ",t.a]}),Object(r.jsx)(L,{children:t.links.map((function(e){return Object(r.jsx)(X,{obj:e})}))})]})},te=n(14);var ne=function(e){return Object(r.jsxs)("svg",Object(te.a)(Object(te.a)({"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 98"},e),{},{children:[Object(r.jsx)("rect",{x:.81,y:1,width:98,height:98,rx:7.65,transform:"rotate(90 49.905 49.095)"}),Object(r.jsx)("path",{d:"M90.84 22.34a34.74 34.74 0 01-8.54 2.43c1.37-.23 3.39-2.72 4.2-3.72a15.77 15.77 0 002.84-5.17c.07-.15.12-.34 0-.45a.52.52 0 00-.46 0 43.63 43.63 0 01-10.13 3.88.68.68 0 01-.7-.19 8.48 8.48 0 00-.88-.91 18.09 18.09 0 00-4.91-3A17 17 0 0064.71 14a18.07 18.07 0 00-7.14 2 18.59 18.59 0 00-5.76 4.71 17.89 17.89 0 00-3.44 6.89 18.73 18.73 0 00-.18 7.32c.06.41 0 .46-.35.41-13.91-2.07-25.45-7-34.81-17.72-.41-.46-.63-.46-1 0-4.1 6.14-2.11 16 3 20.85a27.76 27.76 0 002.16 1.93 18 18 0 01-6.72-1.89c-.41-.25-.61-.11-.65.35a11.44 11.44 0 00.11 2 17.87 17.87 0 0011 14.23 10.66 10.66 0 002.23.68 19.58 19.58 0 01-6.59.2c-.48-.09-.66.15-.48.61 2.9 7.91 9.16 10.26 13.84 11.6.63.11 1.26.11 1.89.25 0 .06-.08.06-.11.11-1.56 2.37-7 4.14-9.46 5a33.7 33.7 0 01-14.32 1.85c-.77-.11-.93-.1-1.14 0s0 .32.22.52c1 .64 2 1.22 3 1.77a47.64 47.64 0 009.6 3.84c17.24 4.76 36.67 1.26 49.58-11.6 10.17-10.11 13.73-24 13.73-38 0-.54.65-.84 1-1.13a33.35 33.35 0 006.75-7 2.07 2.07 0 00.52-1.37v-.07c0-.23 0-.16-.35 0z",fill:"#fff"})]}))};var re=function(e){return Object(r.jsxs)("svg",Object(te.a)(Object(te.a)({id:"ig-icon_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 98"},e),{},{children:[Object(r.jsx)("defs",{children:Object(r.jsx)("style",{children:".ig-icon_svg__cls-1{fill:#fff}"})}),Object(r.jsx)("rect",{x:.81,y:1,width:98,height:98,rx:7.65,transform:"rotate(90 49.905 49.095)"}),Object(r.jsx)("path",{className:"ig-icon_svg__cls-1",d:"M71.3 24.29A4.69 4.69 0 1076 29a4.68 4.68 0 00-4.7-4.71zM50.58 30.31A19.71 19.71 0 1070.16 50a19.66 19.66 0 00-19.58-19.69zm0 32.33A12.63 12.63 0 1163.12 50a12.59 12.59 0 01-12.54 12.64z",transform:"translate(-.81 -1)"}),Object(r.jsx)("path",{className:"ig-icon_svg__cls-1",d:"M66.12 90H34.39a24 24 0 01-23.87-24V34a24 24 0 0123.87-24h31.73A24 24 0 0190 34v32a24 24 0 01-23.88 24zM34.39 17.53A16.48 16.48 0 0018 34v32a16.47 16.47 0 0016.39 16.5h31.73A16.47 16.47 0 0082.52 66V34a16.47 16.47 0 00-16.4-16.51z",transform:"translate(-.81 -1)"})]}))};var ce=function(e){return Object(r.jsxs)("svg",Object(te.a)(Object(te.a)({"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 98 98"},e),{},{children:[Object(r.jsx)("rect",{x:.81,y:1,width:98,height:98,rx:7.65,transform:"rotate(90 49.905 49.095)"}),Object(r.jsx)("path",{d:"M48.43 11.29A37.71 37.71 0 1086.19 49a37.78 37.78 0 00-37.76-37.71zm24.85 17.8a31.7 31.7 0 017 19.42 79.34 79.34 0 00-14.76-1.42 60.58 60.58 0 00-7.27.42c-.21-.51-.42-1-.64-1.52-.64-1.51-1.33-3-2-4.48 11.16-4.59 16.55-11 17.67-12.42zm-24.85-11.9a31.82 31.82 0 0121 7.91c-.89 1.22-5.72 7.24-16.48 11.31A170.92 170.92 0 0041.19 18a31.73 31.73 0 017.2-.82zm-13.71 3.09A206.66 206.66 0 0146.4 38.45a120.54 120.54 0 01-28.84 3.84h-.31a32 32 0 0117.47-22zm-18.2 28.77v-.79h.83a119.57 119.57 0 0031.87-4.53c.86 1.68 1.68 3.38 2.44 5.09-.36.1-.71.2-1.06.32-16 5.15-24.71 18.78-26.06 21a31.69 31.69 0 01-8-21.11zm31.91 31.86a31.8 31.8 0 01-19.46-6.63c.91-1.79 7.53-13.7 25-19.78a132.2 132.2 0 016.75 23.94 31.63 31.63 0 01-12.32 2.48zm18.07-5.62a140 140 0 00-6.12-22.37 42.65 42.65 0 016.42-.48 47.44 47.44 0 0113.1 1.83 31.92 31.92 0 01-13.4 21z",fill:"#fff"})]}))},ae=function(e){var t=e.obj,n=Object(c.useState)(!1),a=Object(b.a)(n,2),o=a[0],i=a[1];return Object(r.jsxs)(y,{children:[Object(r.jsxs)(k,{children:[Object(r.jsx)(S,{src:t.photo}),Object(r.jsxs)(A,{children:[Object(r.jsx)(F,{children:t.name}),Object(r.jsxs)(z,{children:[t.website?Object(r.jsx)(V,{href:t.website,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(ce,{width:"30px",height:"30px"})}):null,t.instagram?Object(r.jsx)(V,{href:t.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(re,{width:"30px",height:"30px"})}):null,t.twitter?Object(r.jsx)(V,{href:t.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(ne,{width:"30px",height:"30px"})}):null,Object(r.jsx)(q,{children:t.phone}),Object(r.jsx)(q,{children:t.email})]}),Object(r.jsx)(B,{children:t.overview}),Object(r.jsx)(L,{children:t.links.map((function(e){return Object(r.jsx)(X,{obj:e})}))})]})]}),Object(r.jsxs)(P,{children:[!o&&Object(r.jsx)(Y,{onClick:function(){return i(!o)},children:"Show More"}),o&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Y,{onClick:function(){return i(!o)},children:"Show Less"}),Object(r.jsx)("h4",{children:"Endorsements:"}),Object(r.jsx)(T,{children:t.endorsements.map((function(e){return Object(r.jsx)(X,{obj:e})}))}),Object(r.jsxs)(H,{children:[Object(r.jsx)("h4",{children:"Questions from Repping:"}),t.questions.map((function(e){return Object(r.jsx)(ee,{obj:e})}))]})]})]})]})},oe=n(15);function ie(){var e=Object(v.a)(["\n    padding: 5px;\n    border-radius: 5px;\n    border: 2px solid #4CAF50;\n    background-color: white;\n    color: black;\n    font-size: 16px;\n    text-decoration: none;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 10px 0;\n  \n"]);return ie=function(){return e},e}var se=m.a.div(ie());function le(){var e=Object(v.a)(["\n    padding: 5px;\n    border-radius: 5px;\n    border: 2px solid #4CAF50;\n    background-color: white;\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    margin: 10px 0;\n  \n"]);return le=function(){return e},e}var de=m.a.div(le());function je(){var e=Object(v.a)(["\n    padding: 3px;\n    margin: 3px;\n    border-radius: 5px;\n    border: 2px solid #4CAF50;\n    background-color: white;\n    color: black;\n    font-size: 16px;\n    cursor: pointer;\n    text-decoration: none;\n\n    &:hover {\n    color: white;\n    background-color: #4CAF50\n  }\n"]);return je=function(){return e},e}var ue=m.a.a(je()),he=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={districtJSON:[],district:"",councilArr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]},e.componentDidMount=function(){var t=e.props.match.params.id;e.setState({district:t}),fetch("http://repping.nyc/CouncilD".concat(t,"Candidates.json")).then((function(e){return e.json()})).then((function(t){e.setState({districtJSON:t.candidates})}))},e.componentDidUpdate=function(t){e.props.match.params.id!==t.match.params.id&&(e.setState({district:e.props.match.params.id}),fetch("http://repping.nyc/CouncilD".concat(e.props.match.params.id,"Candidates.json")).then((function(e){return e.json()})).then((function(t){e.setState({districtJSON:t.candidates})})))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.districtJSON,n=e.councilArr;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{children:"Select City Council District:"}),Object(r.jsx)(se,{children:n.map((function(e){return Object(r.jsx)(ue,{children:Object(r.jsx)(oe.b,{className:"littleClickerButton",to:"/cc/".concat(e.toString()),children:e.toString()})})}))}),Object(r.jsxs)(de,{children:[Object(r.jsxs)("p",{children:["Candidate information sourced from ",Object(r.jsx)("a",{className:"textLink",href:"https://docs.google.com/spreadsheets/d/1voaVJFTZD2XZgLgucTh879QAKzG3ZBnSp8ahO3sOXb8/edit#gid=0",target:"_blank",rel:"noopener noreferrer",children:"this spreadsheet"})," from two NYers, visit to find more detailed campaign finance information, potentially more up-to-date list of candidates, and find links to send gratitude for their labor"]}),Object(r.jsx)("a",{className:"textLink",href:"https://www.freepik.com/vectors/logo",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("p",{children:"Logo vectors created by myriammira"})}),"Use this service to find your current elected officials:",Object(r.jsx)("a",{title:"Find Your Elected Officials at mygovnyc.org",href:"https://www.mygovnyc.org/",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:"http://www.mygovnyc.org/img/WRMbutton184px.gif"})})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h4",{children:["Candidates for City Council District ",this.state.district]}),t.map((function(e){return Object(r.jsx)(ae,{obj:e})}))]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})}}]),n}(c.Component);function be(){var e=Object(v.a)(["\n    margin: 0.25em 0;\n    font: 50px;\n"]);return be=function(){return e},e}var fe=m.a.h1(be()),xe=n(4);var pe=function(){return Object(r.jsx)(oe.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(fe,{children:"REPPINGNYC"}),Object(r.jsx)(oe.b,{className:"nav",to:"/about",children:"about"}),Object(r.jsx)(xe.a,{exact:!0,path:"/about",children:Object(r.jsx)("p",{children:"This weblog is intended to provide young people access to information concerning elected civil servants in New York City."})}),Object(r.jsx)(oe.b,{className:"nav",to:"/resources",children:"resources"}),Object(r.jsx)(xe.a,{exact:!0,path:"/resources",children:Object(r.jsx)(h,{})}),Object(r.jsx)(oe.b,{className:"nav",to:"/cc/1",children:"City Council Candidates 2021"}),Object(r.jsx)(oe.b,{className:"nav",to:"/urReps",children:"find your representation"}),Object(r.jsx)(oe.b,{className:"nav",to:"/allReps",children:"all electeds by body"}),Object(r.jsx)(xe.a,{exact:!0,path:"/urReps",children:Object(r.jsx)(p,{})}),Object(r.jsx)(xe.a,{exact:!0,path:"/allReps",children:Object(r.jsx)(O,{})}),Object(r.jsx)(xe.a,{exact:!0,path:"/about",children:Object(r.jsx)(u,{})}),Object(r.jsx)(xe.a,{path:"/cc/:id",component:he})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.44b93c89.chunk.js.map