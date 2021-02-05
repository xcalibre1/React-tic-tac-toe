import React, { Component } from 'react'
import "../App.css"
export default class OneBlock extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="onediv" onClick={(event)=>(this.props.handleClick(event,this.props.currentPlayerTurn,this.props.rowIndex,this.props.colIndex))}>
               
            </div>
        )
    }
}
