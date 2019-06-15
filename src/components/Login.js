import React from 'react';
 
 class Login extends React.Component{
     constructor(props){
         super(props);
     }
     render(){
         return(
             <form>
                 <input type="text"></input>
                 <input type="submit"></input>
             </form>
         );
     }
 }
 export default Login;