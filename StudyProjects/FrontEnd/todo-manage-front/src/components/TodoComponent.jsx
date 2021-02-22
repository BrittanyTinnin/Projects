import React, {Component} from 'react'

export default class TodoComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 1,
            description: 'Learn Forms',
            targetDate: new Date()
        }
    }

    render(){
        return <div>Todo Component for this id{this.props.match.params.id} </div>
    }
}