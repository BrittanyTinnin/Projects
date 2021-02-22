import React, {Component} from 'react'

export default class TodoComponent extends Component {

    render(){
        return <div>Todo Component for this id{this.props.match.params.id} </div>
    }
}