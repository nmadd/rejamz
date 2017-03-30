import React from 'react';

const PlayerView = (props) => (
  <div>
    <h3>Hello from player view</h3>
    <img src={props.song.image}></img>
  </div>
);

export default PlayerView;
