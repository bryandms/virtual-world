import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: false,
      socket: socketIOClient("http://127.0.0.1:4000")
    }
  }

  sendMovement = (e) => {
    const { socket } = this.state;
    socket.emit('movement', { x: e.pageX, y: e.pageY });
  }

  componentDidMount() {
    const { socket } = this.state;
    socket.emit('new player');
    socket.on("state", data => this.setState({ players: data }));
    document.addEventListener('click', this.sendMovement, true);
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

export default App;