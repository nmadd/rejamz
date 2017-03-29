import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../redux/store/store';
import {playPauseCurrentSong} from '../redux/actions/actions'

/**
@summary controls for currently playing song
@param receives currently playing song as props
*/

class PlayPauseButton extends Component {
  renderPlay() {
    return <p>PLAY</p>
  }

  renderPause() {
    return <p>PAUSE</p>
  }

  dispatchPlayPause() {
    store.dispatch(playPauseCurrentSong())
  }

  render() {
    return (
      <button onClick={this.dispatchPlayPause}>{this.props.currentlyPlaying ? this.renderPause() : this.renderPlay() }</button>
    )
  }
}

const mapStateToProps = (state) => ({
  currentlyPlaying: state.currentlyPlaying
});

export default connect(mapStateToProps)(PlayPauseButton);
