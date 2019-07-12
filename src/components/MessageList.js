import React from 'react';
import axios from 'axios';
import { thisExpression } from '@babel/types';

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
        this.increaseMessageIndex = this.increaseMessageIndex.bind(this);
        this.decreaseMessageIndex = this.decreaseMessageIndex.bind(this);
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
                if(i < this.state.messages.length)
                rows.push(<p>{this.state.messages[i].Subject}</p>)
            }
            if (this.state.messageIndex <= 0)
                downButton = <button disabled={true}>alas</button>
            else
                downButton = <button onClick={this.decreaseMessageIndex}>alas</button>
            if (this.state.messageIndex + 5 >= this.state.messages.length)
                upButton = <button disabled={true}>ylös</button>
            else
                upButton = <button onClick={this.increaseMessageIndex}>ylös</button>
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
    increaseMessageIndex() {
        this.setState({messageIndex: this.state.messageIndex + 5});
    }
    decreaseMessageIndex(){
        this.setState({messageIndex: this.state.messageIndex - 5})
    }
}
export default MessageList;