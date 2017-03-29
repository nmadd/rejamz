import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../redux/store/store';
import PlayerBar from '../components/player-bar/PlayerBar.jsx';

/**
@summary controls for currently playing song
@param receives currently playing song as props
*/

class PlayerBarContainer extends Component {
  renderPlayerBar() {
    return <PlayerBar song={this.props.song}/>
  }

  renderLoading() {
    return <h1>Loading...</h1>
  }

  render() {
    return (
      <div>
        <h1>Player bar coming soon</h1>
        {this.props.song ? this.renderPlayerBar() : this.renderLoading()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  song: state.currentSong
});

export default connect(mapStateToProps)(PlayerBarContainer);
