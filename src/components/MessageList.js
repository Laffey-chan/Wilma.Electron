import React from 'react';
import axios from 'axios';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { SID: this.props.SID};
        console.log(this.state.SID);
        axios.post('/messageList', { SID: this.state.SID })
            .then((res) => {
                this.setState({ messages: res.data.Messages });

                console.log(this.state.messages[0]);
            })
    }

    async componentDidMount() {
    }

    render() {
        if (this.state.messages) {
            let rows = [];
            for(let i = 0; i < 5; i++){
                rows.push(<p>{this.state.messages[i].Subject}</p>);
            }
            return (
                <tbody>{rows}</tbody>
            )
        }
        else
            return null;
    }
}
export default MessageList;