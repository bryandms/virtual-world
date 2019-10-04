import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Background from './fondo.jpg';
import Player from './components/Player';

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

  displayPlayers() {
    const { players } = this.state;

    return Object.keys(players).map((player, i) =>
      <Player key={i} style={{
        position: "absolute", top: players[player].y, left: players[player].x
      }} />
    )
  }

  componentDidMount() {
    const { socket } = this.state;
    socket.emit('new player');
    socket.on("state", data => this.setState({ players: data }));
    document.addEventListener('click', this.sendMovement, true);
  }
  

  render() {
    var sectionStyle = {
      width: "100%",
      height: "600px",
      backgroundImage: `url(${Background})`
    };
    
    return (
      
      <div style={ sectionStyle }> { this.displayPlayers() }</div>
    );
  }
}

export default App;
