import React from 'react';
import classNames from 'classnames'

class Field extends React.Component {
    state = {data:[]};
componentDidMount(){
    const data = [];
    for(let i = 0; i < 100; i++){
       data[i]= false;
    }
    this.setState( ()=> {
        return {data};
    })
}
setDelay = event =>{
    this.setState (()=>{
        return {delay: event.target.value}
    }) 
};
startGame = ()=>{
    const delay = this.state.delay;
    this.setState ((state)=>{
       const random = this.getRandomInt(0,99);
       state.data[random] = true;
        return {data: state.data}
    }) 
}
getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
    render () {
    const data = this.state.data.map((item, key) => {
        return <div key={key} className="game-block"></div>
    }) 
           return (
               <React.Fragment>
            <div className="game">
             {data}
            </div>
            <input className="game-input" onChange={this.setDelay}/>
            <button className="game-start_button" onClick={this.startGame}>Start</button>
            </React.Fragment>
        );
    }
}

export default Field;