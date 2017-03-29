export const setCurrentSong = (song) => ({
  type: 'SET_CURRENT_SONG',
  song
});

export const playPauseCurrentSong = () => ({
  type: 'PLAY_PAUSE_CURRENT_SONG'
});

export const muteSound = () => ({
  type: 'MUTE_CURRENT_SONG'
});
