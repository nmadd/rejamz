import React from 'react';
import store from '../../redux/store/store';
import {playPauseCurrentSong, muteSound} from '../../redux/actions/actions';
import PlayPauseButton from '../PlayPauseButton.jsx';

const PlayerView = (props) => {
  const dispatchPlayPause = () => store.dispatch(playPauseCurrentSong());
  const dispatchMuteSound = () => store.dispatch(muteSound());
  return (
    <div>
        <h3>Hello from player bar</h3>
        <PlayPauseButton />
        <button onClick={dispatchMuteSound}>Mute</button>
    </div>
  )
};

export default PlayerView;
