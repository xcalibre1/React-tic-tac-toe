import React, { Component } from 'react'
import OneBlock from "./OneBlock.js"
import "../App.css"
export default class Row extends Component {
    constructor(props){
        super(props)
        // console.log(this.props)
    }
    render() {
        return (
            <div className="parent" >
            {this.props.row.map((val ,index)=>(
            <OneBlock key={index} rowIndex={this.props.rowIndex} colIndex={index} handleClick={this.props.handleClick} currentPlayerTurn={this.props.currentPlayerTurn}/>))}
            </div>
        )
    }
}
