import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../redux/store/store';
import PlayerView from '../components/player-view/PlayerView.jsx';


/**
@summary displays currently playing song image + up/down vote buttons
@param receives currently playing song as props
*/

class PlayerViewContainer extends Component {
  renderPlayerView() {
    return <PlayerView song={this.props.song}/>
  }

  renderLoading() {
    return <h1>Loading...</h1>
  }

  render() {
    return (
      <div>
        <h1>Player coming soon</h1>
        {this.props.song ? this.renderPlayerView() : this.renderLoading()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  song: state.currentSong
});

export default connect(mapStateToProps)(PlayerViewContainer);
