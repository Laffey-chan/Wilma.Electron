import React from 'react';
 
 class Login extends React.Component{
     constructor(props){
         super(props);

         this.state = {username: '', password: ''};

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.login = this.login.bind(this);
     }
     render(){
         return(
             <form onSubmit={this.handleSubmit}>
                 <input id="Username" type="text" placeholder='Käyttäjänimi' value={this.state.username} onChange={this.handleChange}></input>
                 <input id="Password" type="text" placeholder='Salasana' value={this.state.password} onChange={this.handleChange}></input>
                 <input type="submit" value="Kirjaudu"/>
             </form>
         );
     }
    login = () =>{
        this.props.getSID(this.state.username, this.state.password);
    }
    handleSubmit(event){
        this.login();
         event.preventDefault();
     }
     handleChange(event){
        if(event.target.id === "Username"){
            this.setState({username: event.target.value});
        }
        else if(event.target.id === "Password"){
            this.setState({password: event.target.value});
        }
        else{
            alert("ree");
        }
     }
 }
 export default Login;