import {Howl} from 'howler';

const initialState = {
  currentSong: null,
  currentlyPlaying: false
}

// TODO: refactor this (as middleware?) to keep reducer purity
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SONG':
      let newSong = action.song;
      newSong.soundObject = new Howl({
        src: [action.song.url],
        volume: 0.1
      })
      return Object.assign({}, state, {currentSong: newSong})
    case 'MUTE_CURRENT_SONG':
      state.currentSong.soundObject.mute()
    case 'PLAY_PAUSE_CURRENT_SONG':
      if(state.currentlyPlaying === true) {
        state.currentSong.soundObject.pause()
        return Object.assign({}, state, {currentlyPlaying: false})
      } else {
        state.currentSong.soundObject.play()
        return Object.assign({}, state, {currentlyPlaying: true})
      }
    default:
      return state
  }
}

export default reducer;
