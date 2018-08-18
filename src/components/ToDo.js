import React, { Component } from 'react';

class ToDo extends Component {
    render () {
        return (
            <li>
         
         <span>{ this.props.description }</span>
         <input onClick={this.props.deleteTodo} type="button" value="completed"/>
       </li>
        );
    }
}

export default ToDo;