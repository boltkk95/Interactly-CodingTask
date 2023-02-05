import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  videoState: 
    {
      id: "video1",
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: false,
      fullScreen: false,
}};


const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    progress: (state, action) => {
        
        state.videoState = {...state.videoState,
          progress: action.payload}
    },
    playing: (state) => {
      state.videoState = {...state.videoState,
      isPlaying: !state.videoState.isPlaying}
    },
    mute: (state) => {
      state.videoState = {...state.videoState,
      isMuted: !state.videoState.isMuted}
    },
    speed: (state, action) =>{
      state.videoState ={...state.videoState,
        speed: action.payload}
    },
    id: (state, action) => {
      state.videoState ={...state.videoState,
        id: action.payload}
    },
    changePlay: (state) => {
      state.videoState = {...state.videoState,
        isPlaying: false}
    },
    fullScreen: (state) => {
      state.videoState = {...state.videoState,
        fullScreen: true}
    }
  }
})

export default videoSlice.reducer
export const { progress, playing, mute, speed, id, changePlay} = videoSlice.actions