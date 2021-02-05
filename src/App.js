import logo from './logo.svg';
import './App.css';
import Row from "./Components/Row.js"
import React from "react"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      winning:["","","","","","","","",""],
      grid:[[0,0,0],[0,0,0],[0,0,0]],
      currentPlayerTurn:"x",
      winningConditions:[[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      result:"",
      winningCheck:function handleResultValidation(winningConditions,winning) {
        //Check for each winning condition
        for (let i = 0; i < winningConditions.length; i++) {
          const condition = winningConditions[i];
      
          let a = winning[condition[0]];
          let b = winning[condition[1]];
          let c = winning[condition[2]];
      
          if (a === "" || b === "" || c === "") {
            continue;
          }
      
          if (a === b && b === c) {
            return true;
          }
        }
        return false;
      }
    }
    this.base=this.state
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(event,y,row,col){
    console.log(event.target,y,row,col)
    let copy=this.state.winning
    let winc=this.state.winningConditions
    
    
    if(y=="x" && this.state.result==""){
      copy[3*row+col]="x";
      this.setState({currentPlayerTurn:"o",winning:copy})
    event.target.innerHTML="x"
      if(this.state.winningCheck(winc,copy))
        this.setState({result:" Player x Win"})
  }
    else if(y=="o" && this.state.result=="")
    { copy[3*row+col]="o";
      this.setState({currentPlayerTurn:"x",winning:copy})
    event.target.innerHTML="o"
    if(this.state.winningCheck(winc,copy))
        this.setState({result:" Player o Win"})
    }
    let flag=false
    let count=0;
    for(let i of copy){

      if(i!=""){
        count++;
      }

    }
    if(count==9)
      flag=true
    if(flag){
      this.setState({result:"Draw"})
    }
  

  }
  handleReset=()=>{
    window.location.reload(false)
  }
  render(){
  return (
    <>
    <h2 className="h2">{this.state.result}</h2>
    <div className="grandParent">
    {this.state.grid.map((val,index)=>(
      <Row row={val} rowIndex={index} key={index} handleClick={this.handleClick} currentPlayerTurn={this.state.currentPlayerTurn}/>
    ))
    }
    </div>
    <h2 className="h2">player {this.state.currentPlayerTurn} turn</h2>
    <span className="sp"><button onClick={this.handleReset}>Reset</button></span>
    </>
  )
}
}

export default App;
