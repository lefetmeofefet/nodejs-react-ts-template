import * as React from "react";
import {postData} from "../utils"

// Properties interface
export interface HelloProps {
    compiler: string;
    framework: string;
}

// State interface
interface HelloState {
    messageText: string;
}

// Component `Hello` uses props and state interfaces
export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: any) {
        super(props);
        this.state = {
            messageText: "Press button to generate text"
        }
    }

    render() {
        return <div>
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
            <button onClick={() => this.fetchMessage()}>Load important content</button>
            <Message text={this.state.messageText}/>
        </div>;
    }

    fetchMessage() {
        postData("getMessage", {
            nothing: "This is an empty request!"
        })
            .then(message => {
                this.setState({
                    messageText: message
                })
            })
    }
}


interface MessageProps {
    text: string
}

// Element as anonymous function
const Message = (props: MessageProps) => <div>{props.text}</div>;
