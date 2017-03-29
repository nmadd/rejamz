import React from 'react';
import $ from 'jQuery';
import {Navbar} from '../index';
import {setCurrentSong} from '../../redux/actions/actions';
import store from '../../redux/store/store';
import PlayerBarContainer from '../../containers/PlayerBarContainer.jsx';

const App = React.createClass({
  componentDidMount() {
    let dummySong = {
      title: 'This is a test',
      image: 'https://s-media-cache-ak0.pinimg.com/originals/cb/c1/88/cbc188a023166963d695b5c137a2b54e.jpg',
      url: 'http://www.stephaniequinn.com/Music/Canon.mp3'
    };
    store.dispatch(setCurrentSong(dummySong))
    $.ajax({
      method: 'GET',
      url: '/auth'
    })
    .done((username) => {
      if(username && username[0] !== '<') {
        console.log(username + ' is logged in!');
        this.setState({username: username});
      } else {
        console.log('No on is logged in');
      }
    })

  },
  render() {
    return (
      <div>
        <Navbar items={[{text: 'Home', url: '/'}, {text: 'Login', url: '/login'}]} />
        {this.props.children}
        <PlayerBarContainer />
      </div>
    )
  }
});

export default App;
