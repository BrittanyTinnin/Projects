import React, {Component} from 'react';

class TodoApp extends Component {

    render(){
        return (
            <div><LoginComponent/></div>
        )
    }
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null;
}
function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null;
}

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'brittcodes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (event) => {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = (event) => {
        //brittcodes,awesome
        console.log(this.state);
        if(this.state.username==='brittcodes' && this.state.password==='awesome'){
            console.log('Successful');
            this.setState({hasLoginFailed: false})
            this.setState({showSuccessMessage: true})
        } else {
            console.log('False');
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
        }

    }

   

    // handleUsernameChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handlePasswordChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render(){
        return (
            <>
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

export default TodoApp;