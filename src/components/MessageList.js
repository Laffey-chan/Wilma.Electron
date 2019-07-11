import React from 'react';
import axios from 'axios';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { SID: this.props.SID, messageIndex: 0 };
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
            let downButton;
            let upButton
            console.log(this.state.messages.length)
            for (let i = this.state.messageIndex; i < this.state.messageIndex + 5; i++) {
                rows.push(<p>{this.state.messages[i].Subject}</p>);
            }
            if (this.state.messageIndex <= 0)
                downButton = <button disabled={true}>alas</button>
            else
                downButton = <button >alas</button>
            if (this.state.messageIndex + 5 >= this.state.messages.length)
                upButton = <button disabled={true}>ylös</button>
            else
                upButton = <button >ylös</button>
            return (
                <div>
                    <p>{Math.ceil((this.state.messageIndex + 5)/5)} / {Math.ceil(this.state.messages.length/5)}</p>
                    {downButton}{upButton}
                    {rows}
                </div>
            )
        }
        else
            return null;
    }
}
export default MessageList;