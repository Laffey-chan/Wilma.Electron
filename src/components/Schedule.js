import React from 'react';

class Schedule extends React.Component{
    constructor(props){
        super(props);
        this.state = {SID: this.props.SID};
        console.log(this.state.SID);
    }
    render(){
        return(
            <p>{this.state.SID} gg</p>
        )
    }
}
export default Schedule;