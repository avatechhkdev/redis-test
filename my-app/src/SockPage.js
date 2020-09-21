import React, { Component } from 'react';
import socketIOClient from "socket.io-client";


var socket;
class SockPage extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: "localhost:8080",
            role: "",
            msg: ""
        };
        socket = socketIOClient(this.state.endpoint);
    }

    componentDidMount() {

    }

    regSub = () => {
        socket.emit("regSub");
        this.setState({ role: "sub" })
        socket.on("replyFromServer", (msg) => {
            this.setState({msg: msg})
        });
    }

    publishMsg = () => {
        socket.emit("publishMsg");
        this.setState({ role: "pub" })
    }



    render() {
        return (
            <React.Fragment>
                <h1>Client</h1>
                {this.state.role}: {this.state.msg}
                <br></br>
                <button onClick={this.regSub}>
                    S
                </button> ===

                <button onClick={this.publishMsg}>
                    publishMsg
                </button>

            </React.Fragment>
        );
    }
}

export default SockPage;